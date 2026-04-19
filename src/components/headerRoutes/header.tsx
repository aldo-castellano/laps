import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-brand-header backdrop-brightness-50 relative" style={{ clipPath: "ellipse(138% 53% at 50% 46%)" }}>
        <div className="layout-container flex justify-between items-center text-white py-4">
          <Link href="/" className="block">
             <h1 className="font-[var(--font-righteous)] text-[40px] sm:text-[55px] leading-[1.28] tracking-[4.675px]">LAPS</h1>
            <p className="font-[var(--font-righteous)] text-[10px] leading-[0.4] whitespace-nowrap">LIMPIEZA Y AMBIENTE</p>
          </Link>
          <div className="text-base leading-[1.28] tracking-[2px] flex justify-end gap-4">
            <Link href={"/#contacto"}>Presupuesto</Link>
            <Link href={"/privacidad"}>Privacidad</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
