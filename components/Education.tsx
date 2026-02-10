import { ResumeForm } from "@/types/ResumeForm";

type Props = {
  form: ResumeForm;
  setForm: React.Dispatch<React.SetStateAction<ResumeForm>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export default function Education({
    form,
    setForm,
    steps,
    setSteps
}: Props){

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, education: {...prev.education, [name]: value}}))
    }

    const handleSumbit = (e: React.SubmitEvent) => {
        e.preventDefault();
        setSteps(prev => prev + 1);
    }
    return (
        <div className="flex justify-center h-dvh items-center">
            <form className="flex flex-col" onSubmit={handleSumbit}>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Enter Your Highest Qualification</label>
                <input className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3" type="text" name="qual" value={form.education.qual} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Institution</label>
                <input className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3" type="text" name="institution" value={form.education.institution} onChange={handleChange}/>
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
