import {
  BadgeCheck,
  Building2,
  Factory,
  FileCheck2,
  ReceiptText,
} from 'lucide-react';

const certifications = [
  { label: 'APEDA Registered', detail: undefined, icon: BadgeCheck },
  { label: 'FSSAI', detail: '10022911003611', icon: FileCheck2 },
  { label: 'IEC Registered', detail: undefined, icon: Building2 },
  { label: 'GST Registered', detail: undefined, icon: ReceiptText },
  { label: 'Udyam Registered', detail: undefined, icon: Factory },
] as const;

export function CertificationBadges() {
  return (
    <div
      aria-label="Business certifications"
      className="mx-auto flex max-w-5xl flex-wrap items-stretch justify-center gap-2 sm:gap-3"
    >
      {certifications.map(({ label, detail, icon: Icon }) => (
        <div
          key={label}
          className="flex min-w-[142px] items-center justify-center gap-2 rounded border border-[#e2d6be] bg-white px-3 py-2 text-left shadow-sm"
        >
          <Icon className="h-4 w-4 shrink-0 text-[#C9A24A]" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#12372A]">
              {label}
            </p>
            {detail && (
              <p className="mt-0.5 font-mono text-[9px] text-stone-500">{detail}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
