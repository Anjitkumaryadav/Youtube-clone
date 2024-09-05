import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdSports } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { BiShoppingBag, BiVideo } from "react-icons/bi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdHistory } from "react-icons/md";

import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { jsx } from "react/jsx-runtime";

function Sidebar() {
  const sidebarItem = [
    {
      id: 1,
      name: "Home",
      icon: <IoMdHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItem2 = [
    {
      id: 1,
      name: "Your channel",
      icon: <IoMdHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay />,
    },
    {
      id: 4,
      name: "Your videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];

  const sidebar3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <BiShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <TfiCup />,
    },
    {
      id: 10,
      name: "fashion & beauty",
      icon: <TfiCup />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sidebar4 = [
    {
      id:1,
      name:'YouTube Premium',
      icon:<FaYoutube/>
    },
    {
      id:2,
      name:'YouTube Studio',
      icon:<SiYoutubestudio/>
    },
    {
      id:3,
      name:'YouTube Music',
      icon:<SiYoutubemusic/>
    },
    {
      id:4,
      name:'YouTube Kids',
      icon:<SiYoutubekids/>
    }
  ]


  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-scroll overflow-x-hidden">
      <div className="space-y-3 items-center ">
        {/*main sidebar*/}
        {sidebarItem.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 cursor-pointer rounded-xl p-1">
              <div className="text-xl ">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          );
        })}
        <hr />

        {/*You*/}
        <div className="space-y-3 items-center">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1">
            <h1 className="font-bold">You</h1>
            <FaChevronRight />
          </div>

          {sidebarItem2.map((item) => {
            return (
              <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 cursor-pointer rounded-xl p-1">
                <div className="text-xl ">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />

        {/*explore*/}
        <div className="space-y-3 items-center">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1">
            <h1 className="font-bold">Explore</h1>
          </div>

          {sidebar3.map((item) => {
            return (
              <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 cursor-pointer rounded-xl p-1">
                <div className="text-xl ">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            );
          })}
          <hr />
        </div>
      </div>

      {/*More from youtube*/}
      <div className="space-y-3 items-center">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1">
            <h1 className="semi-bold">More from YouTube</h1>
          </div>

          {sidebar4.map((item) => {
            return (
              <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 cursor-pointer rounded-xl p-1">
                <div className="text-xl ">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            );
          })}
          <hr />
        </div>
    </div>
  );
}

export default Sidebar;
