import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Global Developers about investments, projects and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  const c = company.contact;
  return (
    <>
      <PageHero image={images.interior} eyebrow="Let's Build Together" title="Have a Project in Mind?" text="We'd love to hear from you." />
      <section className="bg-cream py-16">
        {c ? (
          <div className="container-gd grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6 rounded-sm bg-forest p-8 text-on-dark">
              <h2 className="text-3xl">Contact Info</h2>
              <p className="flex gap-3 text-sm"><MapPin className="size-5 shrink-0 text-gold" aria-hidden="true" />{c.address}</p>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex gap-3 text-sm hover:text-gold"><Phone className="size-5 shrink-0 text-gold" aria-hidden="true" />{c.phone}</a>
              <a href={`mailto:${c.email}`} className="flex gap-3 text-sm hover:text-gold"><Mail className="size-5 shrink-0 text-gold" aria-hidden="true" />{c.email}</a>
              <Button asChild variant="gold">
                <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a>
              </Button>
            </div>
            <ContactForm email={c.email} />
          </div>
        ) : (
          <p className="container-gd text-muted-foreground">Contact details will be published soon.</p>
        )}
      </section>
    </>
  );
}
