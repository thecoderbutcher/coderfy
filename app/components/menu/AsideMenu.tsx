import Link from "next/link";
import AsideMenuCard from "./AsideMenuCard";
import { VscLibrary, VscHome, VscSearch } from "react-icons/vsc";

const AsideMenu = () => {
  const links = [
    { text: "Home", link: "/", icon: <VscHome /> },
    {
      text: "Search",
      link: "",
      icon: <VscSearch />,
    },
  ];
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <ul>
          {links.map((item) => (
            <li key={item.text}>
              <Link
                href={item.link}
                className="flex gap-2 text-zinc-400 hover:text-zinc-100 items-center py-2 px-4 font-medium transition duration-300"
              >
                {item.icon} {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <div className="flex gap-2 text-zinc-400 hover:text-zinc-100 items-center py-2 px-4 font-medium transition duration-300">
          <VscLibrary />
          <span>Biblioteca</span>
        </div>
        <AsideMenuCard />
      </div>
    </nav>
  );
};

export default AsideMenu;
