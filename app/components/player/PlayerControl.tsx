import AudioPlayer from "./AudioPlayer";
import CurrentSong from "./CurrentSong";
import Volume from "./Volume";

const Player = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-zinc-950 h-[8%] rounded-lg w-full px-4 z-50">
      <CurrentSong />
      <AudioPlayer />
      <Volume />
    </div>
  );
};

export default Player;
