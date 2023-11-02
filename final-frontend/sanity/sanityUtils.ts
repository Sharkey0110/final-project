import { createClient, groq } from "next-sanity"
import { PortableTextBlock } from "sanity";

type Profile = {
    image : string;
    name: string;
    job: string;
    caption: string;
}

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    description: string,
    slug: string;
    content: PortableTextBlock[];
    url: string;
}

export type Experience = {
    _id: string;
    title: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: PortableTextBlock[]
}

export type Tag = {
    _id: string;
    tag: string;
}

type Filter = {
    tag: string;
}

const client = createClient({
    projectId: "tt66rs7l",
    dataset: "production",
    apiVersion: "2023-10-27",
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

export async function getProjects(filters: Filter): Promise<Project[]>{
    return client.fetch(
        groq`*[_type == "project" ${filters.tag? "&& $filters.tag in tags[]->_id" : ""} ] | order(_createdAt desc){
            _id,
            _createdAt,
            name,
            "image": image.asset -> url,
            description,
            "slug": slug.current,
            content,
            tags,
        }`,{ filters }
    )
}

export async function getProject(slug: string): Promise<Project>{
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "image": image.asset -> url,
            description,
            "slug": slug.current,
            content,
            url
        }`,{ slug }
    )
}

export async function getExperiences(){
    return client.fetch<Experience[]>(
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
    return client.fetch<Tag[]>(
        groq`*[_type == "tags"] | order(tag asc){
            _id,
            tag,
        }`
    )
}