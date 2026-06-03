import Image from "next/image";
import { siteConfig } from "@/lib/config";
import LanguageButtons from "@/components/LanguageButtons";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-forest-800 to-forest-900 px-4 py-12 sm:py-16">
      {/* Soft accent glow behind the content. */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl"
        aria-hidden
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Professor photo */}
        <div className="relative aspect-[3/4] w-56 overflow-hidden rounded-2xl bg-forest-950/40 shadow-2xl ring-1 ring-white/15 sm:w-64 lg:w-72">
          <Image
            src={siteConfig.professorPhoto}
            alt={siteConfig.professorName}
            fill
            priority
            sizes="(max-width: 640px) 14rem, (max-width: 1024px) 16rem, 18rem"
            className="object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-7 max-w-md text-balance">
          <span className="block text-base font-medium text-forest-50 sm:text-lg">
            {siteConfig.headingPrefix}
          </span>
          <span className="mt-1.5 block font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {siteConfig.assistantName}
          </span>
        </h1>

        {/* Language buttons + video modal */}
        <div className="mt-10 w-full">
          <LanguageButtons />
        </div>
      </section>

      {(siteConfig.professorName || siteConfig.universityName) && (
        <footer className="relative z-10 mt-14 text-center text-xs text-forest-100/70">
          <p>
            &copy; {year} {siteConfig.professorName}
            {siteConfig.universityName ? ` · ${siteConfig.universityName}` : ""}
          </p>
        </footer>
      )}
    </main>
  );
}
