import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#161515]">
      <div className="mx-auto max-w-5xl lg:max-w-4xl 2xl:max-w-7xl px-6 py-4 sm:py-16 lg:px-8">
        <div className="flex max-lg:flex-wrap gap-12 items-start justify-between">
          {/* Brand */}
          <div className="space-y-6 max-md:w-full flex flex-col max-md:items-center">
            <Image src="/assets/home/HeaderLogo.png" width={150} height={44} alt="Logo" />

            <p className="md:max-w-sm text-sm max-md:text-center leading-8 text-muted-foreground">
              The AI receptionist built into the practice performance platform
              1,500+ dental practices already trust.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Product
            </h3>

            <ul className="space-y-4">
              {footerLinks.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h3>

            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Legal
            </h3>

            <ul className="space-y-4">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Practice by Numbers. All rights reserved.</p>

          <p>Made for dental practices, built into PbN.</p>
        </div>
      </div>
    </footer>
  );
}