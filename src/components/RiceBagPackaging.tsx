import Image from 'next/image';

const packagingOptions = [
  {
    name: '1121 Basmati Rice',
    detail: 'Green retail pack',
    image: '/generated/pkg_green_1121.png',
  },
  {
    name: '1509 Basmati Rice',
    detail: 'Cream retail pack',
    image: '/generated/pkg_cream_1509.png',
  },
  {
    name: 'Golden Sella Rice',
    detail: 'Gold retail pack',
    image: '/generated/pkg_gold_sella.png',
  },
  {
    name: 'Parboiled Rice',
    detail: 'Green retail pack',
    image: '/generated/pkg_green_parboiled.png',
  },
] as const;

export function RiceBagPackaging() {
  return (
    <div className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {packagingOptions.map((packaging) => (
          <figure
            key={packaging.image}
            className="group overflow-hidden rounded-lg border border-[#e2d6be] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-[#f4efe6] p-3 sm:p-5">
              <Image
                src={packaging.image}
                alt={`${packaging.name} packaging`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 24vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="border-t border-[#eee4d2] px-3 py-2.5 sm:px-4 sm:py-3">
              <p className="font-serif text-sm font-bold text-[#12372A]">
                {packaging.name}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A24A]">
                {packaging.detail}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
