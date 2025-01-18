import Image from "next/image";
import Browser from "./components/browser_card";
import FileSystem from "./components/file_system";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/websites.json",
    "utf8"
  );
  const data = JSON.parse(file) as WebsiteDirectory;

  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/images/logo.png"
          alt="Nebula logo"
          width={180}
          height={40}
          priority
          className="mx-auto"
        />
        <FileSystem data={data} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/share-a-byte"
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
          my other projects :)
        </a>
      </footer>
    </div>
  );
}
