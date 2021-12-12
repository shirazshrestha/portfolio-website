import React from "react";
import './education-card.css';

function EducationCard({education}) {
    return (
        <div className='education-card'>
            <div className='education-info'>
                <label className='education-title'>{education.university}</label>

                <div className='education-dates'>
                    {education.dateJoined}-{education.dateCompleted}
                </div>
                <div className='education-location'>
                    {education.location}
                </div>
                <div className='education-field'>
                    {education.field}
                </div>
            </div>
        </div>
    );
}

export default EducationCard;