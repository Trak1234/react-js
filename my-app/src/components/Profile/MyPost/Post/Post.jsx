import React from 'react';
import st from './Post.module.css';

const Post = (props) => {
    return (
        <div className={st.posts}>
            <div className={st.item}>
                <img src="https://avatars.mds.yandex.net/i?id=ba6676ff403999179d2e26182828b686-4817585-images-thumbs&n=13" /> {props.message}
            </div>
            <span>Like {props.Like}</span>
        </div>
    )
}

export default Post;