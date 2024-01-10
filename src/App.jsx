import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
