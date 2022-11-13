import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1 , message: 'Hi, how ary you?', LikeCount:11 },
        {id: 1 , message: 'Hi', LikeCount:11 },
        {id: 1 , message: 'Hello' ,LikeCount:15 }
    ]
    return (

        <div className={p.item}>
            <h3>MyPosts</h3>
            <div className={p.item}>
                <div>
                <textarea></textarea>
                </div>
               <div>
               <button></button>
               </div>
               
            </div>  
            <div className={p.posts}>
                <Post message={[postData[0].message]}  Like={[postData[0].LikeCount]} />
                <Post message={[postData[1].message]}  Like={[postData[1].LikeCount]} />
                <Post message={[postData[2].message]}  Like={[postData[2].LikeCount]} />
            </div>
        </div>






    )
}

export default MyPosts;