import { useState } from "react";
import axios from "axios";
const server = process.env.REACT_APP_SERVER_URL;

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            description,
        };
        try {
            const res = await axios.post(`${server}/posts`, newPost)
            window.location.replace(`/posts`)

        } catch (err) { }
    };
    return (
        <div className="write">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div >
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
