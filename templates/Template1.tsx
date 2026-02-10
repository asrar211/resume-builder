import { ResumeForm } from "@/types/ResumeForm"

type Props = {
  form: ResumeForm
}

export default function Template1({ form }: Props) {
  return (
    <div className="w-full px-6 py-6 text-neutral-900 relative">

      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold tracking-wide">
          {form.personal.firstName} {form.personal.lastName}
        </h1>
        <p className="text-xs text-neutral-600 mt-1">
          {form.personal.phone} · {form.personal.email} ·{" "}
          {form.personal.city}, {form.personal.state}, {form.personal.country}
        </p>
      </header>

      {form.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-semibold border-b pb-1 mb-1">
            SUMMARY
          </h2>
          <p className="text-xs leading-relaxed">
            {form.summary}
          </p>
        </section>
      )}

      {form.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-semibold border-b pb-1 mb-2">
            EXPERIENCE
          </h2>

          {form.experience.map((e, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">
                  {e.job} · <span className="font-normal">@{e.company}</span>
                </h3>
                <span className="text-xs text-neutral-600">
                  {e.startDate} – {e.isPresent ? "Present" : e.endDate}
                </span>
              </div>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                {e.points.map((point, j) => (
                  <li key={j} className="text-xs leading-snug">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {form.skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-semibold border-b pb-1 mb-2">
            SKILLS
          </h2>

          <ul className="grid grid-cols-3 gap-x-6 gap-y-1 text-xs">
            {form.skills.map((s, i) => (
              <li key={i} className="list-none">
                {s.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {form.education && (
        <section>
          <h2 className="text-sm font-semibold border-b pb-1 mb-1">
            EDUCATION
          </h2>
          <p className="text-xs font-semibold">
            {form.education.qual}
          </p>
          <p className="text-xs text-neutral-700">
            {form.education.institution}
          </p>
        </section>
      )}

      <div className="absolute bottom-0 mt-10">
        <button className="no-print text-sm font-semibold text-blue-600 cursor-pointer" onClick={() => window.print()}>
        Download PDF
        </button>
      </div>
    </div>
  )
}
