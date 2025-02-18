import './index.css';
import { Route, Routes } from 'react-router-dom';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';
function App() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            
            </Routes>
        </div>

    );
}

export default App;
