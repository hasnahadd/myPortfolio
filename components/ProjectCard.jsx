import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

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
        <h2 className="text-lg">{title}</h2>
        <div className="product-desc">
          {" "}
          <p className="text-sm font-light mt-2 mb-4 break-all  opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
           {description}
          </p>
        <p > Created with :<li className="text-base	font-normal	  mt-1 mb-4 break-all  opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">{tag}</li></p>
        <p > Links :<div className="flex flex-row gap-1"><Link href={deploymentUrl}><GrDeploy size={30} /></Link>
                   <Link href={gitUrl}><FaGithub size={30}/> </Link></div> </p>

          {/* <button className="font-normal  relative after:absolute after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:h-[1px] after:transition-all after:bg-white"
          
          onClick={()=>document.getElementById('my_modal_1').showModal()}
          
          >
            more details
          </button> */}
        </div>
      </div>

   




    </div>



  );
};

export default ProjectCard;
