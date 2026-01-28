import StatusBadge from "@/components/StatusBadge";

const highlights = [
  {
    title: "Instant sandboxes",
    description:
      "Spin up a fresh runtime in seconds with repeatable infra you can trust.",
  },
  {
    title: "Opinionated stack",
    description:
      "Next.js, Tailwind, and TypeScript wired for fast iteration and clean deploys.",
  },
  {
    title: "Ship-ready UX",
    description:
      "A layout that looks like a product from day one, not a boilerplate.",
  },
];

const pulses = [
  { label: "Provisioning", value: "11.8s" },
  { label: "Build time", value: "24s" },
  { label: "Region", value: "us-east" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[140px]" />
        <div className="absolute bottom-[-140px] left-[-5%] h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              Sandboxed
            </span>
            <StatusBadge />
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Sandboxed with love.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/80 sm:text-xl">
            This is a clean, production-minded starting point with sharp layout,
            baked-in infra signals, and a staging path ready for growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5">
              Launch preview
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">
              View runbook
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Live signals
            </p>
            <div className="space-y-4">
              {pulses.map((pulse) => (
                <div key={pulse.label} className="flex items-center justify-between">
                  <span className="text-sm text-slate-200/80">{pulse.label}</span>
                  <span className="text-sm font-semibold text-white">
                    {pulse.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-2xl border border-white/10 bg-slate-950/60 p-4 font-mono text-xs text-slate-200">
              <div>$ npm run dev</div>
              <div className="text-emerald-300">ready - localhost:3000</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Deployment notes</h2>
            <p className="mt-3 text-sm text-slate-200/80">
              Sandboxed builds keep the surface small, so releases stay tight and
              predictable. Ship staging, track metrics, and move fast without
              surprises.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-200/80">
              <div>1. Create sandbox template</div>
              <div>2. Bake Next.js build in CI</div>
              <div>3. Promote to prod with confidence</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Stack
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
              <li>Next.js App Router</li>
              <li>TypeScript-first codebase</li>
              <li>Tailwind with custom system</li>
              <li>E2B sandbox runtime</li>
            </ul>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <span>My Cool Web Server</span>
          <span>Built inside an E2B sandbox</span>
        </footer>
      </div>
    </main>
  );
}
