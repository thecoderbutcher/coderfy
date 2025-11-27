import { playlists } from "@/lib/data";
import PlayListItemCard from "../main/PlayListItemCard";
import Greetings from "./Grettings";

const Header = () => {
  return (
    <div className="relative bg-green-600 px-6 py-4 transition-all duration-300 ">
      <Greetings />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/10"></div>
      <div className="flex flex-wrap mt-6 gap-4">
        {playlists.map((playlist, index) => (
          <PlayListItemCard key={index} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Header;
