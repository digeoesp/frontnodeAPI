import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Post from './Post'
const server = process.env.REACT_APP_SERVER_URL;
const array = [1, 1, 1, 1, 11, 2, 2, 3, 4]


const PostFetching = () => {
    const [posts, setPost] = useState({});
    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${server}/posts`);
            const data = response.data;
            setPost(...data);
            // const { _id, title, description, date } = data;
            // setPost({
            //     _id,
            //     title,
            //     description,
            //     date
            // });
        }
        fetchPost(posts);
    }, [])
    const postList = array.map((post) => {
        return <Post post={post} />
    });
    console.log(postList, "this is postlist")
    return (
        <div>
            {postList}
            {/* <Post post={posts} /> */}
        </div>
    );
};

export default PostFetching;
