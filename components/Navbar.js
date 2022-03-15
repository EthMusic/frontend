import Image from "next/image";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="icon-container">
        <div className="nav-icon">
          <Image
            src="/home.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="nav-icon">
          <Image
            src="/search.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="nav-icon">
          <Image
            src="/profile.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <div className="nav-icon">
          <Image
            src="/music.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="nav-end">
        <Image
          src="/yellow-circle.svg"
          alt="Picture of the author"
          width={40}
          height={40}
        />
      </div>
      <style jsx>{`
        .nav-container {
          border: 1px solid white;
          height: 90vh;
          width: 5vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .nav-icon {
          height: 15vh;
          padding: 1.5em;
        }
        .nav-end {
          padding-bottom: 3em;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
