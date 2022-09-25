import { io } from "socket.io-client";
import { createContext } from "react";

const SOCKET_URI = "https://abek-task5.herokuapp.com";

export const socket = io(SOCKET_URI);

export const AppContext = createContext();
