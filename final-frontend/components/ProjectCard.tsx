import { Projects } from "@/sanity/sanityUtils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project : Projects){
    return(
        <article className="bg-violet-50 rounded-md shadow-lg">
            <div className="relative h-72">
                <Image
                src={project.image} alt={project.name}
                layout="fill"
                objectFit="contain"
                className="rounded-t-md"
                />
            </div>
            <div className="p-2 pt-5">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="pt-2">{project.description}</p>

                <Link href={`/projects/${project.slug}`} key={project._id}>
                    <p className="pt-2 text-violet-900 hover:underline">See More</p>
                </Link>
            </div>
        </article>
    )
}