import JobOffer from "./job_offer"

function JobsList () {
    return <section id="jobs_list" className="flex flex-col items-center gap-16 lg:px-20 px-6 lg:py-20 py-16" >
        <header className="flex gap-3 flex-col items-center">
            <h1 className="text-center text-black text-center">Offres d'emplois - Alternances - Stages</h1>
            <p className="font-size-paragraph2 text-black text-center">Toutes les offres d'emplois, stages et alternances sont publiées sur cette page. Malheureusement, nous ne répondons pas aux candidatures spontanées. Pourpostuler, merci de bien vouloir adresser votre candidature à "candidatures(@)simplify.com". Bonne chance dans vos recherches ✌</p>

        </header>
        <div className="grid lg:grid-cols-2 gap-9">
        <JobOffer/>
        <JobOffer/>
        <JobOffer/>
        <JobOffer/>
        <JobOffer/>
        </div>
    </section>
}
export default JobsList