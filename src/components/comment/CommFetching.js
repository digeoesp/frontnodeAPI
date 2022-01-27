import Comment from './Comment'
import axios from 'axios';
import { useState, useEffect } from 'react';
const server = process.env.REACT_APP_SERVER_URL;

const CommFetching = () => {
    const [comments, setComment] = useState([]);
    useEffect(() => {
        const fetchComm = async () => {
            const response = await axios.get(`${server}/comment`);
            const data = response.data;
            setComment(data)
        }
        fetchComm();
    }, [])
    const commList = comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />
    })
    return (
        <div>
            {commList}
        </div>
    );
};

export default CommFetching;
