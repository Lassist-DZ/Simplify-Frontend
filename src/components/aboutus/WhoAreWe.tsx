import React from 'react';
import "../../assets/styles/components/aboutUs/who-us.css";

const WhoAreWe = () => {
    return (<div className='flex flex-col items-center justify-center'>
        <div className="who-us-container p-8">
            <div className="section-content pl-4 lg:items-start items-center flex flex-col lg:text-start text-center">
                <h2>Who Are We</h2>
                <p className='font-size-paragraph'>
                At Simplify, we provide top-tier virtual assistant services that cater to individuals, teams, and enterprises seeking efficient, skilled, and multilingual support. Our team is proficient in multiple languages, ensuring seamless communication and task execution. We pride ourselves on offering cost-effective solutions without compromising on quality.

                </p>
            </div>
            <div className="section-image1 "></div>

            <div className="section-image2 mt-8 "></div>
            <div className="section-content pt-8 pl-4 mt-4 lg:items-start items-center flex flex-col">
                <h2>Our Values</h2>
                <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...
                </p>
                <ul className='flex flex-col gap-3 pt-5'>
                    <li> ● Ut enim ad minima veniam</li>
                    <li> ● Ut enim ad minima veniam</li>
                    <li> ● Ut enim ad minima veniam</li>
                </ul>
            </div>
        </div>
    </div>

    );
};

export default WhoAreWe;
