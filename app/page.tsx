import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Car,
  Check,
  ChevronRight,
  CircleGauge,
  Clock3,
  Cog,
  Fan,
  Gauge,
  AtSign,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

const services = [
  {
    number: '01', icon: Wrench, title: 'Pravidelný servis',
    text: 'Údržba, ktorá predĺži životnosť auta a udrží ho spoľahlivé každý deň.',
    items: ['Výmena oleja a všetkých filtrov', 'Kompletné rozvody', 'Všeobecná kontrola vozidla'],
  },
  {
    number: '02', icon: CircleGauge, title: 'Geometria 3D',
    text: 'Presné meranie a nastavenie geometrie modernou technológiou Hunter.',
    items: ['3D geometria náprav', 'Nastavenie svetlometov', 'Kontrola podvozka'],
  },
  {
    number: '03', icon: Fan, title: 'Pneuservis a klíma',
    text: 'Kompletná starostlivosť o pneumatiky a klimatizáciu pre každú sezónu.',
    items: ['Pneuservis a vyvažovanie kolies', 'Plnenie klimatizácie', 'Dezinfekcia klimatizácie'],
  },
  {
    number: '04', icon: BatteryCharging, title: 'Diagnostika',
    text: 'Rýchlo odhalíme problém v motore aj elektronike a navrhneme jasné riešenie.',
    items: ['Diagnostika motora', 'Diagnostika elektroniky', 'Kontrola pred opravou'],
  },
  {
    number: '05', icon: Cog, title: 'Motor a prevodovky',
    text: 'Odborné opravy mechanických častí vrátane automatických prevodoviek.',
    items: ['Servis DSG prevodoviek', 'Opravy prevodoviek', 'Dekarbonizácia motora BG'],
  },
  {
    number: '06', icon: Car, title: 'Doplnkové služby',
    text: 'Praktické riešenia, aby ste všetko vybavili pohodlne na jednom mieste.',
    items: ['Montáž ťažných zariadení', 'Výmena čelných skiel', 'Odťahová služba'],
  },
];

const gallery = [
  { src: '/images/workshop-exterior.webp', alt: 'Budova autoservisu Original Cars v Partizánskom', className: 'gallery-tall' },
  { src: '/images/workshop-interior.webp', alt: 'Priestranná servisná dielňa so zdvihákmi', className: 'gallery-wide' },
  { src: '/images/geometry-car.webp', alt: 'Vozidlo počas merania 3D geometrie', className: '' },
  { src: '/images/reception.webp', alt: 'Recepcia autoservisu Original Cars', className: '' },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Original Cars – úvod">
      <span className="brand-main">ORIGINAL <b>CARS</b></span>
      <span className="brand-sub">AUTOSERVIS PARTIZÁNSKE</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Hlavná navigácia">
            <a href="#sluzby">Služby</a><a href="#o-nas">O nás</a><a href="#galeria">Galéria</a><a href="#kontakt">Kontakt</a>
          </nav>
          <a className="header-call" href="tel:+421903277970">
            <Phone size={17} aria-hidden="true" /><span><small>Zavolajte nám</small>0903 277 970</span>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Otvoriť menu"><Menu size={24} /></summary>
            <nav aria-label="Mobilná navigácia">
              <a href="#sluzby">Služby</a><a href="#o-nas">O nás</a><a href="#galeria">Galéria</a><a href="#kontakt">Kontakt</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" role="img" aria-label="Vozidlo počas profesionálneho nastavenia geometrie" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Autoservis v Partizánskom</p>
            <h1>Všetko pre vaše auto.<br /><em>Pod jednou strechou.</em></h1>
            <p className="hero-lead">Servisujeme všetky značky osobných aj úžitkových vozidiel. Profesionálne, férovo a bez zbytočných komplikácií.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+421903277970"><Phone size={19} /> Objednať servis</a>
              <a className="button button-ghost" href="#sluzby">Naše služby <ArrowRight size={19} /></a>
            </div>
            <div className="hero-proof">
              <span><BadgeCheck /> Profesionálny prístup</span><span><ShieldCheck /> Spoľahlivé riešenia</span>
            </div>
          </div>
        </div>
        <a className="hero-location" href="https://www.google.com/maps/search/?api=1&query=Uhereck%C3%A1+cesta%2C+958+03+Partiz%C3%A1nske" target="_blank" rel="noreferrer">
          <MapPin /><span><small>Nájdete nás</small>Uherecká cesta, Partizánske</span><ChevronRight />
        </a>
      </section>

      <section className="quick-strip" aria-label="Základné informácie">
        <div className="shell quick-grid">
          <div><Clock3 /><span><small>Otváracie hodiny</small>Po – Pi&nbsp;&nbsp; 7:00 – 15:00</span></div>
          <div><Car /><span><small>Servisujeme</small>Osobné aj úžitkové vozidlá</span></div>
          <div><Gauge /><span><small>Špecializácia</small>Všetky značky automobilov</span></div>
        </div>
      </section>

      <section className="services section" id="sluzby">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow red"><span /> Naše služby</p><h2>Kompletný servis.<br />Jedno spoľahlivé miesto.</h2></div>
            <p>Od bežnej údržby po náročnejšie opravy. O vaše vozidlo sa postaráme odborne a s dôrazom na každý detail.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text, items }) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span>{number}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3><p>{text}</p>
                <ul>{items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="service-extra">
            <div><Sparkles /><span><b>BG dekarbonizácia a prísady</b>Motorové a palivové prísady BG nájdete priamo u nás.</span></div>
            <div><Car /><span><b>Odvoz zákazníkov</b>Keď nám necháte auto, pomôžeme vám pohodlne sa dostať domov.</span></div>
          </div>
        </div>
      </section>

      <section className="feature section" id="o-nas">
        <div className="shell feature-grid">
          <div className="feature-image-wrap">
            <img src="/images/air-conditioning-service.webp" alt="Plnenie klimatizácie v autoservise Original Cars" />
            <div className="feature-stamp"><b>01</b><span>servis<br />bez kompromisov</span></div>
          </div>
          <div className="feature-copy">
            <p className="eyebrow red"><span /> Original Cars</p><h2>Remeslo, technológia<br />a férový prístup.</h2>
            <p>Každé vozidlo berieme ako záväzok. Najprv zistíme skutočnú príčinu problému, potom vám zrozumiteľne vysvetlíme riešenie. Žiadne dohady, iba poctivá práca.</p>
            <div className="values">
              <div><span>01</span><p><b>Moderné vybavenie</b>Presná 3D geometria, diagnostika aj servis klimatizácií.</p></div>
              <div><span>02</span><p><b>Všetky značky</b>Osobné aj úžitkové vozidlá servisujeme na jednom mieste.</p></div>
              <div><span>03</span><p><b>Osobný prístup</b>Vaše auto má na starosti Marek Vépy a skúsený tím.</p></div>
            </div>
            <a className="text-link" href="tel:+421903277970">Dohodnúť termín <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="shell">
          <div className="section-heading gallery-heading">
            <div><p className="eyebrow red"><span /> Z nášho servisu</p><h2>Priestor pripravený<br />na každú výzvu.</h2></div>
            <p>Vybavená dielňa, moderná technika a miesto, kde má kvalitná práca pevné pravidlá.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => <figure className={image.className} key={image.src}><img src={image.src} alt={image.alt} /></figure>)}
          </div>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <p className="eyebrow"><span /> Kontakt</p><h2>Vaše auto môže byť<br /><em>opäť v top forme.</em></h2>
            <p>Zavolajte nám a dohodnite si termín. Radi vám poradíme aj s tým, aký servis vaše vozidlo potrebuje.</p>
            <a className="button button-primary" href="tel:+421903277970"><Phone size={19} /> 0903 277 970</a>
          </div>
          <div className="contact-card">
            <div className="contact-row"><MapPin /><span><small>Adresa</small><a href="https://www.google.com/maps/search/?api=1&query=Uhereck%C3%A1+cesta%2C+958+03+Partiz%C3%A1nske" target="_blank" rel="noreferrer">Uherecká cesta<br />958 03 Partizánske</a></span></div>
            <div className="contact-row"><Clock3 /><span><small>Otváracie hodiny</small>Pondelok – piatok<br />7:00 – 15:00</span></div>
            <div className="contact-row"><Mail /><span><small>E-mail</small><a href="mailto:originalcarspe@gmail.com">originalcarspe@gmail.com</a></span></div>
            <div className="contact-row"><AtSign /><span><small>Instagram</small><a href="https://www.instagram.com/autoservismarek/" target="_blank" rel="noreferrer">@autoservismarek</a></span></div>
          </div>
        </div>
      </section>

      <footer><div className="shell footer-grid"><Brand /><p>Originál Cars s.r.o.<br />Marek Vépy</p><p>© {new Date().getFullYear()} Original Cars<br />Všetky práva vyhradené.</p></div></footer>
    </main>
  );
}
