import { ResumeForm } from "@/types/ResumeForm";

type Props = {
  form: ResumeForm;
  setForm: React.Dispatch<React.SetStateAction<ResumeForm>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export default function Personal({
    form,
    setForm,
    steps,
    setSteps
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        setForm(prev => ({...prev, personal: {...prev.personal, [name]: value}}));
    }

    const handleSumbit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSteps(prev => prev + 1);
    }

    return (
        <div className="flex justify-center h-full items-center">
            <form className="flex flex-col" onSubmit={handleSumbit}>
                <label className="text-sm ml-1 font-semibold text-neutral-500">First Name*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="firstName" placeholder="Enter your First Name" value={form.personal.firstName} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Last Name*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="lastName" placeholder="Enter your LastName Name" value={form.personal.lastName} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Email*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="email" name="email" placeholder="Enter your Email" value={form.personal.email} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Phone No.*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="phone" placeholder="Enter your Phone Number" value={form.personal.phone} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">City*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="city" placeholder="Enter your City" value={form.personal.city} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">State*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="state" placeholder="Enter your State" value={form.personal.state} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Country*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="country" placeholder="Enter your Country" value={form.personal.country} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Pin Code*</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="pincode" placeholder="Enter Pin code" value={form.personal.pincode} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">LinkedIn</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="linkedin" placeholder="Paste Link of Linkedin" value={form.personal.linkedin} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">GitHub</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="github" placeholder="Paste Link of GitHub" value={form.personal.github} onChange={handleChange}/>
                <label className="text-sm ml-1 font-semibold text-neutral-500">Portfolio</label>
                <input
                className="p-2 border border-neutral-300 rounded-xl text-base outline-0 focus:ring-3 focus:ring-blue-200 w-75 mb-3"
                type="text" name="portfolio" placeholder="Paste Link of Portfolio" value={form.personal.portfolio} onChange={handleChange}/>
                <button
                className="text-base font-semibold bg-blue-400 text-blue-900 py-2 rounded-xl"
                type="submit" disabled={steps == 2}>Next</button>
            </form>
        </div>
    )
};
