import { createContext, useContext } from "react";
import MockYoutubeClient from "../api/mockYoutubeClient";
import MockYoutube from "../api/mockYoutubeClient";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();
const client = new MockYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}) {
  return <YoutubeApiContext.Provider value={{youtube}}>
    {children}
  </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}