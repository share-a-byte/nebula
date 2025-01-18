import Image from "next/image";
import FileSystem from "./components/file_system";
import { promises as fs } from "fs";
import Link from "next/link";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/websites.json",
    "utf8"
  );
  const data = JSON.parse(file) as WebsiteDirectory;

  return (
    <>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSd42h6xVbZkTWLMxnBsSFpg-ImULB-6AP24pB963xhwiEe2Kw/viewform?usp=sharing"
        className="flex justify-end m-10 relative"
        target="_blank"
      >
        <p>enter more websites ᯓ✿</p>
      </Link>

      <div className="grid grid-rows-[auto_1fr_auto] justify-center p-8 sm:p-12">
        <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
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
    </>
  );
}
