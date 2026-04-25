import Slideshow from "@/components/Slideshow";
import Image from "next/image";

const slides = [
  { src: "/images/img5.jpeg", caption: "Fireside Chat at Data Fest at UVA 2022" },
  { src: "/images/img1.jpeg", caption: "Spending time with my brothers" },
  { src: "/images/img2.jpeg", caption: "Events at UVA" },
  { src: "/images/img3.jpeg", caption: "Being adventurous at America's National Parks" },
  { src: "/images/img4.jpeg", caption: "Spending time with friends" },
];

const bathroomImages = [
  { src: "/images/bathroombefore.png", desc: "Bathroom before renovation" },
  { src: "/images/bathroomafter1.png", desc: "Image 1 of bathroom after renovation" },
  { src: "/images/bathroomafter2.png", desc: "Image 2 of bathroom after renovation" },
];

export default function About() {
  return (
    <div className="space-y-12">
      <h1 className="accent-border text-3xl font-bold text-white border-b pb-4">About</h1>

      <nav className="accent-border-soft bg-gray-900 border rounded-lg p-4">
        <h2 className="accent-glow-text text-sm font-semibold uppercase tracking-wider mb-2">Table of Contents</h2>
        <ol className="accent-soft-text list-decimal list-inside space-y-1">
          <li><a href="#my-life" className="hover:underline">My Life</a></li>
          <li><a href="#about-me" className="hover:underline">About Me</a></li>
          <li><a href="#reading" className="hover:underline">Reading</a></li>
          <li><a href="#construction" className="hover:underline">Construction &amp; Manual Labor</a></li>
        </ol>
      </nav>

      <section id="my-life">
        <h2 className="text-2xl font-semibold text-white mb-6">1. My Life</h2>
        <Slideshow slides={slides} />
      </section>

      <hr className="accent-border-soft" />

      <section id="about-me">
        <h2 className="text-2xl font-semibold text-white mb-4">2. About My Life</h2>
        <p className="text-gray-300 leading-relaxed">
          Im my free time I really enjoy exploring nature, spending time with friends, and working towards my career and academic goals.
        </p>
      </section>

      <hr className="accent-border-soft" />

      <section id="reading">
        <h2 className="text-2xl font-semibold text-white mb-4">3. Reading</h2>
        <p className="text-gray-300 mb-3">Leisurely reading is something I have always been interested in. Some of my favorite books include:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li><em>The Bartimaeus Sequence</em> by Jonathan Stroud</li>
          <li><em>Great Expectations</em> by Charles Dickens</li>
          <li><em>The Autobiography of Malcolm X</em> by Malcolm X and Alex Haley</li>
          <li><em>Hatchet</em> by Gary Paulsen</li>
        </ol>
      </section>

      <hr className="accent-border-soft" />

      <section id="construction">
        <h2 className="text-2xl font-semibold text-white mb-4">4. Construction + Manual Labor</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          During the COVID-19 Pandemic, I found myself with an abundance of free time with too much time spent on my phone, laptop, or TV. Trying to figure out what to do with my time, I decided to start as an apprentice for a contracting company. On multiple residential and commercial jobs, I picked up many handyman skills including:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
          <li>Carpentry</li>
          <li>Tile work</li>
          <li>Electrician skills</li>
          <li>Masonry</li>
          <li>Drywall</li>
        </ul>
        <p className="text-gray-300 mb-6">
          Using these skills, I have completed many projects at home, from building a large firepit/grill to renovating two of the bathrooms in my home.
        </p>
        <div className="flex flex-wrap gap-4">
          {bathroomImages.map((img) => (
            <div key={img.src} className="accent-border-soft bg-gray-900 border rounded-lg overflow-hidden">
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <div className="relative w-60 h-48">
                  <Image
                    src={img.src}
                    alt={img.desc}
                    fill
                    sizes="240px"
                    className="object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
              </a>
              <p className="accent-glow-text text-sm text-center px-3 py-2">{img.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
