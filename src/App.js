import { Routes, Route } from 'react-router-dom';
import FetchComp from './components/fetchComp/FetchComp';
import PostFetching from './components/postFile/PostFetching';
import CommFetching from './components/comment/CommFetching';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FetchComp />} />
        <Route exact path="/posts" element={<PostFetching />} />
        <Route exact path="/comment" element={<CommFetching />} />
      </Routes>
    </div>
  );
}

export default App;
