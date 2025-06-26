import Image from "next/image";
import Hero from "@/sections/Hero";
import Popular from "@/sections/Popular"

export default function Home() {

   
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-0 sm:px-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
        
        <Hero />

        <div className=" w-full">
          <div className="relative bg-gradient-to-b from-transparent via-zinc-700/50 to-zinc-700 p-15 ">
            <Popular/>
             <button className="flex items-center justify-center mx-auto mt-10 h-15 p-2 bg-zinc-600 hover:bg-emerald-700 shadow-md cursor-pointer rounded-sm">
              <h3 className="font-medium lg:text-[20px] text-white">
                Get started today
              </h3>
            </button>
            <h1 className="text-center mt-8 text-white font-mono">
              The social network for fans of the east
            </h1>
          </div>

          <div className="bg-zinc-700 h-400">
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
