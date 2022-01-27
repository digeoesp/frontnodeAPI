import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import PostFetching from './components/postFile/PostFetching';
import Bs from './components/Bs'

const server = process.env.REACT_APP_SERVER_URL;


function App() {
  //object fetching
  const [company, setCompany] = useState({});

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(server);
      // console.log(response, "this is response");
      const data = response.data;
      // console.log(data);
      //name,author and greeting
      // destructuring
      // console.log(data);
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
      <Routes>
        <Route path="/" element={<Company company={company} />} />
        <Route exact path="/bs" element={<Bs />} />
        <Route exact path="/posts" element={<PostFetching />} />
      </Routes>
      <h1>hdllo</h1>

    </div>




  );
}

export default App;
