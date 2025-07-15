function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-light">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-primary">User Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
