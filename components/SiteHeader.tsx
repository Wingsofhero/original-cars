import { Menu, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner"><Logo /><nav className="desktop-nav" aria-label="Hlavná navigácia"><a href="/#top">Úvod</a><a href="/#sluzby">Služby</a><a href="/#o-nas">O nás</a><a href="/#galeria">Galéria</a><a href="/#kontakt">Kontakt</a></nav><a className="header-phone" href="tel:+421903277970"><Phone size={18} /><span>0903 277 970</span></a><details className="mobile-menu"><summary aria-label="Otvoriť menu"><Menu /></summary><nav><a href="/#sluzby">Služby</a><a href="/#o-nas">O nás</a><a href="/#galeria">Galéria</a><a href="/#kontakt">Kontakt</a></nav></details></div></header>;
}
