import type { Experience, ResumeForm } from "@/types/ResumeForm";
import { useState } from "react";

type Props = {
  form: ResumeForm;
  setForm: React.Dispatch<React.SetStateAction<ResumeForm>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export default function Experience({
    form,
    setForm,
    steps,
    setSteps
}: Props) {
    const [exp, setExp] = useState<Experience>({
        job: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        isPresent: false,
        points: []
    })
    const [point, setPoint] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;

        setExp(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        })) 
    }

    const addExperience = () => {
        if(!exp.job || !exp.company) return;

        setForm(prev => ({
            ...prev,
            experience: [...prev.experience, exp]
        }))
        setExp({
            job: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            isPresent: false,
            points: []
        })
    }

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
        if(exp.job) addExperience();
        setSteps(prev => prev + 1);
    }

    const addPoint = () => {
  if (!point.trim()) return

  setExp(prev => ({
    ...prev,
    points: [...prev.points, point.trim()]
  }))

  setPoint("")
}

const removePoint = (index: number) => {
  setExp(prev => ({
    ...prev,
    points: prev.points.filter((_, i) => i !== index)
  }))
}

    return (
        <div className="flex justify-center h-dvh items-center">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Job Title</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="job" placeholder="Job Title" value={exp.job} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Company</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="company" placeholder="Company" value={exp.company} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Location</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="location" placeholder="Location" value={exp.location} onChange={handleChange}/>
                <div className="flex items-start flex-col justify-center">
                    <div className="flex flex-col">
                        <label className="text-sm ml-1 font-semibold text-neutral-500">Start Date</label>
                        <div className="flex justify-between items-center gap-5">
                            <input className="p-2 border border-neutral-300 rounded-xl text-sm outline-0 focus:ring-3 focus:ring-blue-200 w-full mb-3" type="date" name="startDate" value={exp.startDate} onChange={handleChange}/>
                            <div className="flex items-center gap-1">
                                <input className="" type="checkbox" name="isPresent" checked={exp.isPresent} onChange={handleChange}/>
                                <label className="text-sm ml-1 font-semibold text-neutral-500">Present</label>
                            </div>
                        </div>
                    </div>
                    {!exp.isPresent && (
                    <div className="flex flex-col">
                        <label className="text-sm ml-1 font-semibold text-neutral-500">End Date</label>
                        <input className="p-2 border text-sm border-neutral-300 rounded-xl outline-0 focus:ring-3 focus:ring-blue-200 mb-3 w-full" type="date" name="endDate" value={exp.endDate} onChange={handleChange}/>
                    </div>
                    )}
                </div>
                <label className="text-sm ml-1 font-semibold text-neutral-500">
  Responsibilities / Achievements
</label>

<div className="flex gap-2 mb-2">
  <input
    className="p-2 border border-neutral-300 rounded-xl text-sm w-full"
    placeholder="e.g. Built reusable React components"
    value={point}
    onChange={(e) => setPoint(e.target.value)}
  />
  <button
    type="button"
    className="px-3 rounded-xl bg-gray-200 text-sm"
    onClick={addPoint}
  >
    Add
  </button>
</div>

<ul className="list-disc pl-5 space-y-1 mb-3">
  {exp.points.map((p, i) => (
    <li key={i} className="text-xs flex justify-between">
      <span>{p}</span>
      <button
        type="button"
        className="text-red-500 ml-2"
        onClick={() => removePoint(i)}
      >
        ✕
      </button>
    </li>
  ))}
</ul>

                <button className="text-base font-semibold bg-blue-400 text-blue-900 py-2 rounded-xl my-3" type="button" onClick={addExperience}>
                    Add Experience
                </button>
                 <ul>
                    {form.experience.map((e, i) => (
                    <li className="text-sm" key={i}>
                    {i + 1}. {e.job.toUpperCase()} @ <span className="font-semibold">{e.company.toUpperCase()}</span> <span className="text-xs flex items-center">{e.startDate} to {e.isPresent ? "Present" : e.endDate}</span>
                    </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center gap-3 my-3">
                    <button className="text-base font-semibold bg-green-400 text-green-900 py-2 rounded-xl w-full" type="button" onClick={() => setSteps(p => p - 1)}>
                    Prev
                </button>
                <button className="text-base font-semibold bg-blue-400 text-blue-900 py-2 rounded-xl w-full" type="submit">Next</button>
                </div>
            </form>
        </div>
    )
};
