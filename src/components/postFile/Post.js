const Post = (props) => {
    const { _id, title, description, date } = props.post;
    // console.log(_id)

    return (
        <div>
            <ul>
                <li>id: {_id}</li>
                <li>Name: {title}</li>
                <li>Greeting: {description}</li>
                <li>Author: {date}</li>
            </ul>
        </div>
    )
}

export default Post;