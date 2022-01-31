const Post = (props) => {
    const { _id, title, description, date } = props.post;
    return (
        <div>
            <ul>
                <li>id: {_id}</li>
                <li>title: {title}</li>
                <li>description: {description}</li>
                <li>date: {new Date(date).toDateString()}</li>

            </ul>
        </div>
    )
}

export default Post;///