"use client";
import Header from "./components/header/Header";
import useAudioStore from "@/store/useStore";
import HeaderPlaylist from "./components/playlist/HeaderPlaylist";

export default function Home() {
  return (
    <main className="bg-zinc-900 basis-9/12 rounded-md overflow-y-auto">
      <Header />
    </main>
  );
}
