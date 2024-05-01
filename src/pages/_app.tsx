import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserContextProvider from "../context/UserContextProvider";
import Login from "./components/LoginFlow/Login";
import Profile from "./components/LoginFlow/Profile";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
