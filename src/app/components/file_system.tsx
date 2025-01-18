"use client";

import { FC, useState } from "react";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import { LuFileMusic } from "react-icons/lu";
import { TbEyeSpark } from "react-icons/tb";
import { VscSymbolMisc } from "react-icons/vsc";
import { HiOutlineBackspace } from "react-icons/hi";
import Browser from "./browser_card";
import { IconType } from "react-icons";

interface FileIconProps {
  name: string;
  Icon: IconType;
  color: string;
  click?: () => void;
}

interface Website {
  Website: string;
  Description: string;
  title: string;
}

interface WebsiteDirectory {
  entertainment: Website[];
  music: Website[];
  games: Website[];
  learning: Website[];
  miscellaneous: Website[];
}

const gradients = [
  "from-pink-300 to-violet-300",
  "from-cyan-100 to-violet-300",
  "from-rose-300 to-yellow-200",
  "from-indigo-200 to-lime-100",
];

const Scrollbar = () => {
  return (
    <div className="text-black absolute right-0 top-0 h-full w-5 flex flex-col bg-gray-100 border-l border-gray-300">
      <CiSquareChevUp size={20} />
      <div className="flex-1 relative">
        <div className="absolute w-full py-1">
          <div className="mx-0.5 h-16 bg-gradient-to-b from-purple-300 to-pink-300 border border-gray-300 rounded-sm cursor-pointer hover:from-purple-400 hover:to-pink-400" />
        </div>
      </div>
      <CiSquareChevDown size={20} />
    </div>
  );
};

const FileIcon: FC<FileIconProps> = ({ name, Icon, color, click }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded cursor-pointer transition-colors"
      onClick={click}
    >
      <div
        className={`border border-l-4 border-white bg-black w-20 h-20 rounded-xl hover:bg-purple-100/50 transition duration-200 ease-in-out hover:border-l-2 flex items-center justify-center ${color}`}
      >
        <Icon size={42} />
      </div>
      <span className="text-sm text-center break-all font-medium text-gray-100">
        {name}
      </span>
    </div>
  );
};

const FileSystem = ({ data }: { data: WebsiteDirectory }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    keyof WebsiteDirectory | ""
  >("");

  const fileMap = {
    entertainment: {
      name: "entertainment",
      Icon: TbEyeSpark,
      color: "text-pink-200",
    },
    music: {
      name: "music",
      Icon: LuFileMusic,
      color: "text-yellow-200",
    },
    games: {
      name: "games",
      Icon: GrGamepad,
      color: "text-cyan-200",
    },
    learning: {
      name: "learning",
      Icon: PiGraduationCap,
      color: "text-violet-200",
    },
    miscellaneous: {
      name: "miscellaneous",
      Icon: VscSymbolMisc,
      color: "text-emerald-200",
    },
  };

  // Filter the data based on search input
  const filteredData = Object.keys(data).reduce((results, category) => {
    // If a category is selected, only search within it
    if (selectedCategory && category !== selectedCategory) return results;

    const filtered = data[category as keyof WebsiteDirectory].filter(
      (item) =>
        item.Website.toLowerCase().includes(search.toLowerCase()) ||
        item.Description.toLowerCase().includes(search.toLowerCase())
    );

    return [...results, ...filtered];
  }, [] as Website[]);

  return (
    <>
      <div className="text-white backdrop-blur-sm border-2 border-pink-300 rounded-xl shadow-xl w-full max-w-2xl mx-auto">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 flex justify-between items-center rounded-t-lg">
          <span className="text-white text-sm italic font-bold">
            c:/users/me/home
          </span>
          <div className="flex gap-1 text-black">
            <button className="bg-white/90 w-5 h-5 flex items-center justify-center text-md rounded hover:bg-white">
              -
            </button>
            <button className="bg-white/90 w-5 h-5 flex items-center justify-center text-sm rounded hover:bg-white">
              □
            </button>
            <button className="bg-white/90 w-5 h-5 flex items-center justify-center text-md rounded hover:bg-white">
              ×
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 min-h-[200px] pr-10">
            {selectedCategory ? (
              <>
                {/* Back Button */}
                <div className="col-span-full text-center mb-4">
                  <HiOutlineBackspace
                    size={25}
                    onClick={() => setSelectedCategory("")}
                    color="white"
                    className="cursor-pointer"
                  />
                </div>

                {/* Display File Icon for Selected Category */}
                <div className="col-span-full flex justify-center">
                  <FileIcon
                    name={fileMap[selectedCategory].name}
                    Icon={fileMap[selectedCategory].Icon}
                    color={fileMap[selectedCategory].color}
                  />
                </div>
              </>
            ) : (
              Object.keys(fileMap).map((category) => (
                <FileIcon
                  key={category}
                  name={fileMap[category as keyof WebsiteDirectory].name}
                  Icon={fileMap[category as keyof WebsiteDirectory].Icon}
                  color={fileMap[category as keyof WebsiteDirectory].color}
                  click={() =>
                    setSelectedCategory(category as keyof WebsiteDirectory)
                  }
                />
              ))
            )}
          </div>
          <Scrollbar />
        </div>

        {/* Search Bar */}
        <div className="border-t-2 border-pink-200 p-4 rounded-b-xl text-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block mb-1 ">looking for:</label>
              <input
                type="text"
                className="text-gray-700 text-sm w-full px-3 py-1.5 border border-pink-300 rounded focus:outline-none focus:border-pink-500"
                placeholder="search files..."
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Browser
              description={item.Description}
              website={item.Website}
              title={item.title}
              key={index}
              gradient={gradients[index % gradients.length]}
            />
          ))
        ) : (
          <div className="text-gray-400 mx-auto">No results found</div>
        )}
      </div>
    </>
  );
};

export default FileSystem;
