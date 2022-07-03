import type { NextPage } from "next";
// @axios
import axios from "axios";
import { Video } from "../types";
import { NoResult, VideCard } from "../components";
interface IProps {
  videos: Video[];
}
const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => <VideCard post={video} key={video._id} />)
      ) : (
        <NoResult text={"No Videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};
export default Home;
