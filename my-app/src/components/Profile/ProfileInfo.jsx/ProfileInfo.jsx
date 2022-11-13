import React from 'react';

import pf from './ProfileInfo.module.css';


const  ProfileInfo = () => {
    return (
        
    <div className={pf.contentI}>
        <div>
        <img className={pf.imgI} src="https://img.fonwall.ru/o/74/more-volna-solntse-priroda.jpg?route=mid&amp;h=750"/>
        </div>

    <div className={pf.item}>
                <div>ava+descr</div>
    </div>


</div>
        
        
    )
}

export default ProfileInfo;