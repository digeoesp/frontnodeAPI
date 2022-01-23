const Post = (props) => {
    const { title, description, date } = props.post;

    return (
        <div>
            <ul>
                <li>Name: {title}</li>
                <li>Greeting: {description}</li>
                <li>Author: {date}</li>
            </ul>
        </div>
    )
}

export default Post;