import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Company from './components/Company';

const server = process.env.REACT_APP_SERVER_URL;
console.log(server)

function App() {
  const [company, setCompany] = useState({});

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(server);
      console.log(response);
      const data = response.data;
      console.log(data);
      //name,author and greeting
      // destructuring
      console.log(data);
      const { name, author, greeting } = data;
      setCompany({
        name,
        author,
        greeting
      });

    }
    fetchCompany();
  }, [])
  console.log(company)
  return (

    <Routes>
      <Route path="/" element={<Company company={company} />} />
    </Routes>




  );
}

export default App;
