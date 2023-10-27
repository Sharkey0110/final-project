import Image from "next/image"
import { getProfile } from "@/sanity/sanityUtils"

export default async function Hero(){
    const profile = await getProfile();
    
    return(
        <section className="flex flex-col items-center py-12">
            <div>
                <Image
                src={profile.image} alt="Profile Picture"
                width={280} height={280}
                className="rounded-full"
                priority
                />
            </div>
            <div className="pt-5 text-center">
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <h2 className="text-xs text-slate-600 pt-1">{profile.job}</h2>
                <p className="text-md pt-2">{profile.caption}</p>
            </div>
        </section>
    )
}