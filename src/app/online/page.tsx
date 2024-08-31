"use client";
import { FC, useEffect, useState } from "react";
import Header from "../components/common/Header";
import online from "../img/online.webp";
import useSetField from "../../custom-hooks/useSetField";
import NextImage from "next/image";
import Link from "next/link";

const Page: FC = () => {
  const [state, setState] = useState<{ programmeId: number }>({ programmeId: 1 });

  const data = [
    {
      img: online.src,
      title: "WATCH ON YOUTUBE",
      link: "online/youtube",
    },
    {
      img: online.src,
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
    if (programmeId === 1) {
      return "WATCH ON YOUTUBE";
    } else if (programmeId === 2) {
      return "LISTEN ON MXLR";
    } else {
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
    <div>
      <div>
        <Header />
      </div>

      <div className="xl:w-[60%] md:w-[60%] mx-auto grid h-[100svh] pt-[7.5rem] md:pt-[9rem] lg:pt-[9rem] xl:pt-[9rem] 2xl:pt-[10rem]">
        {data.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => setRequest("programmeId", index + 1)}
            style={{ background: "#41c0b7" }}
            className={`flex items-center md:h-[11rem] lg:h-[11rem] xl:h-[11rem] h-[90%] bg-[#41c0b7] cursor-pointer ${state.programmeId === index + 1 ? 'bg-[#41c0b7]' : 'bg-inherit'} m-0 p-0`}
          >
            <NextImage
              src={item.img}
              alt={item.title}
              width={144} // Ensure the correct width is passed
              height={50} // Ensure the correct height is passed
              className="w-[40%] h-[95%] my-0 ml-4 rounded-2xl "
            />
            <p id="text" className="font-bold md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl flex justify-left items-center mx-auto">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
