import { io } from "socket.io-client";
import { createContext } from "react";

const SOCKET_URI = process.env.BACKEND_API || "http://localhost:5000";

export const socket = io(SOCKET_URI);

export const AppContext = createContext();
