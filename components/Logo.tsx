export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`logo${footer ? ' logo-footer' : ''}`} href="/#top" aria-label="Original Cars – úvod">
      <svg viewBox="0 0 584 176" role="img" aria-labelledby={footer ? 'footer-logo-title' : 'header-logo-title'}>
        <title id={footer ? 'footer-logo-title' : 'header-logo-title'}>Original Cars s.r.o. – Autoservis Partizánske</title>
        <path d="M23 46c60-2 103-27 174-34 55-6 108 5 153 29 30 2 58 5 88 12-41-5-76-7-111-5-47-22-92-29-137-24-51 6-93 20-131 23z" fill="#ed1b2e" />
        <path d="M354 41c39 1 77 5 116 14l-24 1c-34-7-65-10-92-10z" fill="#fff" opacity=".9" />
        <image href="/images/original-cars-wordmark-stamp.png" x="18" y="51" width="548" height="89" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
        <text className="logo-subtitle" x="292" y="166" fill="#fff" fontSize="19" textAnchor="middle">AUTOSERVIS PARTIZÁNSKE</text>
      </svg>
    </a>
  );
}
