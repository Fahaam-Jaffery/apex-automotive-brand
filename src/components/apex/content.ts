export const trims = {
  gt: {
    id: "gt",
    name: "Ion GT",
    tag: "Distance",
    blurb:
      "A fuel cell for the long quiet miles, and a battery for the moment the light changes.",
    zeroToSixty: 4.2,
    horsepower: 340,
    topSpeed: 142,
    range: 480,
    price: 64000,
  },
  x: {
    id: "x",
    name: "Ion X",
    tag: "Surge",
    blurb:
      "The same hydrogen architecture, with a second drive unit. Range stays. Hesitation does not.",
    zeroToSixty: 2.9,
    horsepower: 612,
    topSpeed: 168,
    range: 410,
    price: 82000,
  },
} as const;

export type TrimId = keyof typeof trims;

export const paints = [
  {
    id: "graphite",
    name: "Plasma Graphite",
    src: "/apex/graphite.jpg",
    swatch: "swatch-graphite",
  },
  {
    id: "manganese",
    name: "Manganese",
    src: "/apex/manganese.jpg",
    swatch: "swatch-manganese",
  },
  {
    id: "silver",
    name: "Ion Silver",
    src: "/apex/silver.jpg",
    swatch: "swatch-silver",
  },
] as const;

export type PaintId = (typeof paints)[number]["id"];

export const gallery = [
  {
    src: "/apex/graphite.jpg",
    title: "Plasma Graphite",
    note: "Ion · dusk plaza",
    alt: "Apex Ion crossover in satin graphite on wet stone at dusk",
  },
  {
    src: "/apex/manganese.jpg",
    title: "Manganese",
    note: "Ion · distance finish",
    alt: "Apex Ion crossover in matte olive manganese paint at twilight",
  },
  {
    src: "/apex/silver.jpg",
    title: "Ion Silver",
    note: "Ion · night studio",
    alt: "Apex Ion crossover in silver under violet and blue studio light",
  },
  {
    src: "/apex/motion.jpg",
    title: "In motion",
    note: "Ion · city pace",
    alt: "Side view of the Apex Ion moving through a night city",
  },
  {
    src: "/apex/rear.jpg",
    title: "Light blade",
    note: "Ion · one line",
    alt: "Rear of the Apex Ion with a full-width red light blade",
  },
  {
    src: "/apex/cockpit.jpg",
    title: "Horizon glass",
    note: "Ion · cockpit",
    alt: "Apex Ion cockpit with a wide glass display and pearl seats",
  },
  {
    src: "/apex/cabin.jpg",
    title: "Mineral cabin",
    note: "Grove · daylight",
    alt: "Apex Grove cabin in pale sage with woven textile seats and open doors",
  },
  {
    src: "/apex/wheel.jpg",
    title: "Copper barrel",
    note: "Ion · twenty-one inches",
    alt: "Close-up of a matte black wheel with a copper inner barrel",
  },
  {
    src: "/apex/cell.jpg",
    title: "Hydrogen door",
    note: "Water is the exhaust",
    alt: "Open hydrogen filler with a sage ring on graphite paint",
  },
] as const;

export const engineering = [
  {
    index: "01",
    title: "Lattice",
    body: "A bonded aluminum spine with natural-fiber panels. Stiff where the cell sits. Quiet where you sit.",
    figure: "−186 kg",
    caption: "versus the steel shell it replaces",
  },
  {
    index: "02",
    title: "Active air",
    body: "A roof blade and underbody vanes stay shut in town and wake on the highway. Drag is a setting.",
    figure: "0.23 Cd",
    caption: "illustrated, blade open",
  },
  {
    index: "03",
    title: "Dual energy",
    body: "A 120 kW fuel cell for the miles. A battery for the launch. Ion X adds a second drive unit.",
    figure: "0 g/km",
    caption: "carbon dioxide at the tailpipe",
  },
] as const;

export const DEPOSIT_MIN = 500;
export const DEPOSIT_MAX = 5000;
export const DEPOSIT_STEP = 500;

export type Reservation = {
  name: string;
  email: string;
  city: string;
  trim: TrimId;
  paint: PaintId;
  deposit: number;
  code: string;
};

export const RESERVE_KEY = "apex-ion-hold";
