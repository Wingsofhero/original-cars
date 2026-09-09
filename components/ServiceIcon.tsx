import { Activity, CarFront, CircleGauge, Cog, Fan, Flashlight, Gauge, LifeBuoy, ScanLine, Settings, ShieldCheck, Wind, Wrench } from 'lucide-react';
import type { ServiceIcon as ServiceIconName } from '@/lib/services';

const icons = { oil: Wrench, timing: Settings, geometry: CircleGauge, tires: Gauge, climate: Fan, diagnostics: Activity, inspection: ShieldCheck, towbar: CarFront, windshield: Wind, gearbox: Cog, towing: LifeBuoy, engine: ScanLine, lights: Flashlight };

export function ServiceIcon({ name, size = 28 }: { name: ServiceIconName; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
