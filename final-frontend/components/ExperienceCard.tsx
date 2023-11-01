import { Experiences } from "@/sanity/sanityUtils";
import { PortableText } from "@portabletext/react";


export default function ExperienceCard(experience: Experiences){
    return(
        <article className="border-2 border-violet-300 p-3 xl:p-6">
            <h2 className="text-xl font-bold">{experience.title}</h2>
            <h3 className="font-semibold text-zinc-600 pt-2">{experience.jobTitle}</h3>
            <div className="text-xs text-zinc-600 py-2 px-1 mt-4 mb-8 bg-violet-100">
                <p>{experience.startDate} - {experience.endDate}</p>
            </div>
            <div>
                <PortableText value={experience.description}/>
            </div>

        </article>
    )
}