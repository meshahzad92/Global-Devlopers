import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { images } from "@/data/images";

export function CtaBand({ title = "Have a Project in Mind?", text = "We'd love to hear from you. Get in touch with our team to discuss your investment or development needs." }: { title?: string; text?: string }) {
  const wa = company.contact?.whatsapp;
  return (
    <section className="grid bg-forest md:grid-cols-2">
      <div className="container-gd py-16 md:mr-0 md:ml-auto md:max-w-[38rem] md:pr-12">
        <p className="eyebrow">Let&apos;s Build Together</p>
        <h2 className="mt-3 text-3xl text-on-dark md:text-[2.6rem]">{title}</h2>
        <p className="mt-4 max-w-md text-sm text-on-dark/80">{text}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild variant="gold">
            <Link href="/contact">Contact Us <ArrowRight /></Link>
          </Button>
          {wa && (
            <Button asChild variant="outlineLight">
              <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
      <div className="relative h-64 w-full md:h-full md:min-h-[22rem]">
        <Image src={images.interior} alt="Luxury interior overlooking the city" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}
