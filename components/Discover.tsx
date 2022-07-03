//@ React
import React from "react";
// @Next
import Link from "next/link";
import { useRouter } from "next/router";
// @Components
import { topics } from "../utils/constants";

const Discover = () => {
  const router = useRouter();
  const { topic: topicURl } = router.query;
  const sameStyle =
    "xl:border-2 hover:bg-primary cursor-pointer  px-3 py-2 rounded-md xl:rounded-4 flex items-center gap-2 justify-center";
  const activeTopicStyle = `xl:border-[#f51997]=   text-[#f51997] ${sameStyle}`;
  const topicStyle = `xl:border-gray-300  text-black ${sameStyle}`;
  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold m-3 mt-3  xl:block'>
        <div className='flex gap-3 flex-wrap'>
          {topics.map((topic) => (
            <Link href={`?topic=${topic.name}`} key={topic.name}>
              <div
                className={
                  topicURl === topic.name ? activeTopicStyle : topicStyle
                }
              >
                <span className='font-bold text-2xl xl:text-md'>
                  {topic.icon}
                </span>
                <span className='font-medium text-md hidden xl:block capitalize'>
                  {topic.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Discover;
