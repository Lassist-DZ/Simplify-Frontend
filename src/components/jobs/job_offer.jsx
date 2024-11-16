import {Card, CardContent, CardFooter, CardHeader} from "../../shadcn/ui/card"
import JobImg from "../../assets/images/job_img.png"
import Dot from "../../assets/icons/dot"
import CTA_Btn from "../cta_button"
export default function JobOffer() {
    return <Card className="flex flex-col justify-center items-start gap-4 rounded-[15px] lg:w-[500px]"
    style={{border: "3px solid rgba(94, 94, 247, 0.50)"}}>
        <CardHeader className="flex flex-col items-center gap-4 p-0 min-w-full w-full">
            <img src={JobImg} alt="Job Offer Post Image" className="w-full h-auto rounded-t-[15px] rounded-b-none"/>
            <p className="post_date py-2 px-5 rounded-[25px] border border-[#5E5EF7] bg-[#E6F2FD] font-size-button text-center text-black"> 7 octobre 2024</p>
            <div className="job_info flex flex-col gap-1 py-0 px-4 items-center">
                <h3 className="text-black text-center">Community manager</h3>
                <p className="font-size-paragraph text-black">Gestion des reseaux sociaux + Redaction SEO</p>
            </div>
        </CardHeader>
        <CardContent className="flex py-4 px-4 flex-col justify-center items-start gap-2">
            <div className="location flex flex-col items-start gap-2">
                <h6 className="text-black font-semibold">
                    Location
                </h6>
                <div className="flex px-2 flex-col items-start gap-1">
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Nouvelle ville Ali Mendjli 400, Constantine
                    </p>
                </div>
            </div>
            <div className="type flex flex-col items-start gap-2">
                <h6 className="text-black font-semibold">
                    Type
                </h6>
                <div className="flex px-2 flex-col items-start gap-1">
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Contrat CDI
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Part Time
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Hybrid
                    </p>
                </div>
            </div>
            <div className="salary flex flex-col items-start gap-2">
                <h6 className="text-black font-semibold">
                    Salary
                </h6>
                <div className="flex px-2 flex-col items-start gap-1">
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        40000da/mo
                    </p>
                  
                
                </div>
            </div>
            <div className="job-description flex flex-col items-start gap-2">
                <h6 className="text-black font-semibold">
                    Job Description
                </h6>
                <div className="flex px-2 flex-col items-start gap-1">
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Gestion des réseaux sociaux de l'Agence et des clients
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Création de posts sur les réseaux
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Création de stories
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Modérer les commentaires et répondre aux messages
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Veille concurrentielle
                    </p>
                  
                
                </div>
            </div>
            <div className="job-requirements flex flex-col items-start gap-2">
                <h6 className="text-black font-semibold">
                    Job Requirements
                </h6>
                <div className="flex px-2 flex-col items-start gap-1">
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Être très autonome
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Avoir un niveau d'orthographe irréprochable (la certification voltaire est un plus)
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Être passionné par les animaux
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Être force de proposition
                    </p>
                    <p className="flex items-center gap-2 font-size-paragraph text-black">
                        <Dot/>
                        Avoir au moins une expérience en Community manager ou Rédacteur web
                    </p>
                  
                
                </div>
            </div>
           
        </CardContent>
        <CardFooter className="w-full justify-center pt-0">
        <CTA_Btn type={"cta_apply"} text={"Apply"}/>
        </CardFooter>
      
    </Card>
}