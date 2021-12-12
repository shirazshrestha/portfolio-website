import React from 'react';
import './work-card.css';

function WorkCard({item}) {
    return <div className='work-card'>
        <img src={item.companyLogo} className='company-logo'/>
        <div className='work-info'>
            <div>
                <label className='company-name'>{item.company}</label>

            </div>
            <label className='designation'> {item.designation}</label>

            <div className='work-dates'>
                <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
            </div>
        </div>
    </div>
}

export default WorkCard;