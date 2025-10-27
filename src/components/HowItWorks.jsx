import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Fill it", desc: "Add water from any tap or bottle." },
  { step: "02", title: "Activate UV‑C", desc: "Tap to purify. The LED ring confirms." },
  { step: "03", title: "Drink pure water", desc: "Stay hydrated with peace of mind." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Fill it → Activate UV‑C → Drink pure water.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="absolute -top-4 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-200">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 right-6 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-200/50 to-blue-200/50 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
