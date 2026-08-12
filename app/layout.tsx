import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://escuela-cizalla-madrid.vercel.app"),
  title: "Escuela Cizalla — Encuadernación artesanal en Madrid",
  description: "Cursos, monográficos y encargos de encuadernación artesanal en Madrid. Escuela Cizalla, desde 1992.",
  openGraph: {
    title: "Escuela Cizalla — El otro placer que dan los libros",
    description: "Aprende encuadernación artesanal en un taller equipado y con grupos de hasta 8 personas.",
    images: ["/images/hero.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
