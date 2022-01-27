import { Routes, Route } from 'react-router-dom';
import FetchComp from './components/fetchComp/FetchComp';
import PostFetching from './components/postFile/PostFetching';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FetchComp />} />
        <Route exact path="/posts" element={<PostFetching />} />
      </Routes>
    </div>
  );
}

export default App;
