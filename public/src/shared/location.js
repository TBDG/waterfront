import React from 'react';
import {MdLocationOn} from 'react-icons/md';
//see documentation: https://react-icons.github.io/react-icons/

const Location = () => {
    const address = '4782 S Plum St,\nMurray, UT 84123-3613\n';
    const hours = 'WEDS- THURS, 10am-6pm\nFRI-SAT, 10am-8pm\n\nSUN, 10am-6pm\n\nCLOSED MONDAY & TUESDAY';
    const directions = 'https://www.google.com/maps?daddr=4782+S+Plum+St,+Salt+Lake+City,+UT+84123-3613,+United+States+Murray,+UT+84123-3613';

    return (
        <div id='location'>
            <div id='loc-flex-container'>            
                <div className='location'>
                    <p className='heading'>LOCATION</p>
                    <p>{address}</p>
                    <p>{hours}</p>
                    <a className='btn btn-outline-dark' target='_blank' href={directions}><MdLocationOn/> GET DIRECTIONS</a>
                </div>
                <div className='empty-space' />
            </div>


        </div>
    )
}

export default Location;