import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import Rectangle1 from "../../../public/assets/home/Rectangle 16 (1).svg";
import Rectangle2 from "../../../public/assets/home/Rectangle 16 (2).svg";
import Rectangle3 from "../../../public/assets/home/Rectangle 16.svg";

import Image from "next/image";
import { Button } from "../ui/button";
import DropProject from "../helper/DropProject";

interface Item {
  id?: number;
  image: string;
  description: string;
  name?: string;
  projects?: [];
}
interface propertiesProps {
  properties: Item[];
}
const Properties: React.FC<propertiesProps> = ({ properties }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider1");
    if (slider) {
      slider.scrollLeft -= 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider1");
    if (slider) {
      slider.scrollLeft += 235;
    }
  };

  return (
    <>
      <div className="sm:my-10 my-0 sm:block hidden">
        <div className="sm:block hidden mx-auto text-center">
          <p className="text-2xl font-bold">Properties</p>
        </div>
        <div
          className="flex  my-2 justify-center items-center gap-2 "
          id="slider1"
        >
          {properties?.map((item) => (
            <div key={item.id} className="p-2 flex-shrink-0">
              <Link href={`/`} className="">
                <div className="w-full h-full bg-white rounded flex ">
                  <Image
                    width={300}
                    height={300}
                    className="h-full rounded"
                    src={item.image}
                    alt={item.description}
                  />
                </div>
              </Link>
              <div className="flex text-center items-center justify-between p-2">
                <p className="text-lg">{item.name}</p>
                <DropProject projects={item?.projects} />
              </div>
            </div>
          ))}
        </div>
        <div className="sm:flex hidden items-center gap-2 justify-center text-xl">
          <Button
            className="bg-none "
            title="scroll left"
            // onClick={function () {}} //slideLeft as () => void}
          >
            <ArrowLeft />
          </Button>
          <Button
            className="bg-none "
            title="scroll right"
            // onClick={slideRight as () => void}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Properties;
