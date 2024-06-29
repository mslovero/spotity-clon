import { Children, createContext, useState } from "react";

const Player = createContext();

const PlayedContext = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  return (
    <Player.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </Player.Provider>
  );
};
export { PlayedContext, Player };
