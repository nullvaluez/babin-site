import { Award, ShieldCheck, Scale } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "75+ Years Combined Experience",
    description:
      "Our attorneys bring decades of trial experience across personal injury, mass tort, and civil rights litigation.",
  },
  {
    icon: ShieldCheck,
    title: "No Fee Unless We Win",
    description:
      "We work on a contingency fee basis. You pay nothing upfront and owe us nothing unless we recover compensation for you.",
  },
  {
    icon: Scale,
    title: "Proven Track Record",
    description:
      "From landmark trafficking verdicts to multimillion-dollar settlements, our results speak for themselves.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Babin Law
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            When the stakes are highest, you need attorneys who combine
            experience, dedication, and a relentless pursuit of justice.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-primary/10">
                  <Icon className="h-7 w-7 text-blue-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
