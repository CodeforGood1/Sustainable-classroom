import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const menu = [
    { title: 'Courses', route: '/courses' },
    { title: 'Progress Tracker', route: '/progress' },
    { title: 'Test Knowledge', route: '/test' },
    { title: 'Student Profile', route: '/profile' },
    { title: 'Logout', route: '/' }
  ]

  return (
    <div className="min-h-screen bg-light p-8">
      <h1 className="text-3xl font-bold text-dark mb-8">Welcome to the Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="text-gray-500 mt-2">Go to {item.title} section</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
