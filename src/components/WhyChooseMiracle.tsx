import { Flame, Hourglass, ShieldCheck, Utensils, Wheat } from 'lucide-react';

const features = [
  { title: 'Extra Long Grain', icon: Wheat },
  { title: 'Naturally Aromatic', icon: Flame },
  { title: 'Aged to Perfection', icon: Hourglass },
  { title: 'Fluffy & Non Stick', icon: Utensils },
  { title: 'Quality Assured', icon: ShieldCheck },
] as const;

export function WhyChooseMiracle() {
  return (
    <section className="mt-16 rounded-xl bg-[#1a3d2e] px-4 py-10 text-[#f4efe6] shadow-md sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24A]">
            Why Taste of Miracle
          </span>
          <h2 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
            Quality You Can See in Every Grain
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {features.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex min-h-28 flex-col items-center justify-center rounded border border-[#C9A24A]/25 bg-[#10291e] p-4 text-center transition-colors hover:border-[#C9A24A]"
            >
              <Icon className="h-7 w-7 text-[#C9A24A]" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-sm font-bold leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
