import { create } from 'zustand';
import type { Playlist } from '@/lib/data'

interface AudioState {
    audio: HTMLAudioElement | null,
    playing: boolean,
    currentTime: number,
    currentPlaylist: Playlist,

    setAudio: (audioElement: HTMLAudioElement) => void;
    setPlaying: (playing: boolean) => void;
    setCurrentTime: (time: number) => void;
    setCurrentPlaylist: (playlist: Playlist) => void;
    resetCurrentPlaylist: () => void
}
const initialPlaylist = {
    id: null,
    albumId: 0,
    title: "",
    color: { accent: "", dark: "" },
    cover: "",
    artists: [],
};

const useAudioStore = create<AudioState>((set) => ({
    audio: null,
    playing: false,
    currentTime: 0,
    currentPlaylist: initialPlaylist,

    setAudio: (audioElement) => set({ audio: audioElement }),
    setPlaying: (playing) => set({ playing }),
    setCurrentTime: (time) => set({ currentTime: time }),
    setCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist }),
    resetCurrentPlaylist: () => set({ currentPlaylist: initialPlaylist }),

}));

export default useAudioStore;
