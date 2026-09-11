import { Logo } from './Logo';

export function SiteFooter() {
  return <footer><div className="shell footer-grid"><Logo footer /><p>Original Cars s.r.o.<br />Marek Vépy</p><p>© 2026 Original Cars<br />Všetky práva vyhradené.<br /><a className="footer-credit" href="https://hrdina-web.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Vytvorené pomocou Hrdina Web – otvorí sa v novej karte">Vytvorené pomocou Hrdina Web</a></p></div></footer>;
}
