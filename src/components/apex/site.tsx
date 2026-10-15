import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent as KeyEvt } from "react";
import { ArrowLeft, ArrowRight, Menu, Minus, Plus, X } from "lucide-react";
import {
  DEPOSIT_MAX,
  DEPOSIT_MIN,
  DEPOSIT_STEP,
  RESERVE_KEY,
  engineering,
  gallery,
  paints,
  trims,
  type PaintId,
  type Reservation,
  type TrimId,
} from "./content";
import {
  Mark,
  Reveal,
  cn,
  money,
  usePrefersReducedMotion,
  useScrolled,
  useStickyProgress,
  useTween,
} from "./ui";

const NAV = [
  { href: "#configure", label: "Configure" },
  { href: "#engineering", label: "Engineering" },
  { href: "#cabin", label: "Cabins" },
  { href: "#lookbook", label: "Lookbook" },
];

export function Site() {
  const [trim, setTrim] = useState<TrimId>("x");
  const [paint, setPaint] = useState<PaintId>("graphite");
  const [open, setOpen] = useState(false);
  const reserve = () => setOpen(true);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Nav onReserve={reserve} />
      <main id="content">
        <Hero onReserve={reserve} />
        <Promise />
        <Configure
          trim={trim}
          paint={paint}
          onTrim={setTrim}
          onPaint={setPaint}
          onReserve={reserve}
        />
        <Engineering />
        <Cabins />
        <Lookbook />
        <Close onReserve={reserve} />
      </main>
      <Footer />
      <ReserveDrawer
        open={open}
        onClose={() => setOpen(false)}
        trim={trim}
        paint={paint}
        onTrim={setTrim}
        onPaint={setPaint}
      />
    </>
  );
}

function Nav({ onReserve }: { onReserve: () => void }) {
  const scrolled = useScrolled();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        scrolled || menu ? "bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 text-mist" onClick={() => setMenu(false)}>
          <Mark className="h-7 w-7" />
          <span className="display text-xl tracking-normal">Apex</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-mist/80 hover:text-mist">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="press btn-copper hit rounded-full px-4 text-sm font-semibold"
            onClick={() => {
              setMenu(false);
              onReserve();
            }}
          >
            Reserve
          </button>
          <button
            type="button"
            className="press hit grid place-items-center text-mist lg:hidden"
            aria-expanded={menu}
            aria-controls="apex-menu"
            onClick={() => setMenu((value) => !value)}
          >
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {menu ? (
        <nav id="apex-menu" className="border-t border-line px-5 py-6 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="display title-md"
                  onClick={() => setMenu(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Hero({ onReserve }: { onReserve: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const progress = useStickyProgress(ref);
  const reduced = usePrefersReducedMotion();
  const fade = reduced ? 1 : Math.max(0, 1 - progress * 1.55);
  const second = reduced ? 0 : Math.max(0, Math.min(1, (progress - 0.34) * 2.4)) * Math.max(0, 1 - (progress - 0.78) * 4);
  const scale = reduced ? 1 : 1.1 - progress * 0.1;

  return (
    <section id="top" ref={ref} className="scrub-hero section">
      <div className="sticky-frame">
        <img
          src="/apex/graphite.jpg"
          alt="Apex Ion in Plasma Graphite on a wet plaza at dusk"
          width={1792}
          height={1008}
          className="hero-photo"
          style={{ transform: `scale(${scale})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/75 via-ink/10 to-ink/80" />
        <div
          className={cn(
            "relative flex h-full flex-col justify-between px-5 pb-10 pt-24",
            fade < 0.15 && "pointer-events-none",
          )}
          style={{ opacity: fade }}
          inert={fade < 0.2 ? true : undefined}
        >
          <div className="mx-auto w-full max-w-6xl">
            <p className="eyebrow">Apex Ion · Hydrogen electric</p>
            <h1 className="display hero-title mt-4 max-w-4xl">
              Defying
              <br />
              velocity.
            </h1>
          </div>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-mist/90">
              A crossover that leaves water, not smoke. Built for cities that still want the pull.
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="press btn-copper hit rounded-full px-5 text-sm font-semibold" onClick={onReserve}>
                Reserve the Ion
              </button>
              <a href="#configure" className="press btn-ghost hit inline-flex items-center rounded-full px-5 text-sm font-semibold">
                Configure
              </a>
            </div>
          </div>
        </div>
        <p
          className="display title-lg pointer-events-none absolute inset-0 grid place-items-center px-6 text-center"
          style={{ opacity: second }}
          aria-hidden={second < 0.4}
        >
          Hydrogen in.
          <br />
          Water out.
        </p>
      </div>
    </section>
  );
}

function Promise() {
  const facts = [
    { value: "0 g/km", label: "Tailpipe CO₂" },
    { value: "480 mi", label: "Ion GT range" },
    { value: "2.9 s", label: "Ion X, 0–60" },
    { value: "H₂O", label: "What it exhales" },
  ];
  return (
    <section className="border-t border-line px-5 py-20" aria-label="The promise">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 className="display title-lg">
            The Ion burns nothing. A compact cell turns hydrogen into miles. A battery takes the launch.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={120}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8">
            {facts.map((fact) => (
              <li key={fact.label}>
                <p className="display text-3xl text-mist">{fact.value}</p>
                <p className="mt-1 text-sm text-mute">{fact.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-mute">Illustrated figures for the Ion concept.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Configure({
  trim,
  paint,
  onTrim,
  onPaint,
  onReserve,
}: {
  trim: TrimId;
  paint: PaintId;
  onTrim: (id: TrimId) => void;
  onPaint: (id: PaintId) => void;
  onReserve: () => void;
}) {
  const reduced = usePrefersReducedMotion();
  const spec = trims[trim];
  const finish = paints.find((item) => item.id === paint) ?? paints[0];
  const zero = useTween(spec.zeroToSixty, reduced);
  const hp = useTween(spec.horsepower, reduced);
  const top = useTween(spec.topSpeed, reduced);
  const range = useTween(spec.range, reduced);
  const tablist = useId();

  const onTabKey = (event: KeyEvt<HTMLButtonElement>, id: TrimId) => {
    const order: TrimId[] = ["gt", "x"];
    const index = order.indexOf(id);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const next = event.key === "ArrowRight" ? order[(index + 1) % order.length] : order[(index + order.length - 1) % order.length];
      if (next) onTrim(next);
    }
  };

  const stats = [
    { label: "0–60 mph", value: zero.toFixed(1), unit: "sec" },
    { label: "Horsepower", value: Math.round(hp).toString(), unit: "hp" },
    { label: "Top speed", value: Math.round(top).toString(), unit: "mph" },
    { label: "Est. range", value: Math.round(range).toString(), unit: "mi" },
  ];

  return (
    <section id="configure" className="section border-t border-line bg-panel px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-stretch">
        <div className="frame config-photo overflow-hidden rounded-2xl lg:col-span-7">
          {paints.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.id === paint ? `Apex Ion in ${item.name}` : ""}
              width={1792}
              height={1008}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                item.id === paint ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <div className="lg:col-span-5">
          <p className="eyebrow">Configure</p>
          <h2 className="display title-md mt-3">{spec.name}</h2>
          <p className="mt-3 text-mute">{spec.blurb}</p>
          <p className="mt-4 text-sm text-mist">From {money(spec.price)}</p>

          <div className="mt-8" role="tablist" aria-label="Trim" id={tablist}>
            <div className="glass inline-flex rounded-full p-1">
              {(Object.keys(trims) as TrimId[]).map((id) => {
                const item = trims[id];
                const selected = id === trim;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    className={cn(
                      "press hit rounded-full px-4 text-sm font-semibold",
                      selected ? "bg-mist text-ink" : "text-mist",
                    )}
                    onClick={() => onTrim(id)}
                    onKeyDown={(event) => onTabKey(event, id)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          <fieldset className="mt-8">
            <legend className="text-sm text-mute">Finish · {finish.name}</legend>
            <div className="mt-3 flex gap-3" role="radiogroup" aria-label="Finish">
              {paints.map((item) => {
                const selected = item.id === paint;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    aria-label={item.name}
                    className="press hit grid place-items-center"
                    onClick={() => onPaint(item.id)}
                  >
                    <span className={cn("swatch", item.swatch, selected && "swatch-on")} />
                  </button>
                );
              })}
            </div>
          </fieldset>

          <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-6" aria-live="polite">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-mute">{stat.label}</dt>
                <dd className="display nums mt-1 text-4xl">
                  {stat.value}
                  <span className="ml-1 font-sans text-sm font-medium tracking-normal text-mute">{stat.unit}</span>
                </dd>
              </div>
            ))}
          </dl>

          <button type="button" className="press btn-copper mt-8 hit rounded-full px-5 text-sm font-semibold" onClick={onReserve}>
            Reserve this Ion
          </button>
        </div>
      </div>
    </section>
  );
}

function Engineering() {
  return (
    <section id="engineering" className="section px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">Engineering</p>
          <h2 className="display title-lg mt-3 max-w-3xl">The machinery stays out of the way.</h2>
        </Reveal>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/apex/rear.jpg"
              alt="Rear three-quarter of the Apex Ion with its light blade lit"
              width={1792}
              height={1008}
              className="frame w-full object-cover"
            />
          </figure>
          <ol className="divide-y divide-line border-y border-line">
            {engineering.map((item) => (
              <li key={item.index} className="grid gap-3 py-6 sm:grid-cols-12">
                <p className="text-sm text-hydro sm:col-span-2">{item.index}</p>
                <div className="sm:col-span-6">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-mute">{item.body}</p>
                </div>
                <p className="sm:col-span-4 sm:text-right">
                  <span className="display text-2xl">{item.figure}</span>
                  <span className="mt-1 block text-sm text-mute">{item.caption}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
        <figure className="relative mt-8 overflow-hidden rounded-2xl">
          <img
            src="/apex/cell.jpg"
            alt="Hydrogen filler door open on the Ion, sage ring and a single droplet mark"
            width={1728}
            height={1152}
            className="aspect-video w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/70 to-transparent p-6 pt-16 sm:p-8">
            <p className="display title-md max-w-xl">The cell drinks hydrogen. The only exhaust is water.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const CABINS = [
  {
    id: "ion",
    kicker: "Ion cockpit",
    title: "A horizon, not a cluster.",
    body: "Glass runs the width of the dash and stays dark until you ask. Copper stitch is the only warm line. The sky is allowed to be the instrument.",
    src: "/apex/cockpit.jpg",
    alt: "Ion cockpit at twilight, pearl seats with copper stitching and a wide horizon display",
    light: false,
  },
  {
    id: "grove",
    kicker: "Grove cabin",
    title: "Soft, and accounted for.",
    body: "The city car wears a mineral weave and sage fiber. No hide. A flat floor, four honest seats, daylight doing most of the work. Safe on purpose.",
    src: "/apex/cabin.jpg",
    alt: "Apex Grove with both doors open, pale sage body and woven textile seats",
    light: true,
  },
] as const;

function CabinCopy({ chapter }: { chapter: (typeof CABINS)[number] }) {
  return (
    <div className="max-w-xl">
      <p className="eyebrow">{chapter.kicker}</p>
      <h3 className="display title-md mt-3">{chapter.title}</h3>
      <p className="quiet mt-4">{chapter.body}</p>
    </div>
  );
}

function Cabins() {
  const ref = useRef<HTMLElement>(null);
  const progress = useStickyProgress(ref);
  const light = progress >= 0.5;
  const chapter = light ? CABINS[1] : CABINS[0];

  return (
    <section id="cabin" className="section border-t border-line" ref={ref}>
      <div className="stack-only lg:hidden">
        <div className="px-5 py-16">
          <p className="eyebrow">Cabins</p>
          <h2 className="display title-lg mt-3 max-w-xl">
            Two rooms. One rule: nothing wasted, nothing burned.
          </h2>
        </div>
        {CABINS.map((item) => (
          <article key={item.id} className={item.light ? "bg-mist text-ink" : "bg-ink text-mist"}>
            <img src={item.src} alt={item.alt} width={1792} height={1008} className="frame w-full object-cover" />
            <div className="px-5 py-10">
              <p className={cn("eyebrow", item.light && "text-copper")}>{item.kicker}</p>
              <h3 className="display title-md mt-3">{item.title}</h3>
              <p className={cn("mt-4", item.light ? "text-ink-soft" : "text-mute")}>{item.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="scrub-only scrub-cabin hidden lg:block">
        <div className={cn("sticky-frame cabin-stage", light && "is-light")}>
          <div className="flex h-full flex-col justify-between px-14 py-16">
            <div>
              <p className="eyebrow">Cabins</p>
              <h2 className="display title-lg mt-3">Two rooms. One rule.</h2>
            </div>
            <CabinCopy chapter={chapter} />
            <p className="quiet text-sm">
              {light ? "Grove · the daylight city car" : "Ion · the hydrogen crossover"} · scroll
            </p>
          </div>
          <div className="relative h-full">
            {CABINS.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                width={1792}
                height={1008}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  (item.light ? light : !light) ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  const scroller = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const move = (direction: number) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.round(node.clientWidth * 0.8),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <section id="lookbook" className="section border-t border-line py-20">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-5">
        <div>
          <p className="eyebrow">Lookbook</p>
          <h2 className="display title-md mt-3">Angles, then the room you sit in.</h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" className="press btn-ghost hit grid place-items-center rounded-full" onClick={() => move(-1)} aria-label="Previous frames">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" className="press btn-ghost hit grid place-items-center rounded-full" onClick={() => move(1)} aria-label="Next frames">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="look-scroller mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2"
      >
        {gallery.map((item) => (
          <figure key={item.src} className="look-card">
            <img
              src={item.src}
              alt={item.alt}
              width={1792}
              height={1008}
              loading="lazy"
              className="frame w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="font-medium">{item.title}</span>
              <span className="text-sm text-mute">{item.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Close({ onReserve }: { onReserve: () => void }) {
  return (
    <section className="border-t border-line px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">First wave</p>
        <h2 className="display hero-title mt-4 max-w-4xl">Hold an Ion.</h2>
        <p className="mt-6 max-w-lg text-mute">
          A refundable deposit places the GT or the X in your name. Grove follows in the same quiet line.
        </p>
        <button type="button" className="press btn-copper mt-8 hit rounded-full px-6 text-sm font-semibold" onClick={onReserve}>
          Open reservation
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-2">
          <Mark className="h-6 w-6" />
          <p className="display text-lg">Apex</p>
        </div>
        <p className="max-w-md text-sm text-mute">
          Emissionless transport. Hydrogen, engineered. Ion and Grove are design studies — figures are illustrative, holds stay on this device.
        </p>
      </div>
    </footer>
  );
}

function ReserveDrawer({
  open,
  onClose,
  trim,
  paint,
  onTrim,
  onPaint,
}: {
  open: boolean;
  onClose: () => void;
  trim: TrimId;
  paint: PaintId;
  onTrim: (id: TrimId) => void;
  onPaint: (id: PaintId) => void;
}) {
  const titleId = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [deposit, setDeposit] = useState(1000);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Reservation | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RESERVE_KEY);
      if (raw) setSaved(JSON.parse(raw) as Reservation);
    } catch {
      setSaved(null);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    titleRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Add the name the hold should sit under.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email does not look complete.");
      return;
    }
    if (city.trim().length < 2) {
      setError("Add a city for the first wave.");
      return;
    }
    const next: Reservation = {
      name: name.trim(),
      email: email.trim(),
      city: city.trim(),
      trim,
      paint,
      deposit,
      code: `AX-${Date.now().toString(36).toUpperCase().slice(-6)}`,
    };
    localStorage.setItem(RESERVE_KEY, JSON.stringify(next));
    setSaved(next);
    setError("");
  };

  const clearHold = () => {
    localStorage.removeItem(RESERVE_KEY);
    setSaved(null);
  };

  const finish = paints.find((item) => item.id === paint) ?? paints[0];

  return (
    <div className={cn("fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
      <button
        type="button"
        className={cn("absolute inset-0 bg-ink/70 transition-opacity duration-200", open ? "opacity-100" : "opacity-0")}
        aria-label="Close reservation"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-panel shadow-2xl transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id={titleId} ref={titleRef} tabIndex={-1} className="display text-2xl outline-none">
            Reserve
          </h2>
          <button type="button" className="press hit grid place-items-center" onClick={onClose} aria-label="Close">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {saved ? (
            <div>
              <p className="eyebrow">Hold placed</p>
              <p className="display title-md mt-3">You are in the wave.</p>
              <p className="mt-3 text-mute">
                {saved.name}, {trims[saved.trim].name} in {paints.find((item) => item.id === saved.paint)?.name}. {saved.city}.
              </p>
              <p className="display nums mt-6 text-4xl">{money(saved.deposit)}</p>
              <p className="mt-1 text-sm text-mute">Refundable deposit · reference {saved.code}</p>
              <button type="button" className="press btn-ghost mt-8 hit rounded-full px-5 text-sm" onClick={clearHold}>
                Release this hold
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-6">
              <p className="text-sm text-mute">
                A hold is a place in the first illustrated wave. It stays on this device and can be released any time.
              </p>
              <div className="glass flex rounded-full p-1">
                {(Object.keys(trims) as TrimId[]).map((id) => (
                  <button
                    key={id}
                    type="button"
                    className={cn(
                      "press hit flex-1 rounded-full text-sm font-semibold",
                      id === trim ? "bg-mist text-ink" : "text-mist",
                    )}
                    onClick={() => onTrim(id)}
                  >
                    {trims[id].name}
                  </button>
                ))}
              </div>
              <fieldset>
                <legend className="text-sm text-mute">Finish · {finish.name}</legend>
                <div className="mt-3 flex gap-3">
                  {paints.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="press hit grid place-items-center"
                      aria-label={item.name}
                      aria-pressed={item.id === paint}
                      onClick={() => onPaint(item.id)}
                    >
                      <span className={cn("swatch", item.swatch, item.id === paint && "swatch-on")} />
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <p className="text-sm text-mute">Deposit</p>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    className="press btn-ghost hit grid place-items-center rounded-full"
                    aria-label="Decrease deposit"
                    onClick={() => setDeposit((value) => Math.max(DEPOSIT_MIN, value - DEPOSIT_STEP))}
                    disabled={deposit <= DEPOSIT_MIN}
                  >
                    <Minus aria-hidden="true" />
                  </button>
                  <p className="display nums text-4xl">{money(deposit)}</p>
                  <button
                    type="button"
                    className="press btn-ghost hit grid place-items-center rounded-full"
                    aria-label="Increase deposit"
                    onClick={() => setDeposit((value) => Math.min(DEPOSIT_MAX, value + DEPOSIT_STEP))}
                    disabled={deposit >= DEPOSIT_MAX}
                  >
                    <Plus aria-hidden="true" />
                  </button>
                </div>
              </div>
              <label className="block text-sm text-mute">
                Name
                <input className="field" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
              </label>
              <label className="block text-sm text-mute">
                Email
                <input className="field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
              </label>
              <label className="block text-sm text-mute">
                City
                <input className="field" value={city} onChange={(event) => setCity(event.target.value)} autoComplete="address-level2" />
              </label>
              {error ? (
                <p className="text-sm text-copper" role="alert">
                  {error}
                </p>
              ) : null}
              <button type="submit" className="press btn-copper hit rounded-full text-sm font-semibold">
                Place hold · {money(deposit)}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
