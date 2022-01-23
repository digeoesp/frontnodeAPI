const Post = (props) => {
    const { id, title, description, date } = props.post;


    return (
        <div>
            <ul>
                <li>Name: {id}</li>
                <li>Name: {title}</li>
                <li>Greeting: {description}</li>
                <li>Author: {date}</li>
            </ul>
        </div>
    )
}

export default Post;