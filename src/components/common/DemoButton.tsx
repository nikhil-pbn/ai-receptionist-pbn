import Link from "next/link";

export function DemoButton() {
    return (
        <Link className="rounded-xl w-fit md:rounded-full bg-[#5750E5] px-4 py-2 md:px-7 md:py-3.5 text-white font-semibold transition hover:opacity-90" href="/demo">
            Book a Demo
        </Link>
    )
}