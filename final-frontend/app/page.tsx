import { Hero, ProjectCard } from '@/components'
import { getProjects } from '@/sanity/sanityUtils';

export const revalidate = 1;

export default async function Home() {
  const projects = await getProjects()

  return (
    <main>
      <div className='md:flex'>
        <div>
          <Hero />
        </div>

        <div className='p-5 border border-t-violet-300 text-center'>
          <h2 className='text-4xl font-bold pb-12'>Projects</h2>
          
          <div>
            {projects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </div>

      </div>
      
    </main>

  )
}
