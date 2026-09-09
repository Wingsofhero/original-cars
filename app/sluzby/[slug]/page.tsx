import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { ServiceIcon } from '@/components/ServiceIcon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { getService, services } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return { title: service ? `${service.title} | Original Cars` : 'Služba | Original Cars', description: service?.short };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return <main><SiteHeader /><section className="service-detail"><div className="shell"><h1>Služba sa nenašla</h1><a href="/#sluzby">Späť na služby</a></div></section><SiteFooter /></main>;
  return <main><SiteHeader /><section className="service-detail"><div className="shell"><a className="back-link" href="/#sluzby"><ArrowLeft size={18} /> Všetky služby</a><div className="detail-grid"><div className="detail-copy"><div className="detail-icon"><ServiceIcon name={service.icon} size={34} /></div><p className="eyebrow red"><span /> Služby Original Cars</p><h1>{service.title}</h1><p className="detail-intro">{service.intro}</p><ul>{service.details.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul><div className="detail-actions"><a className="button primary" href="tel:+421903277970"><Phone size={18} /> Objednať</a><a className="button detail-phone" href="tel:+421903277970">0903 277 970</a></div></div><div className="detail-image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 48vw" /></div></div></div></section><section className="detail-cta"><div className="shell"><div><p>Potrebujete poradiť?</p><h2>Dohodnite si termín telefonicky.</h2></div><a className="button light-button" href="tel:+421903277970"><Phone size={18} /> Zavolať</a></div></section><SiteFooter /></main>;
}
