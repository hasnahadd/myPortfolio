import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "Souq DZ",
      description:
        "Sales-focused e-commerce platform with search, product discovery, cart management, filter options (price, ratings, product type),and total price display ",
      image: "/images/souqdz.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
      tag: "API Firebase Tailwind Nextjs",
    },
    {
      id: 2,
      title: "Pebble Work",
      description:
        "Volunteer event platform for seamless organization. Features: User authentication ,event filtering,creation ,participation, and chat for volunteers",
      image: "/images/pebble.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hasnahadd/Pebble-work",
      previewUrl: "https://pebble-work.vercel.app/",
      tag: "API Firebase Tailwind Nextjs",
    },
    {
      id: 3,
      title: "Reelio",
      description:
        "Reelio is Movie hub offering seamless browsing to discover movies, explore actors, genres, and top-rated films and top-rated films",
      image: "/images/reelio.png",
      tag: ["All", "Networking"],
      gitUrl: "https://github.com/hasnahadd/movie-project-devsquad",
      previewUrl: "https://movie-project-devsquad.vercel.app/",
      tag: "API Firebase Tailwind Nextjs",
    },

    {
      id: 4,
      title: "Madlib game",
      description:
        "Interactive web app prompts users for words, generates a story based on inputs, showcasing frontend proficiency with clean, responsive design.",
      image: "/images/madlib.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hasnahadd/MadLib-Game-",
      previewUrl: "https://madlibs-nine.vercel.app/",
      tag: "Javascript Css",
    },
  ];

  return (
    <section className=" ">
      <h2 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex gap-4 justify-center flex-wrap ">
        
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            gitUrl={project.gitUrl}
            deploymentUrl={project.previewUrl}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
