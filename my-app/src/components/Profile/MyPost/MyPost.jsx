import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={p.item}>
            MyPosts
            <div className={p.item}>
                <textarea></textarea>
                <button></button>
            </div>  
            <div className={p.posts}>
                <Post message='Hello ' Like={<a>1</a>} />
                <Post message='How are You?' Like={<a>5</a>} />
                <Post message='dasds ' Like={<a>4</a>} />
            </div>
        </div>






    )
}

export default MyPosts;