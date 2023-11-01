import Image from "next/image"
import { getProfile } from "@/sanity/sanityUtils"
import { Github } from "lucide-react";
import Link from "next/link";

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
            <div className="mt-6 mb-4 bg-violet-200 rounded-full p-2 hover:p-3 hover:bg-violet-300 hover:mb-3 hover:mt-5 duration-200">
                <Link
                href="https://github.com/Sharkey0110"
                >
                <Github />
                </Link>
            </div>
            <p className="font-bold text-sm">Visit the Github</p>
        </section>
    )
}