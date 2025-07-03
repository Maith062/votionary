import Hero from "@/sections/Hero";
import Popular from "@/sections/Popular"
import MainSection from "@/sections/MainSection";

export default function Home() {

   
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-0 gap-0 sm:px-0 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
        
        <Hero />

        {/* Popular film section + Text blurb */}
        <div className=" w-full">
          <div className="relative bg-gradient-to-b from-transparent via-zinc-800/75 to-zinc-800 py-15 px-17 ">
            <h1 className="text-center mt-1 text-zinc-800 font-light">
              The social network where every one finds their story.
            </h1>
            <h1 className="text-center mt-4 text-white font-light">
              Find your next adventure here!
            </h1>
             <button className="flex items-center justify-center mx-auto mt-8 mb-10 h-15 p-2 bg-[#27b99c] hover:bg-emerald-400 shadow-md cursor-pointer rounded-sm">
              <h3 className="font-medium lg:text-[20px] text-white">
                Get started today
              </h3>
            </button>
            <Popular/>

          </div>

          {/* Review section */}
          <div className="bg-zinc-800 px-20">
            <MainSection/>
          </div>

        </div>
      </main>

    </div>
  );
}
