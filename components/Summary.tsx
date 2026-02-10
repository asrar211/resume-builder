import { ResumeForm } from "@/types/ResumeForm";

type Props = {
  form: ResumeForm;
  setForm: React.Dispatch<React.SetStateAction<ResumeForm>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export default function Summary({
    form,
    setForm,
    steps,
    setSteps
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSumbit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSteps(prev => prev + 1);
    }
    return (
        <div className="flex justify-center h-dvh items-center">
            <form className="flex flex-col" onSubmit={handleSumbit}>
                <textarea
                className="p-2 border border-neutral-300 text-base outline-0 focus:ring-3 focus:ring-blue-200 w-100 mb-3 h-50 rounded-xl"
                name="summary" placeholder="Enter a small Summary about yourself" value={form.summary} onChange={handleChange}/>
                <div className="flex gap-3 justify-center items-center">
                    <button className="text-base font-semibold bg-green-400 text-green-900 py-2 rounded-xl w-full" onClick={() => setSteps(prev => prev -1)}>Prev</button>
                    <button className="text-base font-semibold bg-blue-400 text-blue-900 py-2 rounded-xl w-full" type="submit">Next</button>
                </div>
            </form>
        </div>
    )
};
