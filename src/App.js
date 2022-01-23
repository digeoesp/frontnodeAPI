import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Post from './components/Post';

const server = process.env.REACT_APP_SERVER_URL;


function App() {
  const [company, setCompany] = useState({});

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(server);
      console.log(response, "this is response");
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

  // const [post, setPost] = useState({});

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await axios.get(`${server}/posts`);
  //     console.log(response, "this is res");
  //     const data = response.data;
  //     console.log(data);
  //     // //name,author and greeting
  //     // // destructuring
  //     // console.log(data);
  //     // const { title, description, date } = data;
  //     // setPost({
  //     //   title,
  //     //   description,
  //     //   date
  //     // });
  //     setPost();

  //   }
  //   fetchPost();
  // }, [])


  return (

    <Routes>
      <Route exact path="/" element={<Company company={company} />} />
      {/* <Route exact path="/posts" element={<Post post={post} />} /> */}
    </Routes>




  );
}

export default App;
