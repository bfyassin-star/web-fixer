import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImage from "@/assets/hero-welding.jpg";
import imgReformas from "@/assets/serv-reformas.jpg";
import imgClima from "@/assets/serv-climatizacion.jpg";
import imgMecanica from "@/assets/serv-mecanica.jpg";
import imgSoldadura from "@/assets/serv-soldadura.jpg";
import imgElectricidad from "@/assets/serv-electricidad.jpg";
import imgMantenimiento from "@/assets/serv-mantenimiento.jpg";
import imgMudanzas from "@/assets/serv-mudanzas.jpg";

const WHATSAPP_URL =
  "https://wa.me/34658513114?text=Hola%20SERVIAYA%2C%20necesito%20informaci%C3%B3n%20sobre%20un%20servicio.";
const EMAIL = "hola@serviaya.es";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SERVIAYA | Servicios profesionales en Osona" },
      {
        name: "description",
        content:
          "SERVIAYA conecta particulares y empresas con profesionales para reformas, mecánica industrial, soldadura, electricidad, mantenimiento, mudanzas y otros servicios en Osona.",
      },
      { property: "og:title", content: "SERVIAYA | Servicios profesionales en Osona" },
      {
        property: "og:description",
        content:
          "Reformas, mecánica industrial, soldadura, electricidad, mantenimiento y mudanzas en Osona. Un solo contacto, muchas soluciones.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      {
        scripts: undefined,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SERVIAYA",
          description:
            "Servicios profesionales en Osona: reformas, mecánica industrial, soldadura, electricidad, mantenimiento y mudanzas.",
          email: EMAIL,
          telephone: "+34658513114",
          areaServed: "Osona, Barcelona",
          url: "/",
        }),
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industria", href: "#industria" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
];

const SERVICES = [
  {
    letter: "R",
    title: "Reformas",
    text: "Baños, cocinas, interiores y trabajos de mejora del hogar.",
    image: imgReformas,
  },
  {
    letter: "M",
    title: "Mecánica industrial",
    text: "Mantenimiento, maquinaria, motores, transmisiones y averías.",
    image: imgMecanica,
  },
  {
    letter: "S",
    title: "Soldadura",
    text: "Trabajos de soldadura, reparación y soluciones metálicas.",
    image: imgSoldadura,
  },
  {
    letter: "E",
    title: "Electricidad",
    text: "Instalaciones, reparaciones, pequeñas actuaciones y mantenimiento.",
    image: imgElectricidad,
  },
  {
    letter: "M",
    title: "Mantenimiento",
    text: "Actuaciones preventivas y correctivas para hogares y empresas.",
    image: imgMantenimiento,
  },
  {
    letter: "T",
    title: "Mudanzas",
    text: "Coordinación de mudanzas y ayuda para trasladar lo que necesites.",
    image: imgMudanzas,
  },
];

const MOSAIC = [
  { label: "Reformas", image: imgReformas },
  { label: "Climatización", image: imgClima },
  { label: "Mudanzas", image: imgMudanzas },
  { label: "Mecánica industrial", image: imgMecanica },
];

const INDUSTRY_ITEMS = [
  {
    title: "Averías y mantenimiento",
    text: "Intervenciones mecánicas, eléctricas y de mantenimiento.",
  },
  {
    title: "Trabajos metálicos",
    text: "Soldadura, estructuras y reparaciones según necesidad.",
  },
  {
    title: "Trabajos a medida",
    text: "Buscamos el perfil profesional que mejor encaje con el trabajo.",
  },
  {
    title: "Coordinación",
    text: "Nos encargamos de centralizar la comunicación y facilitar el proceso.",
  },
];

const STEPS = [
  {
    number: "01 · CUÉNTANOS",
    title: "Explícanos qué necesitas",
    text: "Por WhatsApp, teléfono o mediante la web. Una foto o un vídeo también puede ayudar.",
  },
  {
    number: "02 · BUSCAMOS",
    title: "Encontramos al profesional",
    text: "Seleccionamos el perfil que mejor encaja con el trabajo que necesitas.",
  },
  {
    number: "03 · NOS ENCARGAMOS",
    title: "Coordinamos el servicio",
    text: "Te acompañamos durante el proceso para que tengas un único punto de contacto.",
  },
];

function Brand() {
  return (
    <a href="#inicio" className="text-[1.45rem] font-black tracking-tight text-foreground">
      SERVI<span className="text-primary">AYA</span>
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.12-.12.27-.32.4-.49.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01s-.47.07-.72.34c-.25.27-.94.92-.94 2.25s.96 2.61 1.1 2.79c.13.18 1.9 2.9 4.6 4.07.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
      />
      <path
        fill="currentColor"
        d="M16.03 3A13 13 0 0 0 4.81 22.57L3 29l6.59-1.73A13 13 0 1 0 16.03 3zm0 23.67c-2.16 0-4.28-.58-6.14-1.68l-.44-.26-3.91 1.03 1.05-3.81-.29-.47A10.65 10.65 0 1 1 16.03 26.67z"
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 scrim-header backdrop-blur-xl">
      <div className="container-nav mx-auto flex min-h-[72px] items-center justify-between gap-5 px-4 sm:px-6">
        <Brand />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary-glow"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn-brand !px-4 !py-2.5">
            Contactar
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 place-items-center rounded-full border border-border bg-foreground/5 text-foreground md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Navegación principal"
          className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-brand mt-2 w-full"
            >
              Contactar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[min(800px,92vh)] items-center overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="scrim-hero absolute inset-0 -z-10" />
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="eyebrow animate-rise mb-5">Servicios profesionales · Osona</div>
          <h1 className="display animate-rise-2 mb-5 text-[clamp(2.9rem,7vw,5.9rem)] text-foreground">
            Un solo contacto.
            <br />
            <span className="text-primary">Muchas soluciones.</span>
          </h1>
          <p className="animate-rise-2 mb-8 max-w-[700px] text-[clamp(1.05rem,2vw,1.3rem)] text-foreground/85">
            Tú nos cuentas lo que necesitas. Nosotros buscamos al profesional adecuado y nos
            encargamos de coordinarlo.
          </p>
          <div className="animate-rise-3 flex flex-wrap gap-3">
            <a href="#contacto" className="btn-brand min-h-[50px]">
              Cuéntanos qué necesitas
            </a>
            <a href="#servicios" className="btn-ghost min-h-[50px]">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="animate-rise-2 grid grid-cols-2 grid-rows-2 gap-3 max-lg:mx-auto max-lg:max-w-md" aria-label="Ejemplos de trabajos">
          {MOSAIC.map((item) => (
            <div
              key={item.label}
              className="relative min-h-[150px] overflow-hidden rounded-3xl border border-white/12 sm:min-h-[190px]"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <img src={item.image} alt="" aria-hidden="true" className="size-full object-cover" loading="lazy" />
              <div className="scrim-mosaic absolute inset-0" />
              <span className="absolute bottom-3 left-4 text-sm font-extrabold text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-foreground">
            Un equipo para muchas necesidades.
          </h2>
          <p className="max-w-[560px] text-muted-foreground">
            Particulares y empresas pueden contar con SERVIAYA para encontrar y coordinar
            profesionales de confianza.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative isolate flex min-h-[250px] flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="scrim-card absolute inset-0 -z-10" />
              <div className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl border border-white/16 bg-background/70 font-black text-primary backdrop-blur-md">
                {service.letter}
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="max-w-[95%] text-sm text-foreground/80">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industria() {
  return (
    <section id="industria" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-foreground">
            También nos movemos en industria.
          </h2>
          <p className="max-w-[560px] text-muted-foreground">
            Cuando una empresa necesita una solución, reunimos el oficio adecuado para resolverla.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-border lg:min-h-[420px]">
            <img
              src={imgSoldadura}
              alt="Trabajo de soldadura en estructura metálica"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div className="scrim-panel absolute inset-0" />
            <div className="absolute inset-x-7 bottom-6">
              <h3 className="display mb-2 text-2xl text-foreground">Del problema a la solución.</h3>
              <p className="text-foreground/80">
                Un único contacto para encontrar profesionales y coordinar trabajos.
              </p>
            </div>
          </div>
          <div className="grid gap-3 self-center">
            {INDUSTRY_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card/60 p-5">
                <b className="mb-1 block font-bold text-foreground">{item.title}</b>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="como-trabajamos" className="scroll-mt-20 bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-foreground">Así de fácil.</h2>
          <p className="max-w-[560px] text-muted-foreground">
            Queremos quitarte trabajo, llamadas y quebraderos de cabeza.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border-t-[3px] border-t-primary bg-card/40 p-6"
            >
              <div className="text-sm font-black tracking-[0.08em] text-primary">{step.number}</div>
              <h3 className="mb-2 mt-3 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 rounded-[2rem] border border-border bg-foreground/[0.045] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9">
          <div>
            <div className="eyebrow mb-4">SERVIAYA · Osona</div>
            <h2 className="display mb-4 text-[clamp(2.2rem,5vw,3.4rem)] text-foreground">
              ¿Qué necesitas?
            </h2>
            <p className="mb-6 max-w-[640px] text-muted-foreground">
              Cuéntanos el trabajo y te ayudaremos a encontrar la solución adecuada. No hace falta
              complicarse.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-brand min-h-[50px]">
                Escríbenos por WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost min-h-[50px]">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="grid content-center gap-3">
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">Respuesta</small>
              <strong className="font-semibold text-foreground">Intentamos responder rápido.</strong>
            </div>
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">Zona</small>
              <strong className="font-semibold text-foreground">Osona y alrededores.</strong>
            </div>
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">La idea</small>
              <strong className="font-semibold text-foreground">Tú pides. Nosotros nos encargamos.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.145_0.006_240)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-7 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center">
        <div>© 2026 SERVIAYA</div>
        <div>Servicios profesionales · Osona</div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar con SERVIAYA por WhatsApp"
      title="Contactar por WhatsApp"
      className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-[100] grid size-[58px] place-items-center rounded-full text-white transition-transform hover:-translate-y-1 hover:scale-[1.04] sm:right-[22px] sm:bottom-[22px] sm:size-[62px]"
      style={{
        background: "#25D366",
        boxShadow: "var(--shadow-float)",
      }}
    >
      <WhatsAppIcon className="block size-8 sm:size-[34px]" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Industria />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
