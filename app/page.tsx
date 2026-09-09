import Image from 'next/image';
import { ArrowRight, AtSign, Car, Clock3, Gauge, Mail, MapPin, Phone, ShieldCheck, UsersRound, Wrench } from 'lucide-react';
import { Gallery } from '@/components/Gallery';
import { ServiceIcon } from '@/components/ServiceIcon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { services } from '@/lib/services';

export default function Home() {
  return <main id="top">
    <SiteHeader />
    <section className="hero">
      <Image className="hero-image" src="/images/hero-building.webp" alt="Budova autoservisu Original Cars v Partizánskom" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="shell hero-inner"><div className="hero-copy">
        <p className="eyebrow light"><span /> Váš spoľahlivý autoservis</p>
        <h1><span>AUTOSERVIS</span><em>V PARTIZÁNSKOM</em></h1>
        <p>Servisujeme všetky značky osobných aj úžitkových vozidiel. Profesionálny prístup a všetky služby pod jednou strechou.</p>
        <div className="hero-actions"><a className="button primary" href="tel:+421903277970"><Phone size={19} /> Objednať</a><a className="button outline" href="tel:+421903277970"><Phone size={19} /> Zavolať</a></div>
      </div></div>
    </section>
    <section className="quick-strip" aria-label="Základné informácie"><div className="shell quick-grid">
      <div><Clock3 /><span><small>Otváracie hodiny</small>Po – Pi<br />7:00 – 15:00</span></div>
      <div><Car /><span><small>Servisujeme</small>Osobné aj úžitkové</span></div>
      <div><Gauge /><span><small>Špecializácia</small>Všetky značky áut</span></div>
    </div></section>
    <section className="section services" id="sluzby"><div className="shell">
      <div className="section-heading compact"><div><p className="eyebrow red"><span /> Naše služby</p><h2>Všetko pre vaše auto.</h2></div><p>Od pravidelnej údržby až po náročnejšie opravy. Vyberte službu a pozrite si podrobnosti.</p></div>
      <div className="service-grid">{services.map((service) => <a className="service-card" href={`/sluzby/${service.slug}`} key={service.slug}><ServiceIcon name={service.icon} /><h3>{service.title}</h3><p>{service.short}</p><span className="card-link">Viac informácií <ArrowRight size={15} /></span></a>)}</div>
    </div></section>
    <section className="ride"><div className="shell ride-inner"><div className="ride-icon"><Car /></div><div><p className="eyebrow light"><span /> Myslíme aj na vás</p><h2>Auto ostáva u nás. Vy sa dostanete domov.</h2><p>Nechávate auto v servise? Ak sa nemáte ako dostať domov, zabezpečíme vám odvoz.</p></div><a className="button light-button" href="tel:+421903277970"><Phone size={18} /> Dohodnúť odvoz</a></div></section>
    <section className="section about" id="o-nas"><div className="shell about-grid">
      <div><p className="eyebrow red"><span /> Original Cars</p><h2>Poctivý servis.<br />Jasné riešenia.</h2><p className="about-lead">Profesionálny a osobný prístup pre každý typ vozidla. Najprv nájdeme príčinu, potom vám zrozumiteľne vysvetlíme ďalší postup.</p><a className="button dark-button" href="tel:+421903277970"><Phone size={18} /> Dohodnúť termín</a></div>
      <div className="benefit-grid"><article><Wrench /><h3>Moderné vybavenie</h3><p>Presná diagnostika a technika pre kvalitnú prácu.</p></article><article><Car /><h3>Všetky značky</h3><p>Osobné aj úžitkové vozidlá na jednom mieste.</p></article><article><UsersRound /><h3>Osobný prístup</h3><p>Komunikujeme priamo, zrozumiteľne a férovo.</p></article><article><ShieldCheck /><h3>Pod jednou strechou</h3><p>Kompletný rozsah servisu bez zbytočného behania.</p></article></div>
    </div></section>
    <section className="section gallery" id="galeria"><div className="shell"><div className="section-heading"><div><p className="eyebrow red"><span /> Galéria</p><h2>Priestor pripravený<br />na každú výzvu.</h2></div><p>Moderné vybavenie, čisté priestory a servis, v ktorom sa o vaše vozidlo postaráme od začiatku do konca.</p></div><Gallery /></div></section>
    <section className="contact" id="kontakt"><div className="shell contact-top"><div><p className="eyebrow light"><span /> Kontakt</p><h2>Navštívte nás<br />v Partizánskom.</h2><p>Kontaktná osoba: <strong>Marek Vépy</strong></p><div className="contact-links"><a href="tel:+421903277970"><Phone />0903 277 970</a><a href="mailto:originalcarspe@gmail.com"><Mail />originalcarspe@gmail.com</a><a href="https://www.instagram.com/autoservismarek/" target="_blank" rel="noreferrer"><AtSign />@autoservismarek</a></div></div><div className="address-card"><MapPin /><div><small>Adresa</small><strong>Uherecká cesta<br />958 03 Partizánske</strong><small>Otváracie hodiny</small><strong>Pondelok – piatok<br />7:00 – 15:00</strong></div></div></div>
      <div className="map-wrap"><iframe title="Mapa – Original Cars, Uherecká cesta, Partizánske" src="https://www.google.com/maps?q=Uhereck%C3%A1+cesta%2C+958+03+Partiz%C3%A1nske&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    </section>
    <SiteFooter />
  </main>;
}
