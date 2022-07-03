// @React
import React, { useState } from "react";
// @Next
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
// @Auth Third-party
import GoogleLogin from "react-google-login";
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
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400'>
                Login in to like and comment om videos
              </p>
              <div className='pr-4'>
                <GoogleLogin
                  clientId=''
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  render={(renderProps) => (
                    <button
                      className='bg-white text-lg text-[#F51997] border-[1px] 
                      border-[#F51997] font-semibold py-3 px-6 rounded-md 
                      outline-none w-full mt-3 hover:text-white cursor-pointer transition-colors ease-in-out duration-300 hover:bg-[#F51997]'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  cookiePolicy='single-host-origin'
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
