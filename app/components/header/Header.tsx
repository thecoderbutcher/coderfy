"use client";
import { playlists } from "@/lib/data";
import PlayListItemCard from "../main/PlayListItemCard";
import Greetings from "./Grettings";
import useAudioStore from "@/store/useStore";
import HeaderPlaylist from "../playlist/HeaderPlaylist";

const Header = () => {
  const { currentPlaylist } = useAudioStore();
  return (
    <div
      className={`relative px-6 py-4 transition-all duration-300 `}
      style={{
        backgroundColor: currentPlaylist.id
          ? currentPlaylist.color?.accent
          : "#16a34a",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/10"></div>
      {currentPlaylist.id === null ? (
        <>
          <Greetings />
          <div className="flex flex-wrap mt-6 gap-4">
            {playlists.map((playlist, index) => (
              <PlayListItemCard key={index} playlist={playlist} />
            ))}
          </div>
        </>
      ) : (
        <HeaderPlaylist />
      )}
    </div>
  );
};

export default Header;
