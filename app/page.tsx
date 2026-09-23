import Image from 'next/image';
import { ArrowRight, AtSign, BadgeCheck, Car, Clock3, Gauge, Mail, MapPin, Phone, ShieldCheck, UsersRound, Wrench } from 'lucide-react';
import { Gallery } from '@/components/Gallery';
import { ServiceIcon } from '@/components/ServiceIcon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { services } from '@/lib/services';

export default function Home() {
  return <main id="top">
    <SiteHeader />
    <section className="hero">
      <Image className="hero-image hunter-hero-image" src="/images/hero-geometry.webp" alt="Vozidlo počas merania 3D geometrie Hunter" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="shell hero-inner"><div className="hero-copy">
        <p className="eyebrow light"><span /> Hunter HawkEye Elite</p>
        <h1><span>3D GEOMETRIA</span><em>HUNTER</em></h1>
        <p>Disponujeme najmodernejšou 3D geometriou Hunter HawkEye Elite – najvyššou radou technológie Hunter. Presné meranie a nastavenie na počkanie približne za 30 minút.</p>
        <div className="hero-actions"><a className="button primary" href="tel:+421903277970"><Phone size={19} /> Objednať geometriu</a><a className="button outline" href="/sluzby/geometria-3d">Zistiť viac <ArrowRight size={18} /></a></div>
      </div></div>
    </section>
    <section className="quick-strip" aria-label="Základné informácie"><div className="shell quick-grid">
      <div><Clock3 /><span><small>Otváracie hodiny</small>Po – Pi<br />7:00 – 15:00</span></div>
      <div><Car /><span><small>Servisujeme</small>Osobné aj úžitkové</span></div>
      <div><Gauge /><span><small>Špecializácia</small>Všetky značky automobilov</span></div>
    </div></section>
    <section className="section services" id="sluzby"><div className="shell">
      <div className="section-heading compact"><div><p className="eyebrow red"><span /> Naše služby</p><h2>Všetko pre vaše auto.</h2></div><p>Od pravidelnej údržby až po náročnejšie opravy. Vyberte službu a pozrite si podrobnosti.</p></div>
      <div className="service-grid">{services.map((service) => <a className="service-card" href={`/sluzby/${service.slug}`} key={service.slug}><ServiceIcon name={service.icon} /><h3>{service.title}</h3><p>{service.short}</p><span className="card-link">Viac informácií <ArrowRight size={15} /></span></a>)}</div>
    </div></section>
    <section className="bg-showcase"><div className="shell bg-showcase-grid">
      <div className="bg-copy"><p className="eyebrow bg-eyebrow"><span /> Produkty BG</p><div className="bg-status"><BadgeCheck size={18} /> Oficiálny predajca a distribútor</div><h2>Portfólio produktov<br /><em>značky BG.</em></h2><p>Prísady do motorových a prevodových olejov, produkty do automatických prevodoviek aj palivových systémov. Vykonávame tiež profesionálnu dekarbonizáciu benzínových a dieselových motorov produktmi BG.</p><div className="bg-actions"><a className="button primary" href="/sluzby/dekarbonizacia-bg-a-prisady">Pozrieť ponuku <ArrowRight size={17} /></a><a className="button outline" href="tel:+421903277970"><Phone size={17} /> Informovať sa</a></div></div>
      <div className="bg-photo-wall"><figure className="bg-photo-main"><Image src="/images/bg-products-7509.webp" alt="Portfólio produktov značky BG" fill sizes="(max-width: 800px) 100vw, 44vw" /></figure><figure><Image src="/images/bg-products-7507.webp" alt="Produkty BG pre motory a palivové systémy" fill sizes="(max-width: 800px) 48vw, 22vw" /></figure><figure><Image src="/images/bg-products-7506.webp" alt="Prísady BG do prevodoviek a olejov" fill sizes="(max-width: 800px) 48vw, 22vw" /></figure></div>
    </div></section>
    <section className="ride"><div className="shell ride-inner"><div className="ride-icon"><Car /></div><div><p className="eyebrow light"><span /> Bezplatný odvoz</p><h2>Auto ostáva u nás. Vy sa dostanete domov.</h2><p>Nechávate auto v servise? Ak sa nemáte ako dostať domov, zabezpečíme vám bezplatný odvoz. Našim dlhodobým zákazníkom po dohode ponúkame aj možnosť zapožičania náhradného vozidla počas opravy.</p></div><a className="button light-button" href="tel:+421903277970"><Phone size={18} /> Dohodnúť odvoz</a></div></section>
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
