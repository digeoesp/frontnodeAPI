
const Company = (props) => {
    const { name, greeting, author } = props.company;

    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Greeting: {greeting}</li>
                <li>Author: {author}</li>
            </ul>
        </div>
    )
}

export default Company;