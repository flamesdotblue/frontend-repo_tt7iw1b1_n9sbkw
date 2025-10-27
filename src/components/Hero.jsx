import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-300/40 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-blue-200/50 to-cyan-200/40 blur-3xl" />
      </div>

      <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight text-gray-900">Nimbus<span className="text-cyan-600">Bottles</span></div>
          <div className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#gallery" className="hover:text-gray-900">Gallery</a>
          </div>
          <button className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:from-cyan-500 hover:to-blue-500">Pre-Order</button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Stay Hydrated. Stay Clean.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            The self-cleaning smart bottle that keeps your water pure — anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Pre-Order Now <ArrowRight size={18} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400"
            >
              <Play size={18} /> Watch How It Works
            </a>
          </div>
          <div className="mt-6 text-xs uppercase tracking-wider text-gray-400">Smart hydration for smarter living.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-gray-50 to-white p-3 shadow-xl ring-1 ring-gray-200/60" />
            <div className="relative z-10 flex h-full items-center justify-center rounded-[28px] bg-white">
              <div className="relative h-[85%] w-[48%] rounded-full bg-gradient-to-b from-gray-100 to-gray-50 shadow-inner">
                <div className="absolute -top-8 left-1/2 h-10 w-24 -translate-x-1/2 rounded-t-[14px] bg-gray-200" />
                <div className="absolute top-8 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 blur-[1px]" />
                <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-cyan-400/10 blur-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
