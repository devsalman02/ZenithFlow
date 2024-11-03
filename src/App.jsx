import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TodoList from './pages/TodoList';
import PomodoroTimer from './pages/PomodoroTimer';
import SchulteTable from './pages/SchulteTable';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-200">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/pomodoro" element={<PomodoroTimer />} />
            <Route path="/schulte" element={<SchulteTable />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;