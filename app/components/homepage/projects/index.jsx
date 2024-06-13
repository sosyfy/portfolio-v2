import { projectsData } from '@/utils/data/projects-data'
import ProjectCard from './project-card'

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-50  pb-12 lg:pb-32"
    >
      <div className="sticky top-10">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full md:top-6 absolute left-1/2 -translate-x-1/2 filter blur-3xl  opacity-20"></div>
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-full">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] font-semibold w-fit uppercase text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-40 relative">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
                {/* <SingleProject project={project} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
