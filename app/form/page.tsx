"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Personal from "@/components/Personal";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import Template1 from "@/templates/Template1";
import { ResumeForm } from "@/types/ResumeForm";
import { useEffect, useState } from "react"


export default function Form() {
    const [steps, setSteps] = useState<number>(0);
    const [form, setForm] = useState<ResumeForm>({
    personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        linkedin: "",
        github: "",
        portfolio: ""
    },
    summary: "",
    skills: [],
    experience: [],
    education: {
        qual: "",
        institution: ""
    }
})

useEffect(() => {
    console.log(form);
}, [steps])

    return (
        <>
        <div className="flex justify-center h-dvh items-center">
        {steps ===0 && <Personal setForm={setForm} steps={steps} setSteps={setSteps} form={form}/>}
        {steps ===1 && <Summary setForm={setForm} steps={steps} setSteps={setSteps} form={form}/>}
        {steps ===2 && <Skills setForm={setForm} steps={steps} setSteps={setSteps} form={form}/>}
        {steps ===3 && <Experience setForm={setForm} steps={steps} setSteps={setSteps} form={form}/>}
        {steps ===4 && <Education setForm={setForm} steps={steps} setSteps={setSteps} form={form}/>}

        {steps ===5 && <div className="resume-page"><Template1
        form={form}/></div>}
        </div>
        </>
    )
};
