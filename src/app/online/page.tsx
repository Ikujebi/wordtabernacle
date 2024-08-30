"use client";
import { FC, useEffect, useState } from "react";
import YouTubePlayer from "../components/common/YouTubePlayer";
import Header from "../components/common/Header";
import online from "../img/online.webp";
import useSetField from "../../custom-hooks/useSetField";
import NextImage from "next/image"

const Page: FC = () => {
  const [state, setState] = useState<{ programmeId: number }>({ programmeId: 1 });

  const data = [
    {
      img: online.src,
      title: "WATCH ON YOUTUBE",
    },
    {
      img: online.src,
      title: "LISTEN ON MXLR",
    },
    {
      img: online.src,
      title: "LISTEN ON WORDLISTEN",
    },
  ];

  const { setRequest } = useSetField(setState);

  const getProgrammeName = (programmeId: number) => {
    if (programmeId === 1) {
      return "Tech Talent";
    } else if (programmeId === 2) {
      return "Stem";
    } else {
      return "Data Science";
    }
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      programme: getProgrammeName(state.programmeId),
    }));
  }, [state.programmeId]);

  const videoId = "U2c6EMa9NJY?si";

  return (
    <div>
      <div>
      <Header />
      </div>

      <div className="xl:w-[60%] md:w-[60%] mx-auto grid gap-5 h-[100svh] pt-[7.5rem] md:pt-[10rem] lg:pt-[10rem] xl:pt-[10rem] 2xl:pt-[10rem]">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setRequest("programmeId", index + 1)}
            style={{ background: state.programmeId === index + 1 ? "#41c0b7" : "inherit" }}
            className="flex h-[90%]"
          >
             <NextImage
              src={item.img}
              alt={item.title}
              width={144} // Ensure the correct width is passed
              height={80} // Ensure the correct height is passed
              className="object-cover w-[40%] my-[1rem] rounded-2xl ml-4"
            />
            <p id="text" className="font-bold md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl  flex justify-left items-center mx-auto">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="h-[100svh] flex items-center mx-[5%]">
        <YouTubePlayer videoId={videoId} />
      </div>

      <div className="h-[100svh]">
        <iframe 
          src="https://mixlr.com/embed-player/your-broadcast-id" 
          className="w-full overflow-hidden border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
