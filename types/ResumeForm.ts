

export type Skill = {
  name: string
  level: "beginner" | "intermediate" | "advanced"
}

export type Experience = {
  job: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  isPresent: boolean;
  points: string[]
}

type Education = {
  qual: string,
  institution: string,
}

export type ResumeForm = {
    personal: {
        firstName: string
        lastName: string 
        email: string
        phone: string
        city: string
        state: string
        country: string
        pincode: string
        linkedin?: string
        github?: string
        portfolio?: string
    },
    summary: string,
    skills: Skill[],
    experience: Experience[]
    education: Education
}