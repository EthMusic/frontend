import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import PlayBar from "../components/PlayBar";
import MusicCard from "../components/MusicCard";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main">
        <Navbar />
        <div className="main-component">
          <h1 className="text-4xl text-white"> Welcome back, Abhinav! </h1>
          <h1 className="text-2xl text-white mt-6">Recently played</h1>
          <MusicCard />
        </div>
      </div>
      <PlayBar />
      <style jsx>
        {`
          .main {
            display: flex;
          }
          .main-component {
            margin: 3%;
          }
        `}
      </style>
    </div>
  );
}
