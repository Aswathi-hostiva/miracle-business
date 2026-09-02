import Image from 'next/image';

interface SingleRicePacketProps {
  code: string;
  name: string;
  image?: string;
  compact?: boolean;
}

export function SingleRicePacket({
  code,
  name,
  image,
  compact = false,
}: SingleRicePacketProps) {
  return (
    <div
     className={`relative w-full ${compact ? 'max-w-[150px]' : 'max-w-[240px]'} aspect-[3/4.5] overflow-hidden rounded-t-2xl border border-[#e2d6be] bg-[#f8f5ec] shadow-xl`}
    >
      {image ? (
        <Image
          src={image}
          alt={`${code} ${name} packaging`}
          fill
          sizes={compact ? '(max-width: 640px) 115px, 130px' : '(max-width: 768px) 170px, 210px'}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[#f8f5ec] p-4 text-center">
          <span className="font-serif text-lg font-bold text-[#12372A]">{code}</span>
          <span className="mt-1 font-serif text-xs font-bold leading-tight text-[#12372A]">
            {name}
          </span>
          <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C9A24A]">
            Packaging image coming soon
          </span>
        </div>
      )}
    </div>
  );
}
