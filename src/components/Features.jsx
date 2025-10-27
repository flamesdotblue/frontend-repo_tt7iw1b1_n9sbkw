import { Wand2, Thermometer, BatteryCharging, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "UV-C Cleaning Tech",
    desc: "Built-in UV-C light neutralizes bacteria and odors at the touch of a button.",
    Icon: Wand2,
  },
  {
    title: "Temperature Display",
    desc: "Discreet LED feedback shows your water temperature in real time.",
    Icon: Thermometer,
  },
  {
    title: "Rechargeable Battery",
    desc: "Long-lasting, USB‑C quick charge keeps you powered for days.",
    Icon: BatteryCharging,
  },
  {
    title: "Smart Hydration Tracking",
    desc: "Track intake and goals with a subtle light ring and companion app.",
    Icon: Activity,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Engineered for the way you move.</h2>
          <p className="mt-3 text-gray-600">Technology that keeps things simple.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
                <f.Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
