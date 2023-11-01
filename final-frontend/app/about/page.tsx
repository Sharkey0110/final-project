import { ExperienceCard, Hero } from "@/components";
import { getExperiences } from "@/sanity/sanityUtils";

export const revalidate = 1;

export default async function AboutPage(){
    const experiences = await getExperiences()

    return(
        <main className="max-w-[2250px] mx-auto">
            <Hero />
            <hr/>
            <div>
                <h2 className="text-center text-2xl font-bold pt-5 lg:pt-10">Past/Current Experiences</h2>
                <div className="pt-6 lg:pt-20 px-4 md:px-12 lg:px-6 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-x-24 xl:gap-y-16">
                    {experiences.map((experience) => (
                        <ExperienceCard key={experience._id} {...experience} />
                    ))}
                </div>
            </div>

        </main>
    )
}