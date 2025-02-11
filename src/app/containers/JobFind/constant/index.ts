import { Job } from "../../../../../types/featurejob";



const EmployementType:string[]=[
        "Full Time",
        "Part Time",
        "Remote",
        "Internship",
        "Contract",
]

const JobCategories:string[]=[
    "Marketing",
    "Technology",
    "Design",
    "Business",
    "Engineering",
    "Sales",
]

const JobLevels:string[]=[
    "Entry Level",
    "Senior Level",
    "Mid Level",
    "Expertise",
]

const JobSearchList:Job []=[
    {
        Id:1,
        Title:"Social Media Assitant",
        Subtitle:"Ethiopia,AA",
        Logo:"/Category/sales.png", 
        Description:"Social media assitant that is responsible for ads,...", 
        Category:["Full Time","Marketing","design"],
    },

    {
        Id:2,
        Title:"Brand Designer",
        Subtitle:"Ethiopia,AA",
        Logo:"/Category/design.png", 
        Description:"Designing a brand, that is responsible for ads,...", 
        Category:["Full Time","Marketing","design"],
    }
]



export {
    EmployementType,
    JobSearchList,
    JobCategories,
    JobLevels
}