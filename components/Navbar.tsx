// @React
import React from "react";
// @Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// @Auth Third-Party
import { GoogleLogin, googleLogout } from "@react-oauth/google";
// @icons
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
//@ utils
import { createOrGetUser } from "../utils/index";
import Logo from "../utils/tiktik-logo.png";
// @persist Data
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { addUser, userProfile, removeUser } = useAuthStore();
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href={"/"}>
        <div className='w-[100px] md:w-[130px]'>
          <Image src={Logo} alt='TIkTIK' layout='responsive' className='' />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {userProfile ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href={"/upload"}>
              <button className='border-2 px-2 md:px-4 text-md font-semibold items-center gap-2 py-2 rounded-md flex'>
                <IoMdAdd className='text-xl' /> {` `}
                <span className='hidden md:block'>Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href={"/"}>
                <>
                  <Image
                    width={45}
                    height={45}
                    className='rounded-full cursor-pointer'
                    alt={"user Logo"}
                    src={userProfile.image}
                  />
                </>
              </Link>
            )}
            <button
              type='button'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
              className='shadow-md px-2  w-[40px] h-[40px] flex items-center justify-center rounded-full'
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => {
              createOrGetUser(res, addUser);
            }}
            onError={() => {
              console.log(`Error Happend`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
