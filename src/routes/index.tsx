import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroReformas from "@/assets/hero-reformas.jpg";
import imgReformas from "@/assets/serv-reformas.jpg";
import imgClima from "@/assets/serv-climatizacion.jpg";
import imgMecanica from "@/assets/serv-mecanica.jpg";
import imgSoldadura from "@/assets/serv-soldadura.jpg";
import imgElectricidad from "@/assets/serv-electricidad.jpg";
import imgMantenimiento from "@/assets/serv-mantenimiento.jpg";
import imgMudanzas from "@/assets/serv-mudanzas.jpg";
import imgDinos from "@/assets/dinos-telefono.jpg";

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
          "SERVIAYA conecta particulares y empresas con profesionales para reformas integrales, mecánica industrial, soldadura, electricidad, mantenimiento, mudanzas y otros servicios en Osona.",
      },
      { property: "og:title", content: "SERVIAYA | Servicios profesionales en Osona" },
      {
        property: "og:description",
        content:
          "Reformas integrales, mecánica industrial, soldadura, electricidad, mantenimiento y mudanzas en Osona. Un solo contacto, muchas soluciones.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SERVIAYA",
          description:
            "Servicios profesionales en Osona: reformas integrales, mecánica industrial, soldadura, electricidad, mantenimiento y mudanzas.",
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
  { label: "Dinos qué tienes", href: "#dinos" },
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
    title: "Explícanos qué necesitas",
    text: "Por WhatsApp, teléfono o mediante la web. Una foto o un vídeo también puede ayudar.",
  },
  {
    title: "Encontramos al profesional",
    text: "Seleccionamos el perfil que mejor encaja con el trabajo que necesitas.",
  },
  {
    title: "Coordinamos el servicio",
    text: "Te acompañamos durante el proceso para que tengas un único punto de contacto.",
  },
];

function Brand() {
  return (
    <a href="#inicio" className="font-heading text-[1.4rem] font-bold tracking-tight text-primary">
      SERVIAYA
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border scrim-header backdrop-blur-xl">
      <div className="container-brand flex h-[72px] items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-wider text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href="#dinos" className="btn-brand !px-5 !py-2.5">
            Contactar
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground md:hidden"
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
          className="border-t border-border bg-card/95 px-4 py-4 backdrop-blur-xl md:hidden"
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
            <a href="#dinos" onClick={() => setOpen(false)} className="btn-brand mt-2 w-full">
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
    <section id="inicio" className="grid overflow-hidden pt-[72px] lg:grid-cols-2">
      <div className="order-2 flex items-center px-6 py-14 sm:px-8 lg:order-1 lg:min-h-[calc(100vh-72px)] lg:px-16 lg:py-0 xl:px-20">
        <div className="mx-auto w-full max-w-xl">
          <div className="eyebrow animate-rise mb-7">Servicios profesionales · Osona</div>
          <h1 className="display animate-rise-2 mb-7 text-[clamp(2.6rem,6.5vw,4.7rem)]">
            Un solo contacto.
            <br />
            <span className="text-primary">Muchas soluciones.</span>
          </h1>
          <p className="animate-rise-2 mb-9 text-[clamp(1.05rem,1.8vw,1.25rem)] leading-relaxed text-muted-foreground">
            Especialistas en <strong className="font-bold text-foreground">reformas integrales</strong>.
            Coordinamos todos los gremios para que tú no tengas que preocuparte por nada.
          </p>
          <div className="animate-rise-3 flex flex-wrap gap-3">
            <a href="#dinos" className="btn-brand min-h-[52px] px-7 text-base">
              Presupuesto gratuito
            </a>
            <a href="#servicios" className="btn-ghost min-h-[52px] px-7 text-base">
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>

      <div className="order-1 relative min-h-[440px] lg:order-2 lg:min-h-[calc(100vh-72px)]">
        <img
          src={heroReformas}
          width={1024}
          height={1360}
          alt="Salón reformado con luz cálida y acabados de madera"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-x-5 bottom-5 rounded-3xl border border-border bg-card/95 p-6 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-7"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
            Servicio estrella
          </p>
          <h2 className="display mb-2 text-2xl sm:text-3xl">Reformas integrales</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Cocinas, baños y hogares completos. Del primer diseño a la entrega de llaves, nosotros
            coordinamos todo.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-surface py-16 md:py-24">
      <div className="container-brand">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.1rem)]">¿En qué podemos ayudarte?</h2>
          <p className="max-w-[560px] text-muted-foreground">
            Soluciones integrales para particulares e industria. Busca tu servicio y cuéntanoslo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`group overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1 ${
                i === 0 ? "ring-2 ring-primary" : ""
              }`}
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                width={1024}
                height={1024}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-5">
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-sm font-black text-primary">
                    {service.letter}
                  </span>
                  {i === 0 && (
                    <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-primary-foreground">
                      Servicio estrella
                    </span>
                  )}
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dinos() {
  return (
    <section id="dinos" className="scroll-mt-20 bg-foreground py-16 text-background md:py-24">
      <div className="container-brand grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1.5 text-xs font-bold tracking-wide">
            <span className="size-2 rounded-full bg-primary" />
            Fácil desde el primer mensaje
          </p>
          <h2 className="display mb-5 text-[clamp(2.2rem,5vw,3.4rem)]">Dinos qué tienes.</h2>
          <p className="mb-8 text-lg leading-relaxed text-background/85">
            Envíanos una <strong className="font-bold text-primary">imagen</strong>, un{" "}
            <strong className="font-bold text-primary">vídeo</strong> o un{" "}
            <strong className="font-bold text-primary">texto</strong> contándonos qué necesitas y
            estaremos ahí. No hace falta saber de obras: cuéntanoslo como te salga y nosotros nos
            encargamos.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["📷 Imagen", "🎥 Vídeo", "💬 Texto"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-background/20 px-4 py-1.5 text-sm font-semibold text-background/85"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand min-h-[52px] px-7 text-base"
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-ghost min-h-[52px] px-7 text-base !border-background/25 !bg-background/10 !text-background hover:!bg-background/20"
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={imgDinos}
            width={1024}
            height={1024}
            alt="Persona grabando con el móvil una avería en casa para enviarla por WhatsApp"
            className="aspect-square size-full rounded-[2.5rem] object-cover"
            loading="lazy"
          />
          <div
            className="absolute -right-3 -top-4 grid size-28 place-items-center rounded-full bg-primary p-3 text-center text-sm font-extrabold leading-tight text-primary-foreground sm:size-32"
            style={{ boxShadow: "var(--shadow-float)" }}
          >
            Respuesta
            <br />
            rápida
          </div>
        </div>
      </div>
    </section>
  );
}

function Industria() {
  return (
    <section id="industria" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container-brand">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.1rem)]">
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
              <h3 className="display mb-2 text-2xl text-background">Del problema a la solución.</h3>
              <p className="text-background/85">
                Un único contacto para encontrar profesionales y coordinar trabajos.
              </p>
            </div>
          </div>
          <div className="grid gap-3 self-center">
            {INDUSTRY_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
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
      <div className="container-brand">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.1rem)]">Así de fácil.</h2>
          <p className="max-w-[560px] text-muted-foreground">
            Queremos quitarte trabajo, llamadas y quebraderos de cabeza.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <article key={step.title} className="text-center">
              <div
                className="mx-auto mb-5 grid size-16 place-items-center rounded-full border-4 border-primary bg-card font-heading text-xl font-bold text-primary"
                style={{ boxShadow: "var(--shadow-float)" }}
              >
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
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
    <section id="contacto" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container-brand">
        <div
          className="grid gap-6 rounded-[2rem] border border-border bg-card p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          <div>
            <div className="eyebrow mb-4">SERVIAYA · Osona</div>
            <h2 className="display mb-4 text-[clamp(2.2rem,5vw,3.2rem)]">¿Qué necesitas?</h2>
            <p className="mb-6 max-w-[640px] text-muted-foreground">
              Cuéntanos el trabajo y te ayudaremos a encontrar la solución adecuada. No hace falta
              complicarse.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand min-h-[50px]"
              >
                Escríbenos por WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost min-h-[50px]">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="grid content-center gap-3">
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">Respuesta</small>
              <strong className="font-semibold text-foreground">
                Intentamos responder rápido.
              </strong>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">Zona</small>
              <strong className="font-semibold text-foreground">Osona y alrededores.</strong>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <small className="mb-1 block text-xs text-muted-foreground">La idea</small>
              <strong className="font-semibold text-foreground">
                Tú pides. Nosotros nos encargamos.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-brand flex flex-col items-start justify-between gap-3 py-7 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="font-heading text-base font-bold text-primary">SERVIAYA</div>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+34658513114" className="transition-colors hover:text-primary">
            +34 658 513 114
          </a>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary">
            {EMAIL}
          </a>
        </div>
        <div>© 2026 SERVIAYA · Vic, Osona</div>
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
      className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-[100] grid size-[58px] place-items-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:-translate-y-1 hover:scale-[1.04] sm:bottom-[22px] sm:right-[22px] sm:size-[62px]"
      style={{ boxShadow: "var(--shadow-float)" }}
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
        <Dinos />
        <Industria />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default Index;
