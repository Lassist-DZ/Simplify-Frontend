import React from 'react';
import "../../assets/styles/components/aboutUs/who-us.css";

const WhoAreWe = () => {
    return (<div className='flex flex-col items-center justify-center'>        <div className="who-us-container p-8">
        <div className="section-content pl-4">
            <h2>Who Are We</h2>
            <p className='font-size-paragraph'>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim
            </p>
        </div>
        <div className="section-image1 "></div>

        <div className="section-image2 mt-8 "></div>
        <div className="section-content pt-8 pl-4">
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
