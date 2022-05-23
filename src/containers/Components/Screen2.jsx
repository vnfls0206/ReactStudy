import React, {useEffect} from 'react';
import {connect} from "react-redux";


import {getPost, getUsers} from "../../redux/modules/post";

const Screen2 = ({getPost, getUsers, post, users, loadingPost, loadingUsers}) => {

    useEffect(() => {
        getPost(1);
        getUsers(1);

    }, [getPost, getUsers]);

    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default connect(
    state => ({
        post: state.post.post,
        users: state.post.users,
        loadingPost: state.post.GET_POST,
        loadingUsers: state.post.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(Screen2);