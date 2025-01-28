import { Link, Route, Routes } from 'react-router-dom';
import { Question } from './components/Question';
import { Answer } from './components/Answer';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Question</Link>
        <Link to="/answer">Answer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
