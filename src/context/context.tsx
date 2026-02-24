/**
 * @name dataContext
 * @desc Context container for the data
 */
import React, { useState, createContext } from 'react'; 

export type GlobalState = {
  stopPlay: boolean,
  setStopPlay: (input: boolean ) => void;
};

export const initialState: GlobalState = {
  stopPlay: true,
  setStopPlay: () => {},
};

export const globalContext = createContext<GlobalState>(initialState)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stopPlay, setStopPlay] = useState<boolean>(false);

  return <globalContext.Provider value={{stopPlay, setStopPlay }}>{children}</globalContext.Provider>
}