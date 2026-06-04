import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to build your next big thing? Reach out to Kaldor Agency for a free consultation. We typically respond within 2 hours.",
  openGraph: {
    title: "Contact Us | Kaldor Agency",
    description: "Ready to build your next big thing? Reach out to Kaldor Agency for a free consultation.",
    url: "https://kaldoragency.com/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
