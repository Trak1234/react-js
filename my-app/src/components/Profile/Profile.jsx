import React from 'react';
import MyPosts from './MyPost/MyPost';
import p from './Profile.module.css';


const  Profile = () => {
    return (
        
    <div className={p.content}>
       <img className={p.img} src="https://img.fonwall.ru/o/74/more-volna-solntse-priroda.jpg?route=mid&amp;h=750"/>
    <div className={p.item}>
                ava+descr
    </div>
        <MyPosts/>

</div>
        
        
    )
}

export default Profile;