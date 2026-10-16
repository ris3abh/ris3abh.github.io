import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** 0→1 as p moves from a to b */
const st = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const show = (el: HTMLElement | null, v: number, dy = 10) => {
  if (!el) return;
  el.style.opacity = String(v);
  el.style.transform = v >= 1 ? "" : `translateY(${(1 - v) * dy}px)`;
};

function clock() {
  const fmt = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false });
  const tick = () => $$("[data-clock]").forEach((e) => (e.textContent = fmt.format(new Date())));
  tick();
  setInterval(tick, 15000);
}

/* handwritten phrase that writes, waits, rubs out */
function rotator() {
  const el = $("[data-rotate]");
  if (!el || reduced) return;
  const words: string[] = JSON.parse(el.dataset.rotate!);
  let i = 0;
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const loop = async () => {
    await wait(2600);
    while (el.textContent) { el.textContent = el.textContent.slice(0, -1); await wait(22); }
    i = (i + 1) % words.length;
    for (let n = 1; n <= words[i].length; n++) { el.textContent = words[i].slice(0, n); await wait(50); }
    loop();
  };
  loop();
}

/* ---------------- loader: my face sketches itself, then flies into the nav ---------------- */
function loader(): Promise<void> {
  const el = $("[data-loader]");
  const done = () => { document.documentElement.classList.add("loaded"); try { sessionStorage.setItem("rs-loaded", "1"); } catch {} };
  if (!el || document.documentElement.classList.contains("loaded")) { done(); return Promise.resolve(); }
  const face = $<SVGSVGElement>("[data-loader-face]", el)!;
  const n = $("[data-loader-n]", el)!, word = $("[data-loader-word]", el)!;
  // the face is drawn via <use>; animate the source symbol's lines so every copy draws in
  const lines = $$<SVGGeometryElement>("#ninja-face .lf", el);
  lines.forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = `${L}`; p.style.strokeDashoffset = `${L}`; });
  const hv = $("[data-hand-v]", el)!, hh = $("[data-hand-h]", el)!, hands = $("[data-hands]", el)!;
  const clones = $$("[data-clone]", el), big = $("[data-bigpuff]", el)!;
  const o = { v: 0 };
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: () => { el.remove(); done(); resolve(); } });
    tl.to(lines, { strokeDashoffset: 0, duration: 0.6, stagger: 0.035, ease: "power2.inOut" })
      .to(o, { v: 100, duration: 2.1, ease: "power1.inOut", onUpdate: () => (n.textContent = String(Math.round(o.v))) }, 0)
      // hands slide in from opposite sides and lock into the cross seal
      .fromTo(hv, { x: -70, y: 40, rotate: -20, opacity: 0 }, { x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.45, ease: "back.out(1.6)" }, 0.45)
      .fromTo(hh, { x: 70, y: 40, rotate: 20, opacity: 0 }, { x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.45, ease: "back.out(1.6)" }, 0.5)
      .to(hands, { x: 3, duration: 0.05, repeat: 5, yoyo: true, ease: "none" }, 0.95)
      .add(() => (word.textContent = "shadow clone jutsu!"), 0.95)
      // poof: smoke bursts, clones pop out around me
      .fromTo($$("i", big), { scale: 0, opacity: 0.9 }, { scale: () => gsap.utils.random(1.6, 2.6), opacity: 0, x: () => gsap.utils.random(-90, 90), y: () => gsap.utils.random(-70, 50), duration: 0.7, ease: "power2.out" }, 1.15)
      .fromTo(clones, { x: 0, y: 0, scale: 0.4, opacity: 0, rotate: 0 }, {
        x: (i, t) => parseFloat(getComputedStyle(t as Element).getPropertyValue("--x")),
        y: (i, t) => parseFloat(getComputedStyle(t as Element).getPropertyValue("--y")),
        rotate: (i, t) => parseFloat(getComputedStyle(t as Element).getPropertyValue("--r")),
        scale: 0.62, opacity: 1, duration: 0.45, stagger: 0.05, ease: "back.out(2)",
      }, 1.2)
      .to(hands, { opacity: 0, y: 30, duration: 0.3 }, 1.4)
      .add(() => (word.textContent = "say hi →"), 1.75)
      // clones poof away
      .add(() => clones.forEach((c) => gsap.fromTo($$("[data-puff] i", c), { scale: 0, opacity: 0.9 }, { scale: () => gsap.utils.random(1.4, 2.2), opacity: 0, x: () => gsap.utils.random(-30, 30), y: () => gsap.utils.random(-30, 20), duration: 0.5, ease: "power2.out" })), 1.95)
      .to(clones, { scale: 0.2, opacity: 0, duration: 0.25 }, 2.0)
      .add(() => {
        const target = $("[data-hface]")!.getBoundingClientRect(), from = face.getBoundingClientRect();
        gsap.to(face, { x: target.left + target.width / 2 - (from.left + from.width / 2), y: target.top + target.height / 2 - (from.top + from.height / 2), scale: target.width / from.width, duration: 0.7, ease: "power3.inOut" });
        gsap.to($(".loader__txt", el), { opacity: 0, y: 10, duration: 0.3 });
        gsap.to(el, { backgroundColor: "rgba(15,18,38,0)", duration: 0.5, delay: 0.3 });
      }, 2.2)
      .to({}, { duration: 0.75 });
  });
}

/* ---------------- nav: the face hops to whatever you hover ---------------- */
function hnav() {
  const nav = $("[data-hnav]");
  if (!nav) return;
  const face = $("[data-hface]", nav)!, stage = $(".hnav__stage", nav)!;
  const links = $$("[data-hkey]", nav);
  const decos = Object.fromEntries($$("[data-hdeco]", nav).map((d) => [d.dataset.hdeco!, d]));
  let current: string | null = null;
  const pos = (key: string | null) => {
    const sb = stage.getBoundingClientRect();
    if (!key) {
      const r = links[0].getBoundingClientRect();
      return { x: r.left - sb.left - 34, y: r.top - sb.top + r.height / 2 - 23, scale: 0.42 };
    }
    const l = links.find((x) => x.dataset.hkey === key)!.getBoundingClientRect();
    const cx = l.left - sb.left + l.width / 2, top = l.top - sb.top;
    const at: Record<string, { dx: number; dy: number; scale: number }> = {
      about: { dx: 0, dy: -64, scale: 1 }, journey: { dx: -6, dy: -70, scale: 0.9 },
      work: { dx: 0, dy: -96, scale: 1.05 }, connect: { dx: -64, dy: -78, scale: 1 },
    };
    const a = at[key];
    return { x: cx - 23 + a.dx, y: top + a.dy, scale: a.scale, cx, top };
  };
  const place = (key: string | null, instant = false) => {
    const p = pos(key);
    gsap.to(face, { x: p.x, y: p.y, scale: p.scale, rotation: key ? gsap.utils.random(-8, 8) : 0, duration: instant ? 0 : 0.55, ease: "back.out(1.8)", overwrite: true });
    Object.entries(decos).forEach(([k, d]) => {
      const parts = $$(".hd", d);
      if (k === key && "cx" in p) {
        gsap.set(d, { x: (p as any).cx, y: (p as any).top });
        gsap.to(parts, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "back.out(2.2)", overwrite: true });
        $$("a", d).forEach((a) => (a.tabIndex = 0));
      } else {
        gsap.to(parts, { opacity: 0, scale: 0, duration: 0.2, overwrite: true });
        $$("a", d).forEach((a) => (a.tabIndex = -1));
      }
    });
    current = key;
  };
  links.forEach((l) => {
    l.addEventListener("pointerenter", () => place(l.dataset.hkey!));
    l.addEventListener("focus", () => place(l.dataset.hkey!));
  });
  nav.addEventListener("pointerleave", () => place(null));
  nav.addEventListener("focusout", (e) => { if (!nav.contains(e.relatedTarget as Node)) place(null); });
  place(null, true);
  addEventListener("resize", () => place(current, true));
  document.fonts?.ready.then(() => place(current, true));
}

/* ---------------- hero: letters, scribble, stickies, agents ---------------- */
function hero() {
  const sec = $(".frame--hero");
  if (!sec) return;
  const name = $("[data-name]", sec)!;
  name.innerHTML = name.textContent!.split("").map((c) => (c === " " ? " " : `<span class="ch">${c}</span>`)).join("");
  const chars = $$(".ch", name);
  chars.forEach((c) => c.addEventListener("pointerenter", () => gsap.fromTo(c, { y: 0, rotate: 0 }, { y: -18, rotate: gsap.utils.random(-14, 14), duration: 0.22, yoyo: true, repeat: 1, ease: "power2.out" })));
  if (reduced) { gsap.set("[data-scribble]", { strokeDashoffset: 0 }); peek(name, chars); return; }
  const tl = gsap.timeline({ paused: true });
  tl.from(chars, { yPercent: 110, rotate: () => gsap.utils.random(-20, 20), opacity: 0, stagger: 0.04, duration: 0.9, ease: "back.out(1.7)" })
    .to("[data-scribble]", { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }, "-=0.3")
    .from("[data-hero-in]", { y: 16, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" }, 0.2)
    .add(() => peek(name, chars), "+=0.2");
  const curA = $("[data-hero-cur=a]"), curO = $("[data-hero-cur=o]");
  if (curA && curO) {
    tl.from([curA, curO], { opacity: 0, duration: 0.4 }, 1.4).add(() => { const f = sec.getBoundingClientRect(); wander(curA, f); wander(curO, f); }, 1.4);
  }
  return tl;
}
/* the ninja peeks over a tall letter of the name; touch that letter or tap him and he hops to another */
function peek(name: HTMLElement, chars: HTMLElement[]) {
  const el = $("[data-peek]");
  if (!el) return;
  const head = $("[data-peek-head]", el)!, hands = $("[data-peek-hands]", el)!, eyes = $("[data-peek-eyes]", el)!, pupils = $("[data-peek-pupils]", el)!;
  const hi = $(".hero__hi");
  const tall = chars.filter((c) => /[RhbSl]/.test(c.textContent!));
  let at: HTMLElement | null = null, busy = false;
  const spots = () => {
    let h: DOMRect | undefined;
    if (hi) { const rg = document.createRange(); rg.selectNodeContents(hi); h = rg.getBoundingClientRect(); }
    return tall.filter((c) => { const r = c.getBoundingClientRect(); return c !== at && !(h && r.right > h.left - 20 && r.left < h.right + 20); });
  };
  const place = (c: HTMLElement) => {
    at = c;
    const w = el.parentElement!.getBoundingClientRect(), r = c.getBoundingClientRect();
    gsap.set(el, { x: r.left + r.width / 2 - w.left - el.offsetWidth / 2, opacity: 1 });
  };
  const up = () => gsap.timeline().to(head, { yPercent: 0, duration: reduced ? 0 : 0.5, ease: "back.out(2)" }).to(hands, { scaleY: 1, duration: reduced ? 0 : 0.15 }, reduced ? 0 : 0.25);
  const hop = () => {
    if (busy) return;
    busy = true;
    gsap.fromTo($$("[data-peek-puff] i", el), { scale: 0, opacity: 0.9, x: 0, y: 0 }, { scale: () => gsap.utils.random(1.3, 2), opacity: 0, x: () => gsap.utils.random(-30, 30), y: () => gsap.utils.random(-30, 10), duration: 0.5, ease: "power2.out" });
    gsap.timeline({ onComplete: () => { busy = false; } })
      .to(hands, { scaleY: 0, duration: 0.1 })
      .to(head, { yPercent: 100, duration: 0.2, ease: "power2.in" }, 0)
      .add(() => { const s = spots(); place(s[Math.floor(Math.random() * s.length)] ?? tall[0]); }, 0.45)
      .add(up, 0.5);
  };
  gsap.set(head, { yPercent: 100 });
  const first = spots();
  place(first[first.length - 1] ?? tall[0]);
  up();
  head.addEventListener("click", hop);
  tall.forEach((c) => c.addEventListener("pointerenter", () => c === at && hop()));
  addEventListener("resize", () => at && place(at));
  // eyes follow the cursor and blink now and then
  addEventListener("pointermove", (e) => {
    const r = head.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height * 0.85);
    const d = Math.hypot(dx, dy) || 1;
    gsap.to(pupils, { x: (dx / d) * 3, y: (dy / d) * 3, duration: 0.25, overwrite: true });
  });
  if (!reduced) {
    const blink = () => gsap.to(eyes, { scaleY: 0.1, duration: 0.07, yoyo: true, repeat: 1, onComplete: () => gsap.delayedCall(gsap.utils.random(2.5, 5), blink) });
    gsap.delayedCall(2, blink);
  }
}
function wander(cur: HTMLElement, f: DOMRect) {
  const go = () =>
    gsap.to(cur, { left: gsap.utils.random(f.width * 0.15, f.width * 0.85), top: gsap.utils.random(f.height * 0.15, f.height * 0.85),
      duration: gsap.utils.random(2.2, 3.6), ease: "sine.inOut", onComplete: () => gsap.delayedCall(gsap.utils.random(0.4, 1.4), go) });
  go();
}

/* ================= project mocks: render(progress) ================= */
type Render = (p: number) => void;

function terminal(root: HTMLElement): Render {
  const lines = $$("[data-t]", root);
  const typed = $("[data-typed]", root)!;
  const full = typed.dataset.typed!;
  const bar = $("[data-bar]", root)!, pct = $("[data-pct]", root)!;
  const rows = $$("[data-row]", root);
  // thresholds per line (0..1)
  const at = [0, 0.04, 0.24, 0.29, 0.34, 0.39, 0.44, 0.62, 0.74, 0.79, 0.84, 0.89, 0.95];
  return (p) => {
    lines.forEach((l, i) => show(l, st(p, at[i] ?? 0.95, (at[i] ?? 0.95) + 0.03), 6));
    typed.textContent = full.slice(0, Math.round(full.length * st(p, 0.06, 0.22)));
    const b = st(p, 0.45, 0.6);
    bar.style.transform = `scaleX(${b})`;
    pct.textContent = `${Math.round(b * 100)}%`;
    rows.forEach((r, i) => show(r, st(p, 0.64 + i * 0.03, 0.67 + i * 0.03), 4));
  };
}

function paper(root: HTMLElement): Render {
  const q = (k: string) => $(`[data-p=${k}]`, root);
  const front = $(".paper__page--front", root)!, back = $(".paper__page--back", root)!;
  const mark = $("[data-mark]", root)!;
  const bars = $$<SVGRectElement>("[data-figbar]", root);
  const stamp = q("stamp")!;
  return (p) => {
    const f = st(p, 0, 0.12);
    front.style.opacity = String(0.2 + 0.8 * f);
    front.style.transform = `translateY(${(1 - f) * 40}px) rotate(${-1.2 * f}deg)`;
    back.style.transform = `rotate(${4 * st(p, 0.05, 0.2)}deg) translateX(${(1 - st(p, 0.05, 0.2)) * -30}px)`;
    show(q("title"), st(p, 0.08, 0.16));
    show(q("auth"), st(p, 0.14, 0.2));
    show(q("abs"), st(p, 0.2, 0.3));
    mark.style.backgroundSize = `${st(p, 0.34, 0.5) * 100}% 100%`;
    show(q("fig"), st(p, 0.48, 0.55));
    bars.forEach((b, i) => (b.style.transform = `scaleY(${st(p, 0.55 + i * 0.06, 0.66 + i * 0.06)})`));
    const s = st(p, 0.76, 0.82);
    stamp.style.opacity = String(s * 0.85);
    stamp.style.transform = `rotate(-12deg) scale(${2.2 - 1.2 * s})`;
    show(q("tags"), st(p, 0.86, 0.94));
  };
}

function sandbox(root: HTMLElement): Render {
  const S = (k: string) => $(`[data-s=${k}]`, root);
  const chat: [string, number][] = [["u1", 0.03], ["a1", 0.1], ["t1", 0.16], ["t2", 0.24], ["a2", 0.36], ["t3", 0.46], ["t4", 0.8], ["a3", 0.88]];
  const boot = S("boot")!, err = S("err")!, site = S("site")!;
  const bits = $$("[data-site]", root);
  const gate = $("[data-gate]", root)!, gateB = $("b", gate)!;
  return (p) => {
    chat.forEach(([k, t]) => show(S(k), st(p, t, t + 0.04), 8));
    boot.style.opacity = p >= 0.17 && p < 0.27 ? "1" : "0";
    err.style.opacity = String(st(p, 0.27, 0.3) * (1 - st(p, 0.53, 0.56)));
    site.style.opacity = p >= 0.55 ? "1" : "0";
    bits.forEach((b, i) => show(b, st(p, 0.56 + i * 0.025, 0.6 + i * 0.025), 14));
    const [txt, cls] = p < 0.27 ? ["waiting", "is-wait"] : p < 0.55 ? ["failing", "is-fail"] : p < 0.8 ? ["checking", "is-wait"] : ["passing", ""];
    gateB.textContent = txt;
    gate.className = `browser__gate ${cls}`;
  };
}

function graph(root: HTMLElement): Render {
  const order = ["prompt", "ideate", "novelty", "plan", "impl", "check", "reflect", "write"];
  const hotAt = [[], [0], [1], [2], [3], [4], [5, 6], [7]];
  const nodes = Object.fromEntries(order.map((k) => [k, $(`[data-node=${k}]`, root)!]));
  const edges = $$<SVGPathElement>("[data-edge]", root);
  const evs = $$("[data-ev]", root);
  return (p) => {
    const step = p < 0.04 ? -1 : Math.min(order.length - 1, Math.floor(st(p, 0.04, 0.9) * order.length));
    const done = p >= 0.92;
    order.forEach((k, i) => {
      const n = nodes[k];
      n.classList.toggle("is-run", i === step && !done);
      n.classList.toggle("is-done", i < step || (done && i <= step));
      n.style.opacity = i <= step || done ? "1" : "0.38";
    });
    const hot = new Set(hotAt.slice(0, step + 1).flat());
    edges.forEach((e, i) => { e.classList.toggle("is-hot", hot.has(i)); e.style.opacity = hot.has(i) ? "1" : "0.35"; });
    evs.forEach((e) => {
      const k = e.dataset.ev!;
      const vis = k === "done" ? done : order.indexOf(k) <= step && order.indexOf(k) >= 0;
      show(e, vis ? 1 : 0, 6);
    });
  };
}

function dashboard(root: HTMLElement): Render {
  const crit = $$("[data-crit]", root);
  const target = crit.find((c) => c.dataset.crit?.startsWith("Judging"))!;
  const stEl = $("[data-st]", target)!;
  const card = $("[data-evcard]", root)!, accept = $("[data-accept]", root)!;
  const cur = $("[data-cur]", root)!;
  const banked = $("[data-banked]", root)!, ring = $<SVGCircleElement>("[data-ring-fg]", root)!;
  const inboxN = $("[data-inbox-count]", root);
  const rel = (el: Element, dx = 0.5, dy = 0.5) => {
    const a = root.getBoundingClientRect(), r = el.getBoundingClientRect();
    return [((r.left - a.left + r.width * dx) / a.width) * 100, ((r.top - a.top + r.height * dy) / a.height) * 100];
  };
  let pts: number[][] = [];
  const measure = () => (pts = [[50, 110], rel(accept, 0.5, 0.6), rel(target, 0.85, 0.6)]);
  measure();
  addEventListener("resize", measure);
  return (p) => {
    crit.forEach((c, i) => show(c, st(p, i * 0.035, 0.05 + i * 0.035), 8));
    show(card, st(p, 0.2, 0.28), 12);
    const m1 = st(p, 0.3, 0.5), m2 = st(p, 0.62, 0.8);
    const [x, y] = m2 > 0 ? [pts[1][0] + (pts[2][0] - pts[1][0]) * m2, pts[1][1] + (pts[2][1] - pts[1][1]) * m2] : [pts[0][0] + (pts[1][0] - pts[0][0]) * m1, pts[0][1] + (pts[1][1] - pts[0][1]) * m1];
    Object.assign(cur.style, { left: `${x}%`, top: `${y}%`, right: "auto", bottom: "auto", opacity: String(st(p, 0.26, 0.3)) });
    const ok = p >= 0.54;
    card.classList.toggle("is-accepted", ok);
    accept.textContent = ok ? "Accepted ✓" : "Accept";
    const flip = p >= 0.8;
    stEl.textContent = flip ? "banked" : "building";
    stEl.className = `st st--${flip ? "banked" : "building"}`;
    target.classList.toggle("is-flip", flip);
    banked.textContent = flip ? "4" : "3";
    ring.style.strokeDashoffset = flip ? "50" : "62.5";
    ring.style.transition = "stroke-dashoffset .6s";
    if (inboxN) inboxN.textContent = ok ? "1" : "2";
  };
}

function warroom(root: HTMLElement): Render {
  const sig = $("[data-sig='1']", root)!, opp = $("[data-opp]", root)!, ok = $("[data-approved]", root)!;
  const modal = $("[data-modal]", root)!, go = $("[data-approve]", root)!, cur = $("[data-cur]", root)!;
  const n = $("[data-approved-n]", root)!, oppN = $("[data-opp-n]", root)!, dim = $("[data-dim]", root)!;
  const fsm = $$("[data-fsm]", root);
  const unc = $$<HTMLElement>(".kc__unc i", root);
  const W = unc.map((u) => u.style.getPropertyValue("--w"));
  const rel = (el: Element) => {
    const a = root.getBoundingClientRect(), r = el.getBoundingClientRect();
    return [((r.left - a.left + r.width * 0.6) / a.width) * 100, ((r.top - a.top + r.height * 0.6) / a.height) * 100];
  };
  return (p) => {
    sig.style.boxShadow = p > 0.12 && p < 0.3 ? "0 0 0 3px rgba(59,87,232,.35)" : "";
    sig.style.opacity = p >= 0.3 ? "0.45" : "1";
    show(opp, st(p, 0.26, 0.34) * (1 - st(p, 0.76, 0.8)), 16);
    unc.forEach((u, i) => u.style.setProperty("--w", `${parseFloat(W[i]) * st(p, 0.32, 0.46)}%`));
    const m = st(p, 0.46, 0.52) * (1 - st(p, 0.72, 0.76));
    modal.style.opacity = String(m);
    dim.style.opacity = String(m);
    oppN.textContent = p >= 0.26 && p < 0.76 ? "1" : "0";
    modal.style.transform = `translate(-50%, -50%) scale(${0.94 + 0.06 * m})`;
    const [gx, gy] = rel(go);
    const c = st(p, 0.5, 0.66);
    Object.assign(cur.style, { left: `${30 + (gx - 30) * c}%`, top: `${95 + (gy - 95) * c}%`, opacity: String(st(p, 0.48, 0.52) * (1 - st(p, 0.86, 0.9))) });
    go.classList.toggle("is-pressed", p >= 0.68);
    show(ok, st(p, 0.76, 0.82), 16);
    n.textContent = p >= 0.76 ? "1" : "0";
    fsm.forEach((f, i) => f.classList.toggle("is-on", p >= 0.8 + i * 0.035 && i < 4));
  };
}

/* a handwritten note beside its mock, with a drawn arrow that lands on the exact thing it talks about.
   data-annot = "selector|side|maxWidth": side is where the note sits relative to the target. */
function aimer(root: HTMLElement, note: HTMLElement, svg: SVGSVGElement | HTMLElement) {
  const [sel, side, maxw] = note.dataset.annot!.split("|");
  const stage = note.parentElement!;
  if (maxw) { note.style.maxWidth = `${maxw}px`; note.classList.add("annot--wrap"); }
  const [line, head] = $$<SVGPathElement>("path", svg as HTMLElement);
  return () => {
    const tgt = $(sel, root);
    if (!tgt) return;
    const s = stage.getBoundingClientRect(), m = root.getBoundingClientRect(), r = tgt.getBoundingClientRect();
    const t = { l: r.left - s.left, r: r.right - s.left, t: r.top - s.top, b: r.bottom - s.top, cx: r.left + r.width / 2 - s.left, cy: r.top + r.height / 2 - s.top };
    const w = note.offsetWidth, h = note.offsetHeight, gap = 64;
    const clampX = (x: number) => Math.max(-40, Math.min(s.width + 40 - w, x));
    let x = 0, y = 0, a: [number, number], b: [number, number], bend: [number, number];
    if (side === "right") { x = t.r + gap; y = t.cy - h - 6; a = [x - 6, y + h * 0.75]; b = [t.r + 6, t.cy]; bend = [0, -18]; }
    else if (side === "left") {
      // aim at the start of the target's last line (a highlight that wraps starts mid-line)
      const rs = tgt.getClientRects(), last = rs[rs.length - 1], ly = last.top + last.height / 2 - s.top;
      x = last.left - s.left - gap - w; y = ly - h - 4; a = [x + w + 2, y + h * 0.7]; b = [last.left - s.left - 6, ly]; bend = [4, -14];
    }
    else if (side === "top") { x = clampX(t.cx - w * 0.35); y = m.top - s.top - h - 34; a = [Math.min(x + w * 0.3, t.cx - 10), y + h + 4]; b = [t.cx, t.t - 6]; bend = [-22, 0]; }
    else { x = clampX(t.cx - w * 0.35); y = m.bottom - s.top + 34; a = [Math.min(x + w * 0.3, t.cx - 10), y - 4]; b = [t.cx, t.b + 6]; bend = [-22, 0]; }
    note.style.left = `${x}px`; note.style.top = `${y}px`;
    const c = [(a[0] + b[0]) / 2 + bend[0], (a[1] + b[1]) / 2 + bend[1]];
    line.setAttribute("d", `M${a[0]} ${a[1]} Q${c[0]} ${c[1]} ${b[0]} ${b[1]}`);
    // arrowhead along the last segment of the curve
    const ang = Math.atan2(b[1] - c[1], b[0] - c[0]), k = 10;
    const p1 = [b[0] - k * Math.cos(ang - 0.5), b[1] - k * Math.sin(ang - 0.5)], p2 = [b[0] - k * Math.cos(ang + 0.5), b[1] - k * Math.sin(ang + 0.5)];
    head.setAttribute("d", `M${p1[0]} ${p1[1]} L${b[0]} ${b[1]} L${p2[0]} ${p2[1]}`);
  };
}

const MOCKS: Record<string, (r: HTMLElement) => Render> = { terminal, paper, sandbox, graph, dashboard, warroom };

function work() {
  $$("[data-work]").forEach((sec) => {
    const root = $("[data-mock]", sec)!;
    const make = MOCKS[root?.dataset.mock ?? ""];
    if (!make) return;
    const render = make(root);
    const prog = $("[data-progress]", sec)!;
    const annot = $("[data-annot]", sec), arrow = $("[data-annot-arrow]", sec);
    const aim = annot && arrow ? aimer(root, annot, arrow) : null;
    const apply = (p: number) => {
      render(p);
      prog.style.transform = `scaleX(${p})`;
      if (annot && arrow) {
        const o = st(p, 0.85, 0.95);
        if (o > 0) aim!();
        annot.style.opacity = arrow.style.opacity = String(o);
        annot.style.translate = `0 ${(1 - o) * 10}px`;
      }
    };
    addEventListener("resize", () => annot && +annot.style.opacity > 0 && aim!());
    if (reduced) return apply(1);
    apply(0);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1001px)", () => {
      ScrollTrigger.create({
        trigger: sec, pin: $("[data-pin]", sec), start: "top top", end: "+=110%", scrub: true, anticipatePin: 1,
        onUpdate: (s) => apply(s.progress),
      });
      return () => apply(1);
    });
    mm.add("(max-width: 1000px)", () => {
      const o = { p: 0 };
      ScrollTrigger.create({ trigger: sec, start: "top 70%", once: true, onEnter: () => gsap.to(o, { p: 1, duration: 5, ease: "none", onUpdate: () => apply(o.p) }) });
    });
    gsap.from($("[data-spec]", sec), { y: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sec, start: "top 80%" } });
  });
}

/* ---------------- lab, about, connect ---------------- */
function rest() {
  if (!reduced) {
    const once = (sel: string, trig: string, vars: gsap.TweenVars) => { if ($(sel) && $(trig)) gsap.from(sel, { ...vars, scrollTrigger: { trigger: trig, start: "top 85%" } }); };
    $$(".lab__grid").forEach((g) => gsap.from($$("[data-lcard]", g), { y: 50, opacity: 0, stagger: 0.05, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: g, start: "top 85%" } }));
    once(".heat i.on", ".heat", { scale: 0, stagger: 0.025, duration: 0.3, ease: "back.out(3)" });
    once("[data-quirk]", ".quirks", { y: -80, rotate: () => gsap.utils.random(-25, 25), opacity: 0, stagger: 0.08, duration: 0.8, ease: "back.out(1.8)" });
    once(".card", ".card", { y: 70, opacity: 0, duration: 1, ease: "power3.out" });
    once("[data-tcard]", ".teaser__grid", { y: 60, opacity: 0, rotate: 2, stagger: 0.07, duration: 0.8, ease: "power3.out" });
  }
  $$("[data-count]").forEach((el) => {
    if (reduced) return;
    const end = Number(el.dataset.count), o = { v: 0 };
    el.textContent = "0";
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.6, ease: "power2.out", onUpdate: () => (el.textContent = String(Math.round(o.v))) }) });
  });
  const box = $("[data-hire]");
  if (box) {
    const cmd = $<HTMLElement>("[data-type]", box)!, out = $<HTMLElement>("[data-out]", box)!;
    const text = cmd.dataset.type!;
    const result = "✓ pre-registered\n✓ reproducible\n✓ ships to real users\n→ offer.send() ready";
    let busy = false;
    const run = async () => {
      if (busy) return; busy = true;
      cmd.textContent = ""; out.textContent = "";
      for (let i = 1; i <= text.length; i++) { cmd.textContent = text.slice(0, i); await new Promise((r) => setTimeout(r, 34)); }
      for (const line of result.split("\n")) { await new Promise((r) => setTimeout(r, 380)); out.textContent += line + "\n"; }
      busy = false;
    };
    if (reduced) { cmd.textContent = text; out.textContent = result; }
    else { ScrollTrigger.create({ trigger: box, start: "top 85%", once: true, onEnter: run }); box.addEventListener("click", run); }
  }
  if (!reduced) $$("[data-float]").forEach((el) => {
    gsap.to(el, { yPercent: parseFloat(el.dataset.float!) * -120, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
  });
}


/* ---------------- journey: route, plane, swinging badges ---------------- */
function journey() {
  const route = $("[data-route]");
  if (!route) return;
  const svg = $<SVGSVGElement>(".route__svg", route)!;
  const bg = $<SVGPathElement>("[data-route-bg]", route)!, fg = $<SVGPathElement>("[data-route-fg]", route)!;
  const plane = $("[data-plane]", route)!;
  let len = 1, progress = 0;

  const build = () => {
    const box = route.getBoundingClientRect();
    const pts = $$("[data-anchor], [data-anchor-end]", route).map((d) => {
      const r = d.getBoundingClientRect();
      const end = d.hasAttribute("data-anchor-end");
      return [r.left - box.left + r.width / 2, end ? r.top - box.top + 4 : r.top - box.top + r.height / 2];
    });
    if (pts.length < 2) return;
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const my = (y1 - y0) * 0.5, off = (i % 2 ? 1 : -1) * Math.min(140, box.width * 0.09);
      d += ` C ${x0 + off} ${y0 + my}, ${x1 + off} ${y1 - my}, ${x1} ${y1}`;
    }
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    bg.setAttribute("d", d);
    fg.setAttribute("d", d);
    len = fg.getTotalLength();
    fg.style.strokeDasharray = `${len}`;
    place(progress);
  };
  const place = (p: number) => {
    progress = p;
    fg.style.strokeDashoffset = `${len * (1 - p)}`;
    const at = fg.getPointAtLength(len * p), ahead = fg.getPointAtLength(Math.min(len, len * p + 2));
    const ang = (Math.atan2(ahead.y - at.y, ahead.x - at.x) * 180) / Math.PI;
    plane.style.transform = `translate(${at.x}px, ${at.y}px) rotate(${ang + 20}deg)`;
  };
  build();
  addEventListener("resize", build);
  document.fonts?.ready.then(build);
  ScrollTrigger.create({ trigger: route, start: "top 65%", end: "bottom 65%", scrub: true, onUpdate: (s) => place(s.progress), onRefresh: build });

  // badges: drop in on their lanyards, then swing with scroll speed; tug them with the pointer
  const badges = $$("[data-badge], [data-htag]", route);
  const swing = badges.map((b) => gsap.quickTo(b, "rotation", { duration: 1.6, ease: "elastic.out(1, 0.25)" }));
  if (!reduced) {
    badges.forEach((b) => gsap.from(b, { y: -220, rotation: gsap.utils.random(-25, 25), duration: 1.6, ease: "elastic.out(1, 0.45)", scrollTrigger: { trigger: b, start: "top 85%" } }));
    ScrollTrigger.create({
      trigger: route, start: "top bottom", end: "bottom top",
      onUpdate: (s) => {
        const v = gsap.utils.clamp(-14, 14, s.getVelocity() / 140);
        swing.forEach((q, i) => q(v * (i % 2 ? -1 : 1)));
        clearTimeout((route as any).__t);
        (route as any).__t = setTimeout(() => swing.forEach((q) => q(0)), 120);
      },
    });
    badges.forEach((b, i) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5;
        swing[i](dx * -16);
        b.style.setProperty("--sx", `${(1 - (e.clientX - r.left) / r.width) * 100}%`);
      });
      b.addEventListener("pointerleave", () => swing[i](0));
    });
    $$("[data-flight]", route).forEach((f) => {
      const ic = $("[data-flight-plane]", f)!;
      gsap.fromTo(ic, { left: "0%" }, { left: "88%", ease: "none", scrollTrigger: { trigger: f, start: "top 85%", end: "bottom 40%", scrub: true } });
    });
    const tk = $("[data-ticket]", route);
    if (tk) gsap.from(tk, { y: 90, rotate: 4, opacity: 0, duration: 1.2, ease: "back.out(1.4)", scrollTrigger: { trigger: tk, start: "top 88%" } });
    $$("[data-notes]", route).forEach((n) => {
      const r = n.closest(".chapter--r");
      gsap.from(n.children, { x: r ? -30 : 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: n, start: "top 85%" } });
    });
  }
}

function reveals() {
  if (reduced) return;
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 92%",
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", overwrite: true }),
  });
}

/* Goku and Luffy peek over the edge of something, like the hero ninja: eyes follow the pointer,
   they blink, talk in a bubble, and move between spots with an entrance of their own */
type Spot = { el: HTMLElement; at: number };
function cameo(el: HTMLElement, host: HTMLElement, spots: () => Spot[]) {
  const head = $("[data-cameo-head]", el)!, hands = $("[data-cameo-hands]", el)!, say = $("[data-cameo-say]", el)!;
  const eyes = $("[data-cameo-eyes]", el)!, pupils = $("[data-cameo-pupils]", el)!;
  let cur: Spot | null = null, hush: gsap.core.Tween | null = null;
  const rectOf = (e: HTMLElement) => {
    if (!/^H\d$/.test(e.tagName)) return e.getBoundingClientRect();
    const rg = document.createRange(); rg.selectNodeContents(e); return rg.getBoundingClientRect();
  };
  const spotXY = (s: Spot) => {
    const h = host.getBoundingClientRect(), r = rectOf(s.el), w = el.offsetWidth;
    const x = gsap.utils.clamp(-w * 0.2, h.width - w * 0.8, r.left + r.width * s.at - h.left - w / 2);
    el.classList.toggle("is-flip", h.left + x + w + 230 > innerWidth);
    // the top edge comes from layout offsets, so a card still sliding in (reveal transform) doesn't skew it
    let top = 0;
    for (let n: HTMLElement | null = s.el; n && n !== host; n = n.offsetParent as HTMLElement | null) top += n.offsetTop;
    return { x, y: top - el.offsetHeight + 2 };
  };
  const place = (s: Spot) => { cur = s; gsap.set(el, { ...spotXY(s), opacity: 1 }); };
  const next = () => { const all = spots().filter((s) => s.el !== cur?.el); return all[Math.floor(Math.random() * all.length)] ?? spots()[0]; };
  const up = () => gsap.timeline().to(head, { yPercent: 0, duration: reduced ? 0 : 0.5, ease: "back.out(2)" }).to(hands, { scaleY: 1, duration: reduced ? 0 : 0.15 }, reduced ? 0 : 0.25);
  const talk = (t: string, hold = 2.6) => {
    say.textContent = t;
    hush?.kill();
    gsap.fromTo(say, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: reduced ? 0 : 0.35, ease: "back.out(3)" });
    hush = gsap.to(say, { opacity: 0, duration: 0.3, delay: hold });
  };
  const puff = () => gsap.fromTo($$("[data-cameo-puff] i", el), { scale: 0, opacity: 0.9, x: 0, y: 0 },
    { scale: () => gsap.utils.random(1.2, 2), opacity: 0, x: () => gsap.utils.random(-40, 40), y: () => gsap.utils.random(-24, 6), duration: 0.6, ease: "power2.out" });
  gsap.set(head, { yPercent: 100 });
  ScrollTrigger.create({ trigger: host, start: "top 75%", once: true, onEnter: () => { place(spots()[0]); up().add(() => talk(say.textContent!), 0.3); } });
  addEventListener("resize", () => cur && gsap.set(el, spotXY(cur)));
  addEventListener("pointermove", (e) => {
    const r = head.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height * 0.7);
    const d = Math.hypot(dx, dy) || 1;
    gsap.to(pupils, { x: (dx / d) * 2.6, y: (dy / d) * 2.6, duration: 0.25, overwrite: true });
  });
  if (!reduced) {
    const blink = () => gsap.to(eyes, { scaleY: 0.1, duration: 0.07, yoyo: true, repeat: 1, onComplete: () => gsap.delayedCall(gsap.utils.random(2.5, 5), blink) });
    gsap.delayedCall(2, blink);
  }
  return { head, hands, say, talk, puff, place, next, spotXY, up };
}

/* Goku: two fingers to the forehead and he Instant-Transmissions to another card. Every fourth
   tap he powers up to Super Saiyan instead, then cools off hungry. */
function goku() {
  const el = $("[data-goku]"), host = $(".frame--about");
  if (!el || !host) return;
  const c = cameo(el, host, () => [
    { el: $(".lcard--heat", host)!, at: 0.78 },
    { el: $(".about__title", host)!, at: 0.86 },
    { el: $(".lcard--dl", host)!, at: 0.5 },
    { el: $(".lcard--badge", host)!, at: 0.5 },
  ]);
  const it = $("[data-goku-it]", el)!, shun = $$("[data-goku-shun] i", el), grip = $("[data-hand-r]", el)!;
  const hop = ["instant transmission!", "over here!", "heh, too slow!", "hey, nice cards!", "you're pretty fast…"];
  let n = 0, busy = false;
  const flash = () => gsap.fromTo(shun, { opacity: 1, scaleY: 0.2, x: (i) => (i - 2.5) * 9 }, { opacity: 0, scaleY: 1.6, duration: 0.35, stagger: 0.02, ease: "power2.out" });
  c.head.addEventListener("click", () => {
    if (busy) return;
    n++;
    if (n % 4 === 0 && !el.classList.contains("is-ssj")) {
      c.talk("HAAAAAA…!!", 1);
      if (!reduced) gsap.fromTo(c.head, { x: -2 }, { x: 2, duration: 0.04, repeat: 15, yoyo: true, clearProps: "x" });
      gsap.delayedCall(reduced ? 0 : 0.6, () => { el.classList.add("is-ssj"); flash(); c.talk("this is… a SUPER SAIYAN!", 3); });
      gsap.delayedCall(9, () => { el.classList.remove("is-ssj"); c.talk("phew… all that made me hungry."); });
      return;
    }
    busy = true;
    c.talk(hop[(n - 1) % hop.length], 1.6);
    const to = c.next();
    gsap.timeline({ onComplete: () => { busy = false; } })
      .to(grip, { opacity: 0, duration: 0.08 })
      .fromTo(it, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: reduced ? 0 : 0.25, ease: "back.out(2)" })
      .add(flash, "+=0.35")
      .to(el, { scaleX: 0.03, scaleY: 1.25, transformOrigin: "50% 100%", duration: reduced ? 0 : 0.16, ease: "power3.in" })
      .add(() => { c.place(to); gsap.set(c.say, { opacity: 0 }); })
      .add(flash, "+=0.25")
      .to(el, { scaleX: 1, scaleY: 1, duration: reduced ? 0 : 0.3, ease: "back.out(3)" })
      .to(it, { opacity: 0, y: 22, duration: 0.2 }, "+=0.35")
      .to(grip, { opacity: 1, duration: 0.1 });
  });
}

/* Luffy: every tap is Gomu Gomu no Red Hawk. His hand lets go of the card, the arm stretches
   across it with a haki-black fist on fire, bursts into embers at full reach, then snaps back. */
function luffy() {
  const el = $("[data-luffy]"), host = $(".card-wrap");
  if (!el || !host) return;
  const card = $(".card", host)!;
  const c = cameo(el, host, () => [{ el: card, at: 0.8 }]);
  const pistol = $("[data-luffy-pistol]", el)!, grip = $("[data-hand-l]", el)!, embers = $$("[data-luffy-embers] i", el);
  const lines = ["gomu gomu no… RED HAWK!!", "I'm gonna be King of the Pirates!", "MEAT!! …you got meat?", "you're in my crew now. shishishi!", "no take-backs!"];
  let i = -1, busy = false;
  const laugh = (s = 1.4) => { el.classList.add("is-laughing"); gsap.delayedCall(s, () => el.classList.remove("is-laughing")); };
  c.head.addEventListener("click", () => {
    if (busy) return;
    // every other shout is the attack's name; in between, the usual Luffy lines
    c.talk(++i % 2 === 0 ? lines[0] : lines[1 + ((i >> 1) % (lines.length - 1))], 2);
    laugh();
    if (reduced) return;
    busy = true;
    const reach = gsap.utils.clamp(120, 420, (gsap.getProperty(el, "x") as number) + el.offsetWidth * 0.2 - 30);
    gsap.timeline({ onComplete: () => { busy = false; } })
      .to(grip, { opacity: 0, duration: 0.08 })
      .set(pistol, { opacity: 1, width: 0 })
      .fromTo(c.head, { x: 0 }, { x: 5, duration: 0.18, ease: "power2.out" }, 0.05)
      .to(pistol, { width: reach, duration: 0.24, ease: "power4.out" }, 0.22)
      .to(c.head, { x: -6, duration: 0.14, ease: "power3.out" }, 0.22)
      .fromTo(embers, { x: 0, y: 0, opacity: 1, scale: 1 },
        { x: () => gsap.utils.random(-70, 40), y: () => gsap.utils.random(-60, 40), opacity: 0, scale: () => gsap.utils.random(0.3, 1.4), duration: () => gsap.utils.random(0.4, 0.8), ease: "power2.out" }, 0.44)
      .to(pistol, { width: 0, duration: 0.5, ease: "elastic.in(1, 0.4)" }, "+=0.35")
      .to(c.head, { x: 0, duration: 0.3, ease: "back.out(3)" }, "<0.4")
      .set(pistol, { opacity: 0 })
      .to(grip, { opacity: 1, duration: 0.1 });
  });
  $(".card__list .btn")?.addEventListener("pointerenter", () => { c.talk("go on, click it! shishishi"); laugh(); });
}

export function boot() {
  reveals();
  clock();
  rotator();
  hnav();
  const intro = hero();
  work();
  journey();
  rest();
  luffy();
  goku();
  loader().then(() => intro?.play());
  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
    // pins change the page height, so re-land on #anchors once layout is final
    const t = location.hash && document.getElementById(location.hash.slice(1));
    if (t) t.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  });
}
