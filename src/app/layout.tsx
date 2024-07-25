import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Saxophonist",
  description: "Саксофонист Эмир-Султан Хайдаров",
  keywords:
    "саксофонист, саксофон, саксофонист-альтист, альтист, виртуозный саксофонист, астана, нурсултан, нур-султан, эмир, эмир-султан, хайдаров, эмир-султан хайдаров",
};

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
