import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Dakshin | Authentic South Indian Cuisine",
  description: "Experience the vibrant and authentic taste of South India at Surya Dakshin. Tradition on a plate, memories in every bite.",
  keywords: "South Indian food, Dosa, Idli, Filter Coffee, authentic cuisine, Surya Dakshin",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
