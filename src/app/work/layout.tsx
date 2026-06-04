import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore our portfolio of high-performance digital experiences crafted for startups and enterprises. See how Kaldor transforms ideas into reality.",
  openGraph: {
    title: "Our Work | Kaldor Agency",
    description: "Explore our portfolio of high-performance digital experiences crafted for startups and enterprises.",
    url: "https://kaldoragency.com/work",
  }
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
