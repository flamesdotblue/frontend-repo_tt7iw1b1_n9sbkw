import { motion } from "framer-motion";
import { Twitter, Instagram, Github } from "lucide-react";

function Testimonial({ quote, name, role }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-gray-700">“{quote}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200" />
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="gallery" className="relative bg-white pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed to stand out, built to blend in.</h2>
          <p className="mt-3 text-gray-600">Minimal lines, premium materials, and a soft aqua glow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="col-span-1 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 ring-1 ring-gray-200"
          >
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 shadow-inner" />
            <div className="mt-3 text-sm text-gray-500">Soft white finish</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="col-span-1 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 ring-1 ring-gray-200"
          >
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 shadow-inner" />
            <div className="mt-3 text-sm text-gray-500">Aqua LED ring</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="col-span-1 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white p-6 ring-1 ring-gray-200"
          >
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 shadow-inner" />
            <div className="mt-3 text-sm text-gray-500">Travel‑ready</div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Testimonial quote="I actually drink more water now. The LED reminders are genius." name="Alex P." role="Designer" />
          <Testimonial quote="No plastic taste, no smell. The UV‑C cycle is so easy to use." name="Morgan L." role="Photographer" />
          <Testimonial quote="Feels like holding the future. Minimal, clean, reliable." name="Priya S." role="Athlete" />
        </div>

        <div id="cta" className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-1 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/80 px-8 py-10 backdrop-blur md:flex-row">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">The Future of Hydration Starts Here.</h3>
              <p className="mt-2 text-gray-600">Reserve yours now and be the first to sip smarter.</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <a href="#" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800">Reserve Yours Now</a>
              <a href="#features" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400">Learn more</a>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-gray-900">
              <span className="text-base font-semibold">Nimbus</span>
              <span className="text-base font-semibold text-cyan-600">Bottles</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Support</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
            </nav>
            <div className="flex items-center gap-4 text-gray-500">
              <a aria-label="Twitter" href="#" className="hover:text-gray-900"><Twitter size={18} /></a>
              <a aria-label="Instagram" href="#" className="hover:text-gray-900"><Instagram size={18} /></a>
              <a aria-label="GitHub" href="#" className="hover:text-gray-900"><Github size={18} /></a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
