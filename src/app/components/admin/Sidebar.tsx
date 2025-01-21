"use client";

import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { FaUserClock } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdEvent } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import LogoutButton from "./LogoutButton";
import logo from '@/app/img/wordlogo.png'

interface NavItem {
  name: string;
  icon: JSX.Element;
  link: string;
  subItems?: NavItem[];
}

const Sidebar: React.FC = () => {
  const [isClient, setIsClient] = useState(false); // Track if it's client-side
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  


  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: <IoHomeOutline />,
      link: "#",
    },
    {
      name: "Clock-Ins",
      icon: <FaUserClock />,
      link: "#",
    },
    {
      name: "Profile",
      icon: <FiUsers />,
      link: "#",
    },
    {
      name: "Participants",
      icon: <PiStudentBold />,
      link: "/dashboard/details/participants",
    },
    {
      name: "Applications",
      icon: <GoCommentDiscussion />,
      link: "",
      subItems: [
        {
          name: "Approved Students",
          icon: <CgNotes />,
          link: "/dashboard/details/participants",
        },
        {
          name: "Rejected Students",
          icon: <CgNotes />,
          link: "/dashboard/details/rejectedParticipants",
        },
      ],
    },
    {
      name: "Instructors",
      icon: <GiTeacher />,
      link: "/dashboard/details/instructors",
    },
    {
      name: "Update Events",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/updatedEvent",
    },
    {
      name: "Events",
      icon: <MdEvent />,
      link: "/dashboard/details/events",
    },
    {
      name: "QrCode",
      icon: <MdEvent />,
      link: "/dashboard/details/qRCodeScanner",
    },
    {
      name: "Tasks",
      icon: <GrTask />,
      link: "/dashboard/details/tasks",
    },
  ];

  useEffect(() => {
    setIsClient(true); // Set client-side flag to true once the component is mounted
  }, []);

  

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="fixed h-screen shadow-xl  border-r border-gray-200">
      <div className="flex flex-col p-4">
        {/* Sidebar Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className=" flex items-center justify-center h-12 w-12 rounded-md">
            <Image src={logo.src} width={1000} height={1000} alt="" />
          </div>
          <div>
            <h1 className="text-lg font-semibold"><u className="text-red-">WTBC</u> C.M.S</h1>
            
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <Fragment key={index}>
              <li>
               { <button
                  /* onClick={() => navigateTo(item.link)} */
                  className={`flex items-center gap-4 w-full px-4 py-2 text-left ${
                    item.link === item.link
                      ? "bg-red-400 text-white rounded-lg font-bold"
                      : "text-gray-100 hover:bg-green-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>}

               
              
              </li>
            </Fragment>
          ))}
        </ul>

        {/* Logout Button */}
       
      </div>
    </div>
  );
};

export default Sidebar;
