import Image from "next/image";
import Link from "next/link"
export default function MusicCard() {
  const musicList = [
    {
      title: "Song title",
      url: "album",
      image: "/music-title.svg",
    },
    {
      title: "Song title",
      url: "",
      image: "/music-title.svg",
    },
    {
      title: "Song title",
      url: "",
      image: "/music-title.svg",
    },
    {
      title: "Song title",
      url: "",
      image: "/music-title.svg",
    },
    {
      title: "Song title",
      url: "",
      image: "/music-title.svg",
    },
  ];
  return (
    <div>
      <ul className="flex">
        {musicList.map((item) => (
          <Link href={item.url} key={item.title}>
            <li className="text-white my-5 mr-10 flex flex-col">
              <Image
                src={item.image}
                height="200px"
                width="200px"
                className="m-0 rounded-md"
              />
              <div className="bg-yellow-300 mt-0 text-black p-5 rounded-md">
                {item.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
