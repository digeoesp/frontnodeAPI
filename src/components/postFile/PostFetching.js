import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from './Post'

const server = process.env.REACT_APP_SERVER_URL;

const PostFetching = () => {
    const [posts, setPost] = useState([]);
    console.log(posts)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${server}/posts`);
            const data = response.data;
            setPost(data);
        }
        fetchPost();
    }, [])
    const postList = posts.map((post, index) => {
        return <Post post={post} key={index} />
    });
    return (
        <div>
            {postList}
        </div>
    );
};

export default PostFetching;
