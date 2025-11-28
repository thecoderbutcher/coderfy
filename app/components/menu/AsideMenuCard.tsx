"use client";
import Image from "next/image";
import { playlists } from "@/lib/data";
import useAudioStore from "@/store/useStore";

const AsideMenuCard = () => {
  const { setCurrentPlaylist } = useAudioStore();
  return (
    <div>
      {playlists.map((playlist, index) => (
        <div
          key={index}
          className={`flex relative p-2 overflow-hidden items-center gap-5 rounded-md cursor-pointer hover:bg-zinc-800/70`}
          onClick={() => setCurrentPlaylist(playlist)}
        >
          <Image
            src={playlist.cover}
            alt={`Cover of ${playlist.title} by ${playlist.artists}`}
            width={80}
            height={80}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col flex-auto truncate">
            <h4 className="text-sm text-white">{playlist.title}</h4>
            <span className="text-gray-400">{playlist.artists.join(", ")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AsideMenuCard;
