import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guillermo Cardozo Cruz | Periodismo y comentario deportivo",
  description:
    "Periodista deportivo y comentarista enfocado en lo positivo del fútbol: historias, análisis y contenido para redes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
