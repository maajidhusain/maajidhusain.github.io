"use client";

import Image from "next/image";

type Book = {
  title: string;
  author: string;
  cover: string;
  coverAlt: string;
};

type BookCoverMarqueeProps = {
  books: Book[];
};

function BookCard({ book }: { book: Book }) {
  return (
    <article className="group w-[170px] shrink-0 rounded-[28px] border border-white/45 bg-white/70 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[2/3] overflow-hidden rounded-[20px] border border-slate-900/10 bg-white">
        <Image
          src={book.cover}
          alt={book.coverAlt}
          fill
          sizes="170px"
          className="object-cover"
        />
      </div>
      <div className="px-1 pb-1 pt-3">
        <h3 className="font-display text-sm font-semibold leading-snug text-slate-900">
          {book.title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
          {book.author}
        </p>
      </div>
    </article>
  );
}

function BookRow({
  books,
  reverse = false,
  speed = 30,
}: {
  books: Book[];
  reverse?: boolean;
  speed?: number;
}) {
  const repeatedBooks = [...books, ...books];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-5 py-2 ${reverse ? "animate-book-marquee-reverse" : "animate-book-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeatedBooks.map((book, index) => (
          <BookCard key={`${book.title}-${index}`} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function BookCoverMarquee({ books }: BookCoverMarqueeProps) {
  return (
    <div className="book-marquee glass-panel relative overflow-hidden rounded-[28px] border border-white/30 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-6">
      <div className="relative space-y-4">
        <BookRow books={books} speed={26} />
        <BookRow books={[...books].reverse()} reverse speed={30} />
      </div>
    </div>
  );
}
