export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`logo${footer ? ' logo-footer' : ''}`} href="/#top" aria-label="Original Cars – úvod">
      <svg viewBox="0 0 584 148" role="img" aria-labelledby={footer ? 'footer-logo-title' : 'header-logo-title'}>
        <title id={footer ? 'footer-logo-title' : 'header-logo-title'}>Original Cars s.r.o. – Autoservis Partizánske</title>
        <path d="M23 46c60-2 103-27 174-34 55-6 108 5 153 29 30 2 58 5 88 12-41-5-76-7-111-5-47-22-92-29-137-24-51 6-93 20-131 23z" fill="#ed1b2e" />
        <path d="M354 41c39 1 77 5 116 14l-24 1c-34-7-65-10-92-10z" fill="#fff" opacity=".9" />
        <text className="logo-wordmark" x="20" y="108" fill="#fff" fontSize="67">
          Original <tspan fill="#ed1b2e">Cars</tspan>
        </text>
        <text className="logo-company-suffix" x="470" y="106" fill="#fff" fontSize="25">s.r.o.</text>
        <text className="logo-subtitle" x="111" y="137" fill="#fff" fontSize="19">AUTOSERVIS PARTIZÁNSKE</text>
      </svg>
    </a>
  );
}
