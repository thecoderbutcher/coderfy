"use client";
import AsideMenuCard from "./AsideMenuCard";
import { VscLibrary, VscHome, VscSearch } from "react-icons/vsc";
import useAudioStore from "@/store/useStore";
import logo from "@/public/icons/coderfy-logo.webp";
import Image from "next/image";

const AsideMenu = () => {
  const { resetCurrentPlaylist } = useAudioStore();
  const links = [
    {
      text: "Home",
      icon: <VscHome />,
      action: resetCurrentPlaylist,
    },
    {
      text: "Search",
      icon: <VscSearch />,
    },
  ];
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <div className="flex gap-2 p-2 items-center">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-xl font-semibold">Coderfy</span>
        </div>
        <ul className="">
          {links.map((item) => (
            <li
              key={item.text}
              className="flex gap-2 text-zinc-400 hover:text-zinc-100 items-center py-1 px-4 font-medium transition duration-300 cursor-pointer"
              onClick={item.action}
            >
              {item.icon} {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <div className="flex gap-2 text-zinc-400 hover:text-zinc-100 items-center py-2 px-4 font-medium transition duration-300">
          <VscLibrary />
          <span>Library</span>
        </div>
        <AsideMenuCard />
      </div>
    </nav>
  );
};

export default AsideMenu;
