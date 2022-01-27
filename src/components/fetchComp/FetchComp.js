import axios from 'axios';
import { useState, useEffect } from 'react';
import Company from './Company';
const server = process.env.REACT_APP_SERVER_URL;

const FetchComp = () => {
    const [company, setCompany] = useState({});
    useEffect(() => {
        const fetchCompany = async () => {
            const response = await axios.get(server);
            const data = response.data;
            const { name, author, greeting } = data;
            setCompany({
                name,
                author,
                greeting
            });
        }
        fetchCompany();
    }, [])
    return (
        <div>
            <Company company={company} />
        </div>
    );
};

export default FetchComp;
