import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imageUrl}) {

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="https://instagram.fkul15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72976734_2151391035157494_3951599516976676864_n.jpg?_nc_ht=instagram.fkul15-1.fna.fbcdn.net&_nc_ohc=3MejHappDykAX8DTp-t&oh=cdd21e7a3fcd1e1d284d2a7a98cd0022&oe=5F7C0175"
                />
                <h3>{username}</h3>
            </div>

            <img className="post__image" src={imageUrl} alt=""/>

            <h4 className="post__text"><strong>{username} </strong>{caption}</h4>
        </div>
    )
}

export default Post
