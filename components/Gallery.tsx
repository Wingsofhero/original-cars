'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const images = [
  ['/images/workshop-exterior.webp', 'Budova autoservisu Original Cars v Partizánskom'],
  ['/images/workshop-interior.webp', 'Priestranná servisná dielňa so zdvihákmi'],
  ['/images/geometry-car.webp', 'Vozidlo počas merania 3D geometrie'],
  ['/images/reception.webp', 'Recepcia autoservisu Original Cars'],
  ['/images/geometry-equipment.webp', 'Moderné zariadenie na meranie geometrie'],
  ['/images/air-conditioning.webp', 'Servis klimatizácie vozidla'],
];

export function Gallery() {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(520, rail.current.clientWidth * .82), behavior: 'smooth' });
  const step = (direction: number) => setActive((current) => current === null ? 0 : (current + direction + images.length) % images.length);
  return <>
    <div className="gallery-controls"><button type="button" onClick={() => move(-1)} aria-label="Predchádzajúce fotografie"><ChevronLeft /></button><button type="button" onClick={() => move(1)} aria-label="Ďalšie fotografie"><ChevronRight /></button></div>
    <div className="gallery-rail" ref={rail}>{images.map(([src, alt], index) => <button className="gallery-slide" type="button" key={src} onClick={() => setActive(index)} aria-label={`Otvoriť fotografiu: ${alt}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 82vw, 420px" /><span><Maximize2 size={18} /> Zväčšiť</span></button>)}</div>
    <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}><DialogContent className="lightbox" showCloseButton={false}><DialogTitle className="sr-only">Fotogaléria Original Cars</DialogTitle><DialogDescription className="sr-only">Zväčšená fotografia z autoservisu</DialogDescription>{active !== null && <Image src={images[active][0]} alt={images[active][1]} fill sizes="95vw" />}<button className="lightbox-close" onClick={() => setActive(null)} aria-label="Zavrieť fotografiu"><X /></button><button className="lightbox-prev" onClick={() => step(-1)} aria-label="Predchádzajúca fotografia"><ChevronLeft /></button><button className="lightbox-next" onClick={() => step(1)} aria-label="Ďalšia fotografia"><ChevronRight /></button></DialogContent></Dialog>
  </>;
}
