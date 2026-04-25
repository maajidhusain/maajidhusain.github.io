import Navbar from "@/components/Navbar";
import Image from "next/image";
import BookCoverMarquee from "@/components/ui/book-cover-marquee";
import ImgStack from "@/components/ui/image-stack";

const favoriteBooks = [
  {
    title: "The Bartimaeus Sequence",
    author: "Jonathan Stroud",
    cover: "/images/books/the-amulet-of-samarkand.png",
    coverAlt: "Cover of The Amulet of Samarkand, used here to represent The Bartimaeus Sequence.",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    cover: "/images/books/great-expectations.jpg",
    coverAlt: "Title page artwork for Great Expectations by Charles Dickens.",
  },
  {
    title: "The Autobiography of Malcolm X",
    author: "Malcolm X and Alex Haley",
    cover: "/images/books/the-autobiography-of-malcolm-x.jpg",
    coverAlt: "First-edition cover of The Autobiography of Malcolm X.",
  },
  {
    title: "Hatchet",
    author: "Gary Paulsen",
    cover: "/images/books/hatchet.jpg",
    coverAlt: "First-edition cover of Hatchet by Gary Paulsen.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen text-slate-900 sm:h-screen sm:overflow-y-auto sm:glass-scroll">
      <Navbar />
      <main className="px-4 pb-24 pt-24 sm:px-10 lg:px-16 xl:px-24 sm:pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start lg:gap-14">
          <section className="max-w-3xl">
            <div className="flex flex-col items-start gap-4 border-b border-white/20 pb-6 sm:flex-row sm:items-center sm:gap-6 sm:pb-8">
              <div className="accent-border h-16 w-16 overflow-hidden rounded-full border grayscale sm:h-24 sm:w-24">
                <Image src="/images/myheadshot.png" alt="Maajid Husain" width={96} height={96} className="h-full w-full object-cover" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">About Me</h1>
                <p className="accent-soft-text mt-1 text-[11px] uppercase leading-relaxed tracking-[1.5px] sm:mt-2 sm:text-xs sm:tracking-[2px]">
                  Leesburg, VA · University of Virginia · Capital One
                </p>
                <div className="accent-divider mt-3 h-px w-24" />
              </div>
            </div>

            <div className="space-y-9 pt-8 text-[15px] font-light leading-8 text-slate-900/80 sm:space-y-12 sm:text-lg sm:leading-[2]">
              <div>
                <h2 className="accent-text font-display mb-3 text-xl font-bold sm:text-2xl">Life</h2>
                <p>In my free time I really enjoy exploring nature, going longboarding, spending time with friends, and working towards my career and academic goals.</p>
              </div>

              <div>
                <h2 className="accent-text font-display mb-3 text-xl font-bold sm:text-2xl">Reading</h2>
                <p>Leisurely reading is something I have always been interested in. Some of my favorites:</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  {favoriteBooks.map((book) => (
                    <li key={book.title}>
                      <em>{book.title}</em> — {book.author}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 lg:hidden">
                  <p className="accent-soft-text text-[11px] uppercase tracking-[2px] sm:text-xs">Favorite Books</p>
                  <div className="mt-3">
                    <BookCoverMarquee books={favoriteBooks} />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="accent-text font-display mb-3 text-xl font-bold sm:text-2xl">Construction &amp; Manual Labor</h2>
                <p>During COVID-19, I found myself with an abundance of free time. I started as an apprentice for a contracting company and picked up many handyman skills:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>Carpentry</li>
                  <li>Tile work</li>
                  <li>Electrician skills</li>
                  <li>Masonry</li>
                  <li>Drywall</li>
                </ul>
                <p className="mt-4">Using these skills, I completed many projects at home, from building a large firepit to renovating two bathrooms.</p>
                <div className="mt-6 glass-panel rounded-[24px] border border-white/30 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.1)] sm:p-6 lg:hidden">
                  <div className="mb-4">
                    <p className="accent-soft-text text-[11px] uppercase tracking-[2px] sm:text-xs">Renovation Photos</p>
                    <h2 className="font-display mt-2 text-xl font-bold text-slate-900 sm:text-3xl">Bathroom Renovation</h2>
                  </div>
                  <div className="flex justify-center overflow-hidden">
                    <ImgStack images={["/images/bathroombefore.png", "/images/bathroomafter1.png", "/images/bathroomafter2.png"]} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <div className="space-y-8">
              <div>
                <p className="accent-soft-text text-[11px] uppercase tracking-[2px] sm:text-xs">Favorite Books</p>
                <div className="mt-3">
                  <BookCoverMarquee books={favoriteBooks} />
                </div>
              </div>

              <div className="glass-panel rounded-[28px] border border-white/30 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-6">
                <div className="mb-5">
                  <p className="accent-soft-text text-[11px] uppercase tracking-[2px] sm:text-xs">Renovation Photos</p>
                  <h2 className="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Bathroom Renovation</h2>
                </div>
                <div className="flex justify-center overflow-hidden">
                  <ImgStack images={["/images/bathroombefore.png", "/images/bathroomafter1.png", "/images/bathroomafter2.png"]} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
