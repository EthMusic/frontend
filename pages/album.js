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
        <div className="main-component mx-auto">
            <div className="album-header flex">
              <div className="album-image">
                <Image src="/album-sample.jpeg" height="300px" width="300px"></Image>
              </div>
              <div className="album-details">
                <h1 className="album-title text-white text-4xl p-5">Red (Taylor's Version)</h1>
                <div className="album-text text-white text-2xl px-5">Artist | Year | No. of Songs</div>
                <button className="btn bg-lime-500 py-5 px-10 rouded m-5 text-2xl text-white">Buy</button>
              </div> 
            </div>
            <div className="album-list my-5">
            <table className="text-white text-2xl">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Plays</th>
                  <th>Duration</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>First</td>
                  <td>10</td>
                  <td>3:05</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Second</td>
                  <td>13</td>
                  <td>4:59</td>
                </tr>
              </table>
            </div>
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
            margin: auto;
            margin-top: 5%;
          }
          .album-header {
            width: 100%;
            
          }
          .album-list {
            width: 100%;
          }
          table {
            width: 100%;
          }
          th {
            text-align: left;
            margin-bottom: 5%;
            border-bottom: 1px solid white;
          }
          td {
            
          }
        `}
      </style>
    </div>
  );
}
