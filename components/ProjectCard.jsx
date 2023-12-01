import React from "react";
import Link from "next/link";

import Image from "next/image";

const ProjectCard = ({
  image,
  title,
  description,
  gitUrl,
  deploymentUrl,
  tag,
}) => {
  return (
    <div className={`relative w-64 h-96 group rounded-md overflow-hidden`}>
      <Image
        src={image}
        alt={title}
        layout="fill"
        className="object-cover brightness-50 opacity-70 group-hover:opacity-100 transition-all "
      />
      <div className="product-details absolute bottom-3 text-white px-4 translate-y-32 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h2 className="text-lg">product name</h2>
        <div className="product-desc">
          {" "}
          <p className="text-sm font-light mt-2 mb-4 break-all  opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis laborum adipisci magnam reiciendis. Consectetur excepturi
            quo reiciendis. Nostrum, sequi?
          </p>
          <button className="font-normal  relative after:absolute after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:h-[1px] after:transition-all after:bg-white">
            more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
