import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with Global Developers to discuss your investment or development needs.",
  path: "/contact",
});

export default function ContactPage() {
  const c = company.contact;
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Have a Project in Mind?" text="We'd love to hear from you. Get in touch with our team to discuss your investment or development needs." image={images.pageContact} />
      <section className="py-16 md:py-20">
        <div className="container-gd">
          {!c ? (
            <div className="rounded-sm border bg-card p-12 text-center">
              <p className="font-serif text-2xl">Contact details will be published soon.</p>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionHead eyebrow="Get in Touch" title="Let's Build Together" />
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  Whether you are looking for a new home, a commercial space or an investment opportunity, our team is ready to help. Reach us directly using any of the options below.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="gold"><a href={`tel:${c.phone.replace(/\s/g, "")}`}><Phone /> Call Now</a></Button>
                  <Button asChild variant="outline"><a href={`mailto:${c.email}`}><Mail /> Send Email</a></Button>
                  <Button asChild variant="forest"><a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a></Button>
                  <Button asChild variant="outline"><a href={c.mapsUrl} target="_blank" rel="noreferrer"><Navigation /> Get Directions</a></Button>
                </div>
                <div className="mt-10">
                  <p className="text-sm font-semibold text-foreground">Follow Us</p>
                  <div className="mt-4 flex gap-3">
                    {company.socials.map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="grid size-10 place-items-center rounded-full border text-forest transition-colors hover:border-gold hover:bg-gold">
                        <SocialIcon name={s.icon} className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: MapPin, title: "Office Address", body: <a href={c.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold-deep">{c.address}</a> },
                  { icon: Phone, title: "Phone", body: <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-gold-deep">{c.phone}</a> },
                  { icon: Mail, title: "Email", body: <a href={`mailto:${c.email}`} className="break-all hover:text-gold-deep">{c.email}</a> },
                  { icon: MessageCircle, title: "WhatsApp", body: <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-gold-deep">+{c.whatsapp}</a> },
                  { icon: Clock, title: "Business Hours", body: <>{c.hours.map((h) => <span key={h} className="block">{h}</span>)}</>, wide: true },
                ].map((item) => (
                  <li key={item.title} className={`rounded-sm border bg-card p-6 shadow-sm ${item.wide ? "sm:col-span-2" : ""}`}>
                    <span className="grid size-11 place-items-center rounded-sm bg-gold/15 text-gold-deep"><item.icon className="size-5" aria-hidden="true" /></span>
                    <h3 className="mt-4 font-sans text-sm font-semibold">{item.title}</h3>
                    <div className="mt-1.5 text-sm text-muted-foreground">{item.body}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
