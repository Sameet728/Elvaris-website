import Image from "next/image";

export function ElvarisLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center h-full w-auto ${className}`}>
      <Image
        src="/elvaris-logo.png"
        alt="Elvaris Capital"
        width={180}
        height={40}
        className="h-full w-auto object-contain brightness-0 invert" 
        priority
      />
    </div>
  );
}
