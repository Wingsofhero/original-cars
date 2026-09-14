import Image from 'next/image';

export function Logo({ footer = false }: { footer?: boolean }) {
  return <a className={`logo${footer ? ' logo-footer' : ''}`} href="/#top" aria-label="Original Cars – úvod"><Image src="/logo-original-cars.svg" alt="Original Cars Autoservis Partizánske" width={292} height={74} priority={!footer} /></a>;
}
