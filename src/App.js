import { Routes, Route } from 'react-router-dom';
import FetchComp from './components/fetchComp/FetchComp';
import PostFetching from './components/postFile/PostFetching';
import CommFetching from './components/comment/CommFetching';
import CreatePost from './components/createPost/CreatePost';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<FetchComp />} />
        <Route path="/posts" element={<PostFetching />} />
        <Route path="/comment" element={<CommFetching />} />
        <Route path="posts/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
//////////////////////////xs/xs 

export default App;
