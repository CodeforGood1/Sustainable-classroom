function CourseCard({ title, description, color }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow border ${color} hover:shadow-md transition duration-300`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default CourseCard
