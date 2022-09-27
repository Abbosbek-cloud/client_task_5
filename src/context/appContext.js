import { io } from "socket.io-client";
import React from "react";
import { BASE_URL } from "../constants/constants";
const SOCKET_URL = BASE_URL;
export const socket = io(SOCKET_URL);
// app context
export const AppContext = React.createContext();
