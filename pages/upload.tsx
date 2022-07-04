// @Icons
import { FaCloudUploadAlt } from "react-icons/fa";
// @utils
import { topics } from "../utils/constants";
// @sanity
import { SanityAssetDocument } from "@sanity/client";
// @ Hook
import { useUploadVideos } from "../Hook/useUploadVideos";
// @JSX
const Upload = () => {
  const {
    isLoading,
    wrongFileType,
    setCaption,
    setCategory,
    uploadVideo,
    handlePost,
    videoAsset,
    caption,
  } = useUploadVideos();

  return (
    <div className='flex   w-full h-full absolute left-0 top-[60px] mb-10 pt-10 lg:pt-20 bg-[#f8f8f8] justify-center'>
      <div className='bg-white rounded-lg  xl:h-[80vh]  w-[60%] flex gap-6 flex-wrap justify-between items-center p-14 pt-6'>
        <div className=''>
          <div className=''>
            <p className='text-2xl font-bold '>Upload Video</p>
            <p className='text-md text-gray-400 mt-1'>
              Host a Video to your Account
            </p>
          </div>
          <div
            className='border-dashed border-xl border-4
           border-gray-200 flex flex-col items-center justify-center
            outline-none mt-10 w-[260px] h-[460px] cursor-pointer p-10 hover:border-red-300 transition-colors ease-in-out duration-200 hover:bg-gray-100 '
          >
            {isLoading ? (
              <p>Uploading ...</p>
            ) : (
              <div>
                {videoAsset ? (
                  <div>
                    <video
                      loop
                      controls
                      className='rounded-xl mt-16 h-[450px] bg-black'
                      src={videoAsset.url}
                    ></video>
                  </div>
                ) : (
                  <label className='cursor-pointer'>
                    <div className='flex flex-col items-center justify-center h-full'>
                      <div className='flex flex-col items-center justify-center '>
                        <p className='font-bold text-xl'>
                          <FaCloudUploadAlt className='text-gray-300 text-6xl' />
                        </p>
                        <p className='text-xl font-semibold'>Upload Video</p>
                      </div>

                      <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                        MP or WebM or ogg <br /> 720 x 1280 or higher <br /> Up
                        to 10 minutes <br /> Less than 2GB
                      </p>
                      <p className='bg-[#f51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                        Select File
                      </p>
                    </div>
                    <input
                      type='file'
                      name='upload-video'
                      className='w-0 h-0'
                      onChange={uploadVideo}
                    />
                  </label>
                )}
              </div>
            )}
            {wrongFileType && (
              <p className='text-center text-xl text-red-400 font-semibold mt-4 w-[250px]'>
                Please select a Video File
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-3 pb-10'>
          <label
            htmlFor=''
            className='text-md font-medium flex flex-col gap-3 pb-10'
          >
            Caption
            <input
              type='text'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className='rounded outline-none text-md border-2 border-gray-200 p-2'
            />
          </label>
          <label
            className='text-md font-medium flex flex-col gap-3 pb-10'
            htmlFor=''
          >
            Choose a Category
            <select
              className='border-2 border-gray-200 outline-none text-md capitalize lg:p-4 py-2 px-2 rounded cursor-pointer '
              onChange={(e) => setCategory(e.target.value)}
            >
              {topics.map((topic) => (
                <option
                  className='bg-white outline-none border-1  capitalize text-gray-700 text-md p-2 hover:bg-slate-300'
                  key={topic.name}
                  value={topic?.name}
                >
                  {topic.name}
                </option>
              ))}
            </select>
            <div className='flex gap-6 mt-10'>
              <button
                className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
                type='button'
                onClick={() => {}}
              >
                Discard
              </button>
              <button
                className='bg-[#f51997] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
                type='button'
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Upload;
