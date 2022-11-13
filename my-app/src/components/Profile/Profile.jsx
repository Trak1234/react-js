import React from 'react';
import MyPosts from './MyPost/MyPost';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';


const  Profile = () => {
    return (
        
    <div className={p.content}>
        <ProfileInfo/>
        <MyPosts/>

</div>
        
        
    )
}

export default Profile;