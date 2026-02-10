import { ResumeForm, Skill } from "@/types/ResumeForm";
import { useState } from "react";

type Props = {
  form: ResumeForm;
  setForm: React.Dispatch<React.SetStateAction<ResumeForm>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export default function Skills({
    form,
    setForm,
    steps,
    setSteps
}: Props) {
    const [skill, setSkill] = useState<Skill>({
        name: "",
        level: "beginner"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        setSkill(prev => ({...prev, [name]: value}));
    }

    const addSkill = () => {
        if (!skill.name) return;

        setForm(prev => ({...prev, skills: [...prev.skills, skill]}))
        setSkill({ name: "", level: "beginner" })
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSteps(prev => prev + 1);
    }
    return (
        <div className="flex justify-center h-dvh items-center">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="name" placeholder="Enter a Skill" value={skill.name} onChange={handleChange}/>
                <select
                className="w-fit border border-neutral-300 rounded-xl p-1 text-sm"
                name="level" value={skill.level} onChange={handleChange}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <button
                className="text-base font-semibold bg-blue-400 text-blue-900 py-2 rounded-xl my-3"
                type="button" onClick={addSkill}>Add Skill</button>
                <ul>
                    {form.skills.map((s: Skill, i: number) => (
                    <li className="text-sm" key={i}>{i+1}. {s.name.toUpperCase()} <span className="font-semibold">{s.level.toUpperCase()}</span></li>
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
