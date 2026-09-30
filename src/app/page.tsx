const PERFIL = {
  nombre: "Guillermo Cardozo Cruz",
  rol: "Periodista deportivo y comentarista",
  enfoque: "Fútbol desde el lado positivo",
  email: "guillermocardosocruz2000@gmail.com",
  whatsapp: "573185158367",
  instagram: "https://www.instagram.com/guillercardoso/",
  youtube: "https://www.youtube.com/@guillercardoso",
};

const WA_LINK = `https://wa.me/${PERFIL.whatsapp}?text=${encodeURIComponent(
  "Hola Guillermo, vi tu portafolio y quiero escribirte."
)}`;

const PILARES = [
  {
    tag: "01",
    titulo: "Historias que suman",
    desc: "Relatos de superación, formación y comunidad dentro del fútbol, más allá del marcador.",
  },
  {
    tag: "02",
    titulo: "Análisis sin ruido",
    desc: "Lectura táctica y de rendimiento, con datos, sin polémica gratuita.",
  },
  {
    tag: "03",
    titulo: "Fútbol de base y regional",
    desc: "Visibilidad para escuelas, ligas locales y talento que normalmente no sale en los grandes medios.",
  },
];

const TRABAJOS = [
  {
    titulo: "James vs. Teófilo",
    formato: "Video",
    desc: "Previa de un partido importante: analizo el nivel de James Rodríguez y Teófilo Gutiérrez, dos grandes cracks del fútbol colombiano.",
    enlace: "https://youtu.be/hlPWjvKL_8I",
  },
  {
    titulo: "Por qué Argentina perdió la final del Mundial 2026 (análisis completo)",
    formato: "Video",
    desc: "España venció 1-0 a Argentina con gol de Ferran Torres en el alargue. Analizo la jugada clave, la expulsión que cambió el partido y si se cierra el ciclo de Messi y Scaloni.",
    enlace: "https://youtu.be/0IJ8SjF4NE8",
  },
  {
    titulo: "Fecha 12 · Liga BetPlay Dimayor",
    formato: "Video",
    desc: "Repaso de los resultados de la fecha (Nacional 1-1 Millonarios, Junior 2-0 Medellín, entre otros), cómo quedó la tabla y mi predicción para la fecha 13.",
    enlace: "https://youtu.be/JfEUVrJP4LQ",
  },
];

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-sm bg-green px-7 py-3.5 text-base font-bold tracking-wide text-white transition-colors hover:bg-ink ${className}`}
    >
      Escríbeme por WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* NAV */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b-[3px] border-green bg-cream/95 px-6 py-4 backdrop-blur sm:px-12">
        <a href="#inicio" className="font-display text-lg tracking-wide">
          G. CARDOZO
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          <a href="#enfoque">Enfoque</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden px-6 py-24 sm:px-12 sm:py-36"
        style={{
          background:
            "radial-gradient(ellipse at 75% 15%, #2f8a5570 0%, transparent 60%), linear-gradient(180deg, #123a22 0%, #0e2417 100%)",
        }}
      >
        <div className="relative max-w-2xl">
          <div className="mb-5 text-sm font-bold uppercase tracking-[3px] text-lime">
            {PERFIL.rol}
          </div>
          <h1 className="font-display text-5xl leading-[0.98] text-white sm:text-7xl">
            {PERFIL.nombre}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/90">
            {PERFIL.enfoque}: historias de esfuerzo, análisis claro y contenido para
            redes que muestra lo mejor del deporte.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ContactButton />
            <a
              href="#trabajos"
              className="border-b-2 border-lime pb-1 text-sm font-bold text-white"
            >
              Ver trabajos →
            </a>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section id="enfoque" className="bg-cream px-6 py-24 sm:px-12">
        <div className="mb-14 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-green">
            Enfoque
          </div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Tres pilares de mi trabajo
          </h2>
        </div>
        <div className="grid gap-px bg-ink/10 sm:grid-cols-3">
          {PILARES.map((p) => (
            <div key={p.tag} className="border-t-4 border-green bg-paper p-8">
              <div className="mb-3 font-display text-3xl text-green">{p.tag}</div>
              <h3 className="mb-3 text-lg font-bold">{p.titulo}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRABAJOS */}
      <section id="trabajos" className="px-6 py-24 sm:px-12">
        <div className="mb-14 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-green">
            Portafolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl">Trabajos destacados</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {TRABAJOS.map((t, i) => (
            <a
              key={i}
              href={t.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ink/10 transition-opacity hover:opacity-90"
            >
              <div className="flex aspect-video items-center justify-center bg-cream">
                <span className="text-xs text-ink/40">[MINIATURA]</span>
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-green">
                  {t.formato}
                </div>
                <h3 className="mb-2 text-base font-bold">{t.titulo}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{t.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="grid gap-12 bg-ink px-6 py-24 text-white sm:px-12 lg:grid-cols-2 lg:items-center">
        <div className="flex aspect-[4/3] items-center justify-center border border-white/15 bg-white/5">
          <span className="text-sm text-white/40">[FOTO DE GUILLERMO]</span>
        </div>
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-lime">
            Sobre mí
          </div>
          <h2 className="font-display mb-6 text-3xl sm:text-4xl">
            Contar el fútbol desde lo que suma
          </h2>
          <p className="max-w-lg leading-relaxed text-white/80">
            El fútbol une a las personas. Hoy hay mucho odio, tanto en el fútbol como
            en la vida, y yo prefiero hablar de lo bueno: cómo este deporte cambia
            vidas, da empleo, genera alegrías y une a la sociedad. Ese es el lugar
            desde el que hago periodismo y comento fútbol.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <footer
        id="contacto"
        className="flex flex-wrap justify-between gap-8 border-t-4 border-green bg-cream px-6 py-14 sm:px-12"
      >
        <div>
          <div className="font-display text-lg">{PERFIL.nombre}</div>
          <div className="mt-1 text-sm text-ink/60">{PERFIL.rol}</div>
        </div>
        <div className="text-sm leading-loose text-ink/70">
          {PERFIL.email}
          <br />
          <a href={PERFIL.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Instagram
          </a>
          {" · "}
          <a href={PERFIL.youtube} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            YouTube
          </a>
        </div>
        <ContactButton />
      </footer>
    </div>
  );
}
