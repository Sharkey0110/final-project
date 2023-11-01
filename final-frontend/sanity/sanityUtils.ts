import { createClient, groq } from "next-sanity"
import { PortableTextBlock } from "sanity";

type Profile = {
    image : string;
    name: string;
    job: string;
    caption: string;
}

export type Projects = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    description: string,
    slug: string;
    content: PortableTextBlock[];
}

export type Experiences = {
    _id: string;
    title: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: PortableTextBlock[]
}

type Tags = {
    _id: string;
    tag: string;
}

const client = createClient({
    projectId: "tt66rs7l",
    dataset: "production",
    apiVersion: "2023-10-27",
    useCdn: false,
})

export async function getProfile(){
    const resposne = await client.fetch<Profile[]>(
        groq`*[_type == "profile"]{
            "image": image.asset -> url,
            name,
            job,
            caption,
        }`
    )
    return resposne[0];
}

export async function getProjects(): Promise<Projects[]>{
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "image": image.asset -> url,
            description,
            "slug": slug.current,
            content,
        }`
    )
}

export async function getProject(slug: string): Promise<Projects>{
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "image": image.asset -> url,
            description,
            "slug": slug.current,
            content,
        }`,{ slug }
    )
}

export async function getExperiences(){
    return client.fetch<Experiences[]>(
        groq`*[_type == "experience"]{
            _id,
            title,
            jobTitle,
            startDate,
            endDate,
            description,
        }`
    )
}

export async function getTags(){
    return client.fetch<Tags[]>(
        groq`*[_type == "tags"]{
            _id,
            tag,
        }`
    )
}