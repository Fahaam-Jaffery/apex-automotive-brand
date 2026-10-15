import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Minus, o as ArrowRight, r as Plus, s as ArrowLeft, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bah7ajWB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trims = {
	gt: {
		id: "gt",
		name: "Ion GT",
		tag: "Distance",
		blurb: "A fuel cell for the long quiet miles, and a battery for the moment the light changes.",
		zeroToSixty: 4.2,
		horsepower: 340,
		topSpeed: 142,
		range: 480,
		price: 64e3
	},
	x: {
		id: "x",
		name: "Ion X",
		tag: "Surge",
		blurb: "The same hydrogen architecture, with a second drive unit. Range stays. Hesitation does not.",
		zeroToSixty: 2.9,
		horsepower: 612,
		topSpeed: 168,
		range: 410,
		price: 82e3
	}
};
var paints = [
	{
		id: "graphite",
		name: "Plasma Graphite",
		src: "/apex/graphite.jpg",
		swatch: "swatch-graphite"
	},
	{
		id: "manganese",
		name: "Manganese",
		src: "/apex/manganese.jpg",
		swatch: "swatch-manganese"
	},
	{
		id: "silver",
		name: "Ion Silver",
		src: "/apex/silver.jpg",
		swatch: "swatch-silver"
	}
];
var gallery = [
	{
		src: "/apex/graphite.jpg",
		title: "Plasma Graphite",
		note: "Ion · dusk plaza",
		alt: "Apex Ion crossover in satin graphite on wet stone at dusk"
	},
	{
		src: "/apex/manganese.jpg",
		title: "Manganese",
		note: "Ion · distance finish",
		alt: "Apex Ion crossover in matte olive manganese paint at twilight"
	},
	{
		src: "/apex/silver.jpg",
		title: "Ion Silver",
		note: "Ion · night studio",
		alt: "Apex Ion crossover in silver under violet and blue studio light"
	},
	{
		src: "/apex/motion.jpg",
		title: "In motion",
		note: "Ion · city pace",
		alt: "Side view of the Apex Ion moving through a night city"
	},
	{
		src: "/apex/rear.jpg",
		title: "Light blade",
		note: "Ion · one line",
		alt: "Rear of the Apex Ion with a full-width red light blade"
	},
	{
		src: "/apex/cockpit.jpg",
		title: "Horizon glass",
		note: "Ion · cockpit",
		alt: "Apex Ion cockpit with a wide glass display and pearl seats"
	},
	{
		src: "/apex/cabin.jpg",
		title: "Mineral cabin",
		note: "Grove · daylight",
		alt: "Apex Grove cabin in pale sage with woven textile seats and open doors"
	},
	{
		src: "/apex/wheel.jpg",
		title: "Copper barrel",
		note: "Ion · twenty-one inches",
		alt: "Close-up of a matte black wheel with a copper inner barrel"
	},
	{
		src: "/apex/cell.jpg",
		title: "Hydrogen door",
		note: "Water is the exhaust",
		alt: "Open hydrogen filler with a sage ring on graphite paint"
	}
];
var engineering = [
	{
		index: "01",
		title: "Lattice",
		body: "A bonded aluminum spine with natural-fiber panels. Stiff where the cell sits. Quiet where you sit.",
		figure: "−186 kg",
		caption: "versus the steel shell it replaces"
	},
	{
		index: "02",
		title: "Active air",
		body: "A roof blade and underbody vanes stay shut in town and wake on the highway. Drag is a setting.",
		figure: "0.23 Cd",
		caption: "illustrated, blade open"
	},
	{
		index: "03",
		title: "Dual energy",
		body: "A 120 kW fuel cell for the miles. A battery for the launch. Ion X adds a second drive unit.",
		figure: "0 g/km",
		caption: "carbon dioxide at the tailpipe"
	}
];
var DEPOSIT_MAX = 5e3;
var RESERVE_KEY = "apex-ion-hold";
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(media.matches);
		apply();
		media.addEventListener("change", apply);
		return () => media.removeEventListener("change", apply);
	}, []);
	return reduced;
}
function useStickyProgress(ref) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let frame = 0;
		const measure = () => {
			const rect = el.getBoundingClientRect();
			const total = el.offsetHeight - window.innerHeight;
			const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0));
			const next = total > 0 ? scrolled / total : 0;
			setProgress((prev) => Math.abs(prev - next) < .002 ? prev : next);
		};
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [ref]);
	return progress;
}
function useScrolled(threshold = 8) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);
	return scrolled;
}
function useTween(value, reduced) {
	const [display, setDisplay] = (0, import_react.useState)(value);
	const from = (0, import_react.useRef)(value);
	(0, import_react.useEffect)(() => {
		if (reduced) {
			from.current = value;
			setDisplay(value);
			return;
		}
		const initial = from.current;
		const start = performance.now();
		const duration = 520;
		let frame = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - (1 - t) ** 3;
			setDisplay(initial + (value - initial) * eased);
			if (t < 1) frame = requestAnimationFrame(tick);
			else from.current = value;
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [value, reduced]);
	return display;
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("in");
				observer.disconnect();
			}
		}, { threshold: .22 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7.5 23.5 L16 8.5",
			fill: "none",
			stroke: "var(--color-copper)",
			strokeWidth: "3.4",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 8.5 L24.5 23.5",
			fill: "none",
			stroke: "var(--color-hydro)",
			strokeWidth: "3.4",
			strokeLinecap: "round"
		})]
	});
}
function money(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(value);
}
var NAV = [
	{
		href: "#configure",
		label: "Configure"
	},
	{
		href: "#engineering",
		label: "Engineering"
	},
	{
		href: "#cabin",
		label: "Cabins"
	},
	{
		href: "#lookbook",
		label: "Lookbook"
	}
];
function Site() {
	const [trim, setTrim] = (0, import_react.useState)("x");
	const [paint, setPaint] = (0, import_react.useState)("graphite");
	const [open, setOpen] = (0, import_react.useState)(false);
	const reserve = () => setOpen(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#content",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { onReserve: reserve }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onReserve: reserve }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promise$1, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Configure, {
					trim,
					paint,
					onTrim: setTrim,
					onPaint: setPaint,
					onReserve: reserve
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Engineering, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cabins, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lookbook, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, { onReserve: reserve })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveDrawer, {
			open,
			onClose: () => setOpen(false),
			trim,
			paint,
			onTrim: setTrim,
			onPaint: setPaint
		})
	] });
}
function Nav({ onReserve }) {
	const scrolled = useScrolled();
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!menu) return;
		const onKey = (event) => {
			if (event.key === "Escape") setMenu(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [menu]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-colors duration-200", scrolled || menu ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 text-mist",
					onClick: () => setMenu(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display text-xl tracking-normal",
						children: "Apex"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-mist/80 hover:text-mist",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press btn-copper hit rounded-full px-4 text-sm font-semibold",
						onClick: () => {
							setMenu(false);
							onReserve();
						},
						children: "Reserve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "press hit grid place-items-center text-mist lg:hidden",
						"aria-expanded": menu,
						"aria-controls": "apex-menu",
						onClick: () => setMenu((value) => !value),
						children: [menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: menu ? "Close menu" : "Open menu"
						})]
					})]
				})
			]
		}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "apex-menu",
			className: "border-t border-line px-5 py-6 lg:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "display title-md",
					onClick: () => setMenu(false),
					children: item.label
				}) }, item.href))
			})
		}) : null]
	});
}
function Hero({ onReserve }) {
	const ref = (0, import_react.useRef)(null);
	const progress = useStickyProgress(ref);
	const reduced = usePrefersReducedMotion();
	const fade = reduced ? 1 : Math.max(0, 1 - progress * 1.55);
	const second = reduced ? 0 : Math.max(0, Math.min(1, (progress - .34) * 2.4)) * Math.max(0, 1 - (progress - .78) * 4);
	const scale = reduced ? 1 : 1.1 - progress * .1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		ref,
		className: "scrub-hero section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky-frame",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/apex/graphite.jpg",
					alt: "Apex Ion in Plasma Graphite on a wet plaza at dusk",
					width: 1792,
					height: 1008,
					className: "hero-photo",
					style: { transform: `scale(${scale})` }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-linear-to-b from-ink/75 via-ink/10 to-ink/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("relative flex h-full flex-col justify-between px-5 pb-10 pt-24", fade < .15 && "pointer-events-none"),
					style: { opacity: fade },
					inert: fade < .2 ? true : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto w-full max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Apex Ion · Hydrogen electric"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display hero-title mt-4 max-w-4xl",
							children: [
								"Defying",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"velocity."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-mist/90",
							children: "A crossover that leaves water, not smoke. Built for cities that still want the pull."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "press btn-copper hit rounded-full px-5 text-sm font-semibold",
								onClick: onReserve,
								children: "Reserve the Ion"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#configure",
								className: "press btn-ghost hit inline-flex items-center rounded-full px-5 text-sm font-semibold",
								children: "Configure"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "display title-lg pointer-events-none absolute inset-0 grid place-items-center px-6 text-center",
					style: { opacity: second },
					"aria-hidden": second < .4,
					children: [
						"Hydrogen in.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Water out."
					]
				})
			]
		})
	});
}
function Promise$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line px-5 py-20",
		"aria-label": "The promise",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display title-lg",
					children: "The Ion burns nothing. A compact cell turns hydrogen into miles. A battery takes the launch."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				delay: 120,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-x-6 gap-y-8",
					children: [
						{
							value: "0 g/km",
							label: "Tailpipe CO₂"
						},
						{
							value: "480 mi",
							label: "Ion GT range"
						},
						{
							value: "2.9 s",
							label: "Ion X, 0–60"
						},
						{
							value: "H₂O",
							label: "What it exhales"
						}
					].map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl text-mist",
						children: fact.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mute",
						children: fact.label
					})] }, fact.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-mute",
					children: "Illustrated figures for the Ion concept."
				})]
			})]
		})
	});
}
function Configure({ trim, paint, onTrim, onPaint, onReserve }) {
	const reduced = usePrefersReducedMotion();
	const spec = trims[trim];
	const finish = paints.find((item) => item.id === paint) ?? paints[0];
	const zero = useTween(spec.zeroToSixty, reduced);
	const hp = useTween(spec.horsepower, reduced);
	const top = useTween(spec.topSpeed, reduced);
	const range = useTween(spec.range, reduced);
	const tablist = (0, import_react.useId)();
	const onTabKey = (event, id) => {
		const order = ["gt", "x"];
		const index = order.indexOf(id);
		if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
			event.preventDefault();
			const next = event.key === "ArrowRight" ? order[(index + 1) % order.length] : order[(index + order.length - 1) % order.length];
			if (next) onTrim(next);
		}
	};
	const stats = [
		{
			label: "0–60 mph",
			value: zero.toFixed(1),
			unit: "sec"
		},
		{
			label: "Horsepower",
			value: Math.round(hp).toString(),
			unit: "hp"
		},
		{
			label: "Top speed",
			value: Math.round(top).toString(),
			unit: "mph"
		},
		{
			label: "Est. range",
			value: Math.round(range).toString(),
			unit: "mi"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "configure",
		className: "section border-t border-line bg-panel px-5 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "frame overflow-hidden rounded-2xl lg:col-span-7",
				children: paints.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.id === paint ? `Apex Ion in ${item.name}` : "",
					width: 1792,
					height: 1008,
					className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-500", item.id === paint ? "opacity-100" : "opacity-0")
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Configure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display title-md mt-3",
						children: spec.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mute",
						children: spec.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-mist",
						children: ["From ", money(spec.price)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						role: "tablist",
						"aria-label": "Trim",
						id: tablist,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass inline-flex rounded-full p-1",
							children: Object.keys(trims).map((id) => {
								const item = trims[id];
								const selected = id === trim;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": selected,
									tabIndex: selected ? 0 : -1,
									className: cn("press hit rounded-full px-4 text-sm font-semibold", selected ? "bg-mist text-ink" : "text-mist"),
									onClick: () => onTrim(id),
									onKeyDown: (event) => onTabKey(event, id),
									children: item.name
								}, id);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
							className: "text-sm text-mute",
							children: ["Finish · ", finish.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-3",
							role: "radiogroup",
							"aria-label": "Finish",
							children: paints.map((item) => {
								const selected = item.id === paint;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "radio",
									"aria-checked": selected,
									"aria-label": item.name,
									className: "press hit grid place-items-center",
									onClick: () => onPaint(item.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("swatch", item.swatch, selected && "swatch-on") })
								}, item.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-6",
						"aria-live": "polite",
						children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-mute",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "display nums mt-1 text-4xl",
							children: [stat.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 font-sans text-sm font-medium tracking-normal text-mute",
								children: stat.unit
							})]
						})] }, stat.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press btn-copper mt-8 hit rounded-full px-5 text-sm font-semibold",
						onClick: onReserve,
						children: "Reserve this Ion"
					})
				]
			})]
		})
	});
}
function Engineering() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "engineering",
		className: "section px-5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Engineering"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display title-lg mt-3 max-w-3xl",
					children: "The machinery stays out of the way."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-start gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/apex/rear.jpg",
							alt: "Rear three-quarter of the Apex Ion with its light blade lit",
							width: 1792,
							height: 1008,
							className: "frame w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "divide-y divide-line border-y border-line",
						children: engineering.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-3 py-6 sm:grid-cols-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-hydro sm:col-span-2",
									children: item.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "display text-2xl",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-mute",
										children: item.body
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "sm:col-span-4 sm:text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "display text-2xl",
										children: item.figure
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-mute",
										children: item.caption
									})]
								})
							]
						}, item.index))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative mt-8 overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/apex/cell.jpg",
						alt: "Hydrogen filler door open on the Ion, sage ring and a single droplet mark",
						width: 1728,
						height: 1152,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/70 to-transparent p-6 pt-16 sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display title-md max-w-xl",
							children: "The cell drinks hydrogen. The only exhaust is water."
						})
					})]
				})
			]
		})
	});
}
var CABINS = [{
	id: "ion",
	kicker: "Ion cockpit",
	title: "A horizon, not a cluster.",
	body: "Glass runs the width of the dash and stays dark until you ask. Copper stitch is the only warm line. The sky is allowed to be the instrument.",
	src: "/apex/cockpit.jpg",
	alt: "Ion cockpit at twilight, pearl seats with copper stitching and a wide horizon display",
	light: false
}, {
	id: "grove",
	kicker: "Grove cabin",
	title: "Soft, and accounted for.",
	body: "The city car wears a mineral weave and sage fiber. No hide. A flat floor, four honest seats, daylight doing most of the work. Safe on purpose.",
	src: "/apex/cabin.jpg",
	alt: "Apex Grove with both doors open, pale sage body and woven textile seats",
	light: true
}];
function CabinCopy({ chapter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: chapter.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display title-md mt-3",
				children: chapter.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "quiet mt-4",
				children: chapter.body
			})
		]
	});
}
function Cabins() {
	const ref = (0, import_react.useRef)(null);
	const light = useStickyProgress(ref) >= .5;
	const chapter = light ? CABINS[1] : CABINS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cabin",
		className: "section border-t border-line",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stack-only lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Cabins"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display title-lg mt-3 max-w-xl",
					children: "Two rooms. One rule: nothing wasted, nothing burned."
				})]
			}), CABINS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: item.light ? "bg-mist text-ink" : "bg-ink text-mist",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.alt,
					width: 1792,
					height: 1008,
					className: "frame w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("eyebrow", item.light && "text-copper"),
							children: item.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display title-md mt-3",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-4", item.light ? "text-ink-soft" : "text-mute"),
							children: item.body
						})
					]
				})]
			}, item.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrub-only scrub-cabin hidden lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("sticky-frame cabin-stage", light && "is-light"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col justify-between px-14 py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Cabins"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display title-lg mt-3",
							children: "Two rooms. One rule."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CabinCopy, { chapter }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "quiet text-sm",
							children: [light ? "Grove · the daylight city car" : "Ion · the hydrogen crossover", " · scroll"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full",
					children: CABINS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						width: 1792,
						height: 1008,
						className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-500", (item.light ? light : !light) ? "opacity-100" : "opacity-0")
					}, item.id))
				})]
			})
		})]
	});
}
function Lookbook() {
	const scroller = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	const move = (direction) => {
		const node = scroller.current;
		if (!node) return;
		node.scrollBy({
			left: direction * Math.round(node.clientWidth * .8),
			behavior: reduced ? "auto" : "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "lookbook",
		className: "section border-t border-line py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-end justify-between gap-6 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Lookbook"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display title-md mt-3",
				children: "Angles, then the room you sit in."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden gap-2 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press btn-ghost hit grid place-items-center rounded-full",
					onClick: () => move(-1),
					"aria-label": "Previous frames",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press btn-ghost hit grid place-items-center rounded-full",
					onClick: () => move(1),
					"aria-label": "Next frames",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "look-scroller mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2",
			children: gallery.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "look-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.alt,
					width: 1792,
					height: 1008,
					loading: "lazy",
					className: "frame w-full rounded-2xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-mute",
						children: item.note
					})]
				})]
			}, item.src))
		})]
	});
}
function Close({ onReserve }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line px-5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "First wave"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display hero-title mt-4 max-w-4xl",
					children: "Hold an Ion."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-mute",
					children: "A refundable deposit places the GT or the X in your name. Grove follows in the same quiet line."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press btn-copper mt-8 hit rounded-full px-6 text-sm font-semibold",
					onClick: onReserve,
					children: "Open reservation"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line px-5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-lg",
					children: "Apex"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-mute",
				children: "Emissionless transport. Hydrogen, engineered. Ion and Grove are design studies — figures are illustrative, holds stay on this device."
			})]
		})
	});
}
function ReserveDrawer({ open, onClose, trim, paint, onTrim, onPaint }) {
	const titleId = (0, import_react.useId)();
	const titleRef = (0, import_react.useRef)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [deposit, setDeposit] = (0, import_react.useState)(1e3);
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(RESERVE_KEY);
			if (raw) setSaved(JSON.parse(raw));
		} catch {
			setSaved(null);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		titleRef.current?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener("keydown", onKey);
		};
	}, [open, onClose]);
	const submit = (event) => {
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
		const next = {
			name: name.trim(),
			email: email.trim(),
			city: city.trim(),
			trim,
			paint,
			deposit,
			code: `AX-${Date.now().toString(36).toUpperCase().slice(-6)}`
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none"),
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("absolute inset-0 bg-ink/70 transition-opacity duration-200", open ? "opacity-100" : "opacity-0"),
			"aria-label": "Close reservation",
			tabIndex: open ? 0 : -1,
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": titleId,
			className: cn("absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-panel shadow-2xl transition-transform duration-200", open ? "translate-x-0" : "translate-x-full"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: titleId,
					ref: titleRef,
					tabIndex: -1,
					className: "display text-2xl outline-none",
					children: "Reserve"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press hit grid place-items-center",
					onClick: onClose,
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-5 py-6",
				children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Hold placed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display title-md mt-3",
						children: "You are in the wave."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-mute",
						children: [
							saved.name,
							", ",
							trims[saved.trim].name,
							" in ",
							paints.find((item) => item.id === saved.paint)?.name,
							". ",
							saved.city,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display nums mt-6 text-4xl",
						children: money(saved.deposit)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-mute",
						children: ["Refundable deposit · reference ", saved.code]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press btn-ghost mt-8 hit rounded-full px-5 text-sm",
						onClick: clearHold,
						children: "Release this hold"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-mute",
							children: "A hold is a place in the first illustrated wave. It stays on this device and can be released any time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass flex rounded-full p-1",
							children: Object.keys(trims).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("press hit flex-1 rounded-full text-sm font-semibold", id === trim ? "bg-mist text-ink" : "text-mist"),
								onClick: () => onTrim(id),
								children: trims[id].name
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
							className: "text-sm text-mute",
							children: ["Finish · ", finish.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-3",
							children: paints.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "press hit grid place-items-center",
								"aria-label": item.name,
								"aria-pressed": item.id === paint,
								onClick: () => onPaint(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("swatch", item.swatch, item.id === paint && "swatch-on") })
							}, item.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-mute",
							children: "Deposit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press btn-ghost hit grid place-items-center rounded-full",
									"aria-label": "Decrease deposit",
									onClick: () => setDeposit((value) => Math.max(500, value - 500)),
									disabled: deposit <= 500,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { "aria-hidden": "true" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display nums text-4xl",
									children: money(deposit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press btn-ghost hit grid place-items-center rounded-full",
									"aria-label": "Increase deposit",
									onClick: () => setDeposit((value) => Math.min(DEPOSIT_MAX, value + 500)),
									disabled: deposit >= DEPOSIT_MAX,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "aria-hidden": "true" })
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-mute",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: name,
								onChange: (event) => setName(event.target.value),
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-mute",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								autoComplete: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-mute",
							children: ["City", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: city,
								onChange: (event) => setCity(event.target.value),
								autoComplete: "address-level2"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-copper",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "press btn-copper hit rounded-full text-sm font-semibold",
							children: ["Place hold · ", money(deposit)]
						})
					]
				})
			})]
		})]
	});
}
var SplitComponent = Site;
//#endregion
export { SplitComponent as component };
