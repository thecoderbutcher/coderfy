"use client";

import useAudioStore from "@/store/useStore";
import Image from "next/image";
/* import { usePathname } from "next/navigation"; */

const HeaderPlaylist = () => {
  const { currentPlaylist } = useAudioStore();

  return (
    <div className="flex gap-4 relative z-10  pt-8">
      <Image
        src={currentPlaylist.cover}
        alt={currentPlaylist.title}
        width={100}
        height={100}
        className="w-[150px] h-full shadow-lg"
      />
      <div className="flex flex-col justify-center text-emerald-50 gap-2 px-4">
        <span className="text-sm">Playlist</span>
        <h1 className="text-4xl font-bold">{currentPlaylist.title}</h1>
        <span className="text-sm">{currentPlaylist.artists}</span>
      </div>
    </div>
  );
};

export default HeaderPlaylist;
