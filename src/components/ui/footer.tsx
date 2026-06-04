"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  Icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, columns, copyright, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-24", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-xl font-semibold">
                {brand.name}
              </a>
              <p className="text-sm text-foreground/60">
                {brand.description}
              </p>

            </div>

            <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
              {columns.map(({ title, links }) => (
                <div key={title} className="last:mt-12 md:last:mt-0">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group"
                        >
                          <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-20 border-t border-border-subtle/50 pt-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-foreground/55">{copyright}</p>
              
              {socialLinks && socialLinks.length > 0 && (
                <div className="flex items-center gap-6">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/55 hover:text-foreground/90 transition-colors"
                    >
                      {link.Icon ? <link.Icon className="w-5 h-5" /> : link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer";
