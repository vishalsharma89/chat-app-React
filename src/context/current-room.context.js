import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const CurrentRoomContext = createContext();
// provider component for current room context
export const CurrentRoomProvider = ({ children, data }) => {
    return (
        <CurrentRoomContext.Provider value={data}>
            {children}
        </CurrentRoomContext.Provider>
    );
};

export const useCurrentRoom = selector =>
    useContextSelector(CurrentRoomContext, selector);