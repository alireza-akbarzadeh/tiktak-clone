// @Next
import { useRouter } from "next/router";
// @axios
import axios from "axios";
// @React
import { useState } from "react";
// @sanity
import { SanityAssetDocument } from "@sanity/client";
// @utils
import { topics } from "../utils/constants";
import { client } from "../utils/client";
// @store
import useAuthStore from "../store/authStore";
//@JSX
export const useUploadVideos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoAsset, setVideoAsset] = useState<
    SanityAssetDocument | undefined
  >();
  const [caption, setCaption] = useState<string>("");
  const [category, setCategory] = useState(topics[0].name);
  const [savingPost, setSavingPost] = useState<boolean>(false);

  const [wrongFileType, setWrongFileType] = useState<boolean>(false);

  const { userProfile }: { userProfile: any } = useAuthStore();

  const router = useRouter();
  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];
    if (fileTypes.includes(selectedFile.type)) {
      setIsLoading(true);
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          setVideoAsset(data);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setWrongFileType(true);
    }
  };

  const handlePost = async () => {
    if (caption && videoAsset?._id && category) {
      setSavingPost(true);
      const doc = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset?._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: "postedBy",
          _ref: userProfile?._id,
        },
        topic: category,
      };
      await axios.post("http://localhost:3000/api/post", doc);
      router.push("/");
    }
  };
  return {
    isLoading,
    wrongFileType,
    setCaption,
    setCategory,
    uploadVideo,
    handlePost,
    videoAsset,
    caption,
    savingPost,
  };
};
