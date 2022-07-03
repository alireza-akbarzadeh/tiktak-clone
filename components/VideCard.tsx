// @React
import React, { useState, useEffect, useRef } from "react";
// @NextPage
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
// @NextPage
import { Video } from "../types";
// @Icons
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
//@interface
interface IProps {
  post: Video;
}

const VideCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const videRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videRef?.current?.pause();
      setPlaying(false);
    } else {
      videRef?.current?.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (videRef.current) {
      videRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
          <div className='md:w-16 md:h-16 w-10 h-10'>
            <Link href={""}>
              <>
                <Image
                  width={66}
                  height={66}
                  src={post.postedBy.image}
                  alt='profile photo'
                  layout='responsive'
                  className='rounded-full object-contain'
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={""}>
              <div className='flex items-center gap-2'>
                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                  {post.postedBy.userName}{" "}
                  <GoVerified className='text-blue-400 text-md' />
                </p>
                <p className='capitalize  font-medium text-xs text-gray-500  hidden md:block'>
                  {post.postedBy.userName}{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='lg:ml-20 flex gap-4 relative'>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='rounded-3xl'
        >
          <Link href={"/"}>
            <video
              ref={videRef}
              loop
              className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
              src={post.video.asset.url}
            ></video>
          </Link>
          {isHover && (
            <div className='flex items-center gap-10 lg:justify-between absolute bottom-6 cursor-pointer lg:left-0 md:left-14 left-8 w-[100px]  md:w-[50px] p-3'>
              {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className='text-black text-2xl lg:text-4x' />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4x' />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className='text-black text-2xl lg:text-4x' />
                </button>
              ) : (
                <button onClick={() => setIsVideoMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4x' />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideCard;
