import { Hero, ProjectCard } from '@/components'
import { getProjects } from '@/sanity/sanityUtils';

export const revalidate = 1;

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className='max-w-[2400px] mx-auto'>
      <div>
          <Hero />
        <div className='p-5 border-t-2 border-t-violet-300 text-center'>
          <h2 className='text-4xl font-bold pb-12'>Projects</h2>
          
          <div className=' px-5 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16 xl:gap-x-20 gap-y-32'>
            {projects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </div>

      </div>
      
    </main>

  )
}
