//@ React
import React from "react";
// @Next
import Link from "next/link";
import { useRouter } from "next/router";
// @Components
import { topics } from "../utils/constants";

const Discover = () => {
  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold m-3 mt-3 hidden xl:block'>
        <div className='flex gap-3 flex-wrap'>
          {topics.map((topic) => (
            <Link key={`?topic=${topic.name}`} href={topic.name}>
              {topic.name}
              <div className=''>
                <span>{topic.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Discover;
