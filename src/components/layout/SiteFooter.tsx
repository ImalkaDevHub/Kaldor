"use client";

import { Footer } from "@/components/ui/footer";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

// The Footer component requires an Icon for each link. Since the design doesn't use icons for all columns, we pass a dummy icon.
const EmptyIcon = () => null;

export default function SiteFooter() {
  return (
    <Footer
      className="bg-[#0A0A0A] border-t border-border-subtle/30"
      brand={{
        name: "Kaldor",
        description: "Engineering the next generation of web experiences. We build high-performance digital products for forward-thinking companies.",
      }}
      socialLinks={[
        { name: "Twitter", href: "#", Icon: FaTwitter },
        { name: "Facebook", href: "#", Icon: FaFacebook },
        { name: "LinkedIn", href: "#", Icon: FaLinkedin },
        { name: "Github", href: "#", Icon: FaGithub }
      ]}
      columns={[
        {
          title: "SERVICES",
          links: [
            { name: "E-Commerce", Icon: EmptyIcon, href: "#" },
            { name: "SaaS", Icon: EmptyIcon, href: "#" },
            { name: "Web Apps", Icon: EmptyIcon, href: "#" },
            { name: "Mobile", Icon: EmptyIcon, href: "#" },
            { name: "Cloud", Icon: EmptyIcon, href: "#" },
            { name: "UI/UX", Icon: EmptyIcon, href: "#" }
          ]
        },
        {
          title: "COMPANY",
          links: [
            { name: "About", Icon: EmptyIcon, href: "#about" },
            { name: "Process", Icon: EmptyIcon, href: "#process" },
            { name: "Work", Icon: EmptyIcon, href: "#work" },
            { name: "Careers", Icon: EmptyIcon, href: "#" }
          ]
        },
        {
          title: "CONNECT",
          links: [
            { name: "Twitter", Icon: EmptyIcon, href: "#" },
            { name: "Facebook", Icon: EmptyIcon, href: "#" },
            { name: "LinkedIn", Icon: EmptyIcon, href: "#" },
            { name: "Github", Icon: EmptyIcon, href: "#" }
          ]
        }
      ]}
      copyright="© 2026 Kaldor. Built for the modern web."
    />
  );
}
