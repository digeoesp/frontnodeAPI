import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from './Post'
const server = process.env.REACT_APP_SERVER_URL;


const PostFetching = () => {
    const [posts, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${server}/posts`);
            console.log(response, "this is res");
            const data = response.data;
            console.log(data, "this is data");
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
