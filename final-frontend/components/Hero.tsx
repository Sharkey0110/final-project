import Image from "next/image"

export default function Hero(){
    return(
        <section className="flex flex-col items-center py-10">
            <div>
                <Image
                src="/images.jpg" alt="Profile Picture"
                width={280} height={280}
                className="rounded-full"
                />
            </div>
            <div className="pt-5 text-center">
                <h1 className="text-2xl font-bold">Jack Sharkey</h1>
                <h2 className="text-xs text-slate-600 pt-1">Software Developer</h2>
                <p className="text-md pt-3">Caption goes here...</p>
            </div>
        </section>
    )
}