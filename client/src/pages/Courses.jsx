import { useNavigate } from 'react-router-dom'

function Courses() {
  const navigate = useNavigate()

  const courses = [
    {
      title: 'Coding Workbench',
      description: 'Launch a web-based IDE to practice coding challenges.',
      route: '/courses/code',
      color: 'bg-blue-100 text-blue-900 border-blue-300',
    },
    {
      title: 'Text-Based Learning',
      description: 'Read course content module-wise with diagrams and code.',
      route: '/courses/text',
      color: 'bg-green-100 text-green-900 border-green-300',
    },
    {
      title: 'Video-Based Learning',
      description: 'Watch recorded lectures and tutorials on core topics.',
      route: '/courses/video',
      color: 'bg-orange-100 text-orange-900 border-orange-300',
    }
  ]

  return (
    <div className="min-h-screen bg-light p-8">
      <h1 className="text-3xl font-bold text-dark mb-8">Course Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigate(course.route)}
            className={`p-6 rounded-2xl shadow border cursor-pointer ${course.color} hover:shadow-md transition duration-300`}
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
