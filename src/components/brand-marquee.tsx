import Image from "next/image";
import { FadeIn } from "./fade-in";

const brands = [
  { src: "/images/binance.10747.svg", name: "Binance" },
  { src: "/images/cme_group.10747.svg", name: "CME Group" },
  { src: "/images/cboe.10747.svg", name: "CBOE" },
  { src: "/images/openai.10747.svg", name: "OpenAI" },
  { src: "/images/traderspost.10747.svg", name: "TradersPost" },
  { src: "/images/wundertrading.10747.svg", name: "WunderTrading" },
  { src: "/images/barchart.10747.svg", name: "Barchart" },
];

function BrandRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {brands.map((b) => (
        <span
          key={b.name}
          className="mx-10 flex h-6 w-28 shrink-0 items-center justify-center"
        >
          <Image
            src={b.src}
            alt={ariaHidden ? "" : b.name}
            width={112}
            height={24}
            className="max-h-6 w-auto object-contain opacity-90 brightness-0 invert"
          />
        </span>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="border-y border-white/[0.06] py-10">
      <FadeIn>
        <div className="mx-auto max-w-[1240px] space-y-6 px-6">
          <div className="marquee-mask pointer-events-none relative select-none overflow-hidden">
            <div className="flex w-max animate-marquee motion-reduce:animate-none">
              <BrandRow />
              <BrandRow ariaHidden />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
