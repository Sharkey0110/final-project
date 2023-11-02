import { Project } from "@/sanity/sanityUtils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project : Project){
    return(
        <article className="bg-violet-50 rounded-md shadow-lg">
            <div className="relative h-72">
                <Image
                src={project.image} alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
                />
            </div>
            <div className="p-2 pt-5">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="pt-2">{project.description}</p>
                <p className="text-zinc-500 text-sm">{project._createdAt.toLocaleString().substring(0,10)}</p>

                <Link href={`/projects/${project.slug}`} key={project._id}>
                    <div className=" flex justify-center">
                        <div className="bg-pink-200 py-2 px-3 mt-5 rounded-full hover:bg-pink-300 duration-200">
                            <p className="font-medium">See More</p>
                        </div>
                    </div>
                </Link>
            </div>
        </article>
    )
}