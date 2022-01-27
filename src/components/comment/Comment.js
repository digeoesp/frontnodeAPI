const Comment = (props) => {
    const { _id, name, lastName, age, date } = props.comment
    return (
        <div>
            <p>id: {_id}</p>
            <p>name: {name}</p>
            <p>last name: {lastName}</p>
            <p>Age: {age}</p>
            <p>Date: {new Date(date).toDateString()}</p>
        </div>
    );
};

export default Comment;
