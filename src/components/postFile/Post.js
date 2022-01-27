const Post = (props) => {
    const { _id, title, description, date } = props.post;
    return (
        <div>
            <ul>
                <li>id: {_id}</li>
                <li>title: {title}</li>
                <li>description: {description}</li>
                <li>date: {date}</li>
            </ul>
        </div>
    )
}

export default Post;