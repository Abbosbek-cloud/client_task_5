import { io } from "socket.io-client";
import { createContext } from "react";
import { LOCAL } from "../constants/constant";

const SOCKET_URI = LOCAL;

export const socket = io(SOCKET_URI);

export const AppContext = createContext();
