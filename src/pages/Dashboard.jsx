function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome to ZenithFlow</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Task Management"
          description="Prioritize and manage your tasks effectively"
          link="/todos"
        />
        <DashboardCard
          title="Pomodoro Timer"
          description="Stay focused with timed work sessions"
          link="/pomodoro"
        />
        <DashboardCard
          title="Schulte Table"
          description="Improve your concentration and visual perception"
          link="/schulte"
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, description, link }) {
  return (
    <div className="card hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to={link} className="btn inline-block">
        Get Started
      </Link>
    </div>
  );
}

export default Dashboard;