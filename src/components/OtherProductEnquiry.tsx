import Image from "next/image";
import Link from "next/link";

const otherProducts = [
  {
    id: "cardamom",
    title: "Cardamom",
    description: "High-grade green cardamom, premium export quality.",
    image: "/generated/cardamom.png",
  },
  {
    id: "black-pepper",
    title: "Black Pepper",
    description: "Premium export-quality whole black pepper.",
    image: "/generated/black_pepper.png",
  },
  {
    id: "coconut",
    title: "Coconut",
    description: "Fresh raw coconut sourced for bulk export.",
    image: "/generated/coconut.png",
  },
  {
    id: "onion",
    title: "Onion",
    description: "Fresh red onion sourced for bulk export.",
    image: "/generated/onion.png",
  },
];

export default function OtherProductEnquiry() {
  return (
    <section className="bg-[#f5f1e8] border-t border-[#e0dccf] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[#c9a227] text-xs font-semibold tracking-[0.25em] uppercase block">
          Beyond Rice
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a3d2e] mt-1 mb-2">
          Any Other Product Enquiry?
        </h2>
        <p className="text-sm text-[#5c5648] mb-8 max-w-md mx-auto">
          Please send us a message — we also source and export the
          following products on request.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {otherProducts.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-white text-left shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative w-full h-32 sm:h-36">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 text-center">
                <h3 className="font-serif text-sm font-bold text-[#1a3d2e]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c5648] mt-1 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#1a3d2e] hover:underline"
                >
                  <span>Send Enquiry</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
