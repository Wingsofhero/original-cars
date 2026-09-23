import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { ServiceIcon } from '@/components/ServiceIcon';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { geometryFeatures, getService, services } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return { title: service ? `${service.title} | Original Cars` : 'Služba | Original Cars', description: service?.short };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return <main><SiteHeader /><section className="service-detail"><div className="shell"><h1>Služba sa nenašla</h1><a href="/#sluzby">Späť na služby</a></div></section><SiteFooter /></main>;
  const isBg = service.slug === 'dekarbonizacia-bg-a-prisady';
  const isGeometry = service.slug === 'geometria-3d';
  return <main><SiteHeader /><section className={`service-detail${isBg ? ' bg-detail' : ''}${isGeometry ? ' geometry-detail' : ''}`}><div className="shell"><a className="back-link" href="/#sluzby"><ArrowLeft size={18} /> Všetky služby</a><div className="detail-grid"><div className="detail-copy"><div className="detail-icon"><ServiceIcon name={service.icon} size={34} /></div><p className="eyebrow red"><span /> {isBg ? 'Oficiálny predajca a distribútor BG' : isGeometry ? 'Hunter HawkEye Elite' : 'Služby Original Cars'}</p><h1>{isBg ? 'Produkty BG a profesionálna dekarbonizácia' : service.title}</h1><p className="detail-intro">{service.intro}</p>{service.secondary && <p className="detail-secondary">{service.secondary}</p>}{isBg && <p className="bg-detail-note">Pomocou profesionálnych produktov BG vykonávame dekarbonizáciu benzínových aj dieselových motorov. Zvolený postup vždy prispôsobíme typu vozidla, motora a jeho aktuálnemu stavu.</p>}<ul className={isBg ? 'bg-product-list' : undefined}>{service.details.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul><div className="detail-actions"><a className="button primary" href="tel:+421903277970"><Phone size={18} /> {isBg ? 'Objednať dekarbonizáciu' : isGeometry ? 'Objednať geometriu' : 'Objednať'}</a>{isBg ? <a className="button detail-phone" href="tel:+421903277970">Informovať sa o BG produktoch</a> : <a className="button detail-phone" href="tel:+421903277970">0903 277 970</a>}</div></div><div className={`detail-image${service.imageFit === 'contain' ? ' image-contain' : ''}`}><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 48vw" /></div></div>{isGeometry && <section className="hunter-features" aria-labelledby="hunter-title"><div className="hunter-features-heading"><p className="eyebrow red"><span /> Technológia najvyššej rady</p><h2 id="hunter-title">Presnosť systému Hunter HawkEye Elite</h2><p>Patentované adaptéry QuickGrip sa upevňujú na kolesá s priemerom 10 až 37 palcov bez kontaktu s povrchom disku. Systém meria aj živú svetlú výšku vozidla a vedie technika ku správnemu postupu pre konkrétny model.</p></div><div className="hunter-feature-grid">{geometryFeatures.map((feature) => <article key={feature.title}><span>HUNTER</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>}{isBg && <div className="bg-detail-gallery"><figure><Image src="/images/bg-products-7508.webp" alt="Produkty BG pre palivové systémy a automatické prevodovky" fill sizes="(max-width: 700px) 100vw, 50vw" /></figure><figure><Image src="/images/bg-products-7507.webp" alt="Produkty BG pre benzínové a dieselové motory" fill sizes="(max-width: 700px) 100vw, 50vw" /></figure></div>}</div></section><section className="detail-cta"><div className="shell"><div><p>Potrebujete poradiť?</p><h2>{isBg ? 'Vyberieme vhodný produkt alebo postup pre vaše vozidlo.' : 'Dohodnite si termín telefonicky.'}</h2></div><a className="button light-button" href="tel:+421903277970"><Phone size={18} /> 0903 277 970</a></div></section><SiteFooter /></main>;
}
