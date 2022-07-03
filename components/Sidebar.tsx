// @React
import React, { useState } from "react";
// @Next
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
// @Auth Third-party
import { GoogleLogin, googleLogout } from "@react-oauth/google";

// @icons
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Footer, SuggestedAccounts, Discover } from "../components";
// @NextPage
const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink =
    "flex items-center justify-center gap-3 hover:bg-primary p-3 xl:justify-start cursor-pointer font-semibold rounded-lg text-[#F51997]";
  const userProfile = false;
  return (
    <div>
      <div
        onClick={() => setShowSidebar((prev) => !prev)}
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href={"/"}>
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='text-xl hidden xl:block'>For You</span>
              </div>
            </Link>
          </div>
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
