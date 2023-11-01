import { getProject } from "@/sanity/sanityUtils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
};

export const revalidate = 1;


export default async function ProjectPage({ params }: Props){
    const slug = params.slug;
    const project = await getProject(slug)


    return(
        <main className="px-6 md:px-24 xl:px-48">
            <h1 className="text-4xl font-bold text-center pt-4 pb-16">{project.name}</h1>
            <div className="relative h-72">
                <Image
                src={project.image} alt={project.name}
                layout="fill"
                objectFit="contain"
                />
            </div>
            <div className="pt-4 md:pt-6">
                <p className="text-center text-sm text-zinc-400">{project.description}</p>
                <div className="pt-5 md:pt-12">
                    <PortableText value={project.content}/>
                </div>
            </div>

            <div className="text-center pt-20 md:pt-28">
                <Link className="bg-violet-200 hover:bg-violet-300 px-3 py-2 rounded-full cursor-pointer" href="/">Go Back</Link>
            </div>
        </main>
    )
}