"use client";
import { FC, useEffect, useState } from "react";
import Header from "../components/common/Header";
import online from "../img/online.webp";
import useSetField from "../../custom-hooks/useSetField";
import NextImage from "next/image";
import Link from "next/link";

const Page: FC = () => {
  const [state, setState] = useState<{ programmeId: number }>({ programmeId: 1 });

  const youtubeImage = "https://res.cloudinary.com/dalylashp/image/upload/v1726739640/word_youtube_xqdcku.png";
const mixlr = "https://res.cloudinary.com/dalylashp/image/upload/v1726743756/wordmix_ssi1z9.webp"
  const data = [
    {
      img: youtubeImage,
      title: "WATCH ON YOUTUBE",
      link: "online/youtube",
    },
    {
      img: mixlr,
      title: "LISTEN ON MXLR",
      link: "online/mxlr",
    },
    {
      img: online.src,
      title: "LISTEN ON WORDLISTEN",
      link: "online/mxlr",
    },
  ];

  const { setRequest } = useSetField(setState);

  const getProgrammeName = (programmeId: number) => {
    switch (programmeId) {
      case 1:
        return "WATCH ON YOUTUBE";
      case 2:
        return "LISTEN ON MXLR";
      default:
        return "LISTEN ON WORDLISTEN";
    }
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      programme: getProgrammeName(state.programmeId),
    }));
  }, [state.programmeId]);

  return (
    <div className="h-[100svh] overflow-hidden">
      <Header />
      <div className="flex flex-wrap justify-center items-center  h-[100svh] pt-[7.5rem] md:pt-[9rem] lg:pt-[9rem] xl:pt-[9rem] 2xl:pt-[10rem] overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="inline-block w-[calc(45%-1rem)] sm:w-[calc(45%%-1rem)] lg:w-[calc(45%-1rem)] xl:w-[calc(45%-1rem)] px-2 mb-4 text-center"
          >
            <Link
              href={item.link}
              onClick={() => setRequest("programmeId", index + 1)}
              className={` block h-[14rem] p-2 w-full shadow-xl cursor-pointer overflow-hidden rounded-md ${state.programmeId === index + 1 ? 'shadow-xl' : ''}`}
            >
              <NextImage
                src={item.img}
                alt={item.title}
                width={144}
                height={50}
                className="w-full h-[90%] my-0 p-1 rounded-2xl"
              />
              <b className="font-bold md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
                {item.title}
              </b>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
