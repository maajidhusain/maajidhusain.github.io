import Navbar from "@/components/Navbar";
import Image from "next/image";
import ImgStack from "@/components/ui/image-stack";

export default function About() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="flex min-h-screen items-start sm:items-center justify-center px-4 pb-24 pt-24 sm:px-24 sm:py-0">
        <div className="glass-panel rounded-2xl w-full max-w-[720px] flex flex-col overflow-hidden">
          <div className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-8 pb-4 border-b border-white/20 shrink-0">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border border-white/40 grayscale">
              <Image src="/images/myheadshot.png" alt="Maajid Husain" width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">About Me</h1>
              <p className="text-slate-900/60 text-[11px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] mt-1 sm:mt-2 leading-relaxed">
                Leesburg, VA · University of Virginia · Capital One
              </p>
            </div>
          </div>
          <div className="p-5 sm:p-8 pt-5 sm:pt-6 sm:overflow-y-auto sm:glass-scroll sm:max-h-[calc(100vh-10rem)]">
            <div className="text-sm sm:text-base font-light leading-[2] text-slate-900/80 space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3">Life</h2>
                <p>I am a student first, but in my free time I really enjoy exploring nature, going longboarding, spending time with friends, and working towards my career and academic goals.</p>
              </div>
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3">Reading</h2>
                <p>Leisurely reading is something I have always been interested in. Some of my favorites:</p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li><em>The Bartimaeus Sequence</em> — Jonathan Stroud</li>
                  <li><em>Great Expectations</em> — Charles Dickens</li>
                  <li><em>The Autobiography of Malcolm X</em> — Malcolm X &amp; Alex Haley</li>
                  <li><em>Hatchet</em> — Gary Paulsen</li>
                </ol>
              </div>
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3">Construction &amp; Manual Labor</h2>
                <p>During COVID-19, I found myself with an abundance of free time. I started as an apprentice for a contracting company and picked up many handyman skills:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 mt-2">
                  <li>Carpentry</li>
                  <li>Tile work</li>
                  <li>Electrician skills</li>
                  <li>Masonry</li>
                  <li>Drywall</li>
                </ul>
                <p>Using these skills, I completed many projects at home — from building a large firepit to renovating two bathrooms.</p>
                <div className="mt-6 flex justify-center overflow-hidden">
                  <ImgStack images={["/images/bathroombefore.png", "/images/bathroomafter1.png", "/images/bathroomafter2.png"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
