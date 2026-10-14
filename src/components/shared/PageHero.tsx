import Image from "next/image";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
          <div className="hero-overlay absolute inset-0 -z-10" />
        </>
      )}
      <div className="container-gd fade-up py-24 md:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl text-on-dark md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-xl text-on-dark/80">{text}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, light = false, as: Tag = "h2" }: { eyebrow: string; title: React.ReactNode; light?: boolean; as?: "h1" | "h2" }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className={`mt-3 text-3xl leading-tight md:text-[2.6rem] ${light ? "text-on-dark" : "text-foreground"}`}>{title}</Tag>
    </div>
  );
}
