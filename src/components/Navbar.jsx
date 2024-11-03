import { Link } from 'react-router-dom';
import { FaTasks, FaClock, FaBrain, FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-dark-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">ZenithFlow</Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<FaHome />} text="Dashboard" />
            <NavLink to="/todos" icon={<FaTasks />} text="Tasks" />
            <NavLink to="/pomodoro" icon={<FaClock />} text="Pomodoro" />
            <NavLink to="/schulte" icon={<FaBrain />} text="Schulte" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-dark-300 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;