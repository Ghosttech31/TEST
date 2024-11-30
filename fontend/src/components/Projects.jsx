import { useRef } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectsRef = useRef(null);
  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8  text-center text-3xl font-medium lg:text-4xl">
          Gallery
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border borfer-white-300/20">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
