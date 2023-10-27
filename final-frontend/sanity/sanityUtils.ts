import { createClient, groq } from "next-sanity"


const client = createClient({
    projectId: "tt66rs7l",
    dataset: "production",
    apiVersion: "2023-10-27",
    useCdn: false,
})

export type Profile = {
    image : string;
    name: string;
    job: string;
    caption: string;
}

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