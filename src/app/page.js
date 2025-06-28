import Image from "next/image";
import Hero from "@/sections/Hero";
import Popular from "@/sections/Popular"
import JustReviewed from "@/sections/MainSection";

export default function Home() {

   
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-0 sm:px-0 font-[family-name:var(--font-geist-sans)]">
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
          <div className="bg-zinc-800 h-400 px-20">
            <JustReviewed/>
          </div>

        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
