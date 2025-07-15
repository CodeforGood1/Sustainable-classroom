import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Login from './pages/Login'
import ProgressTracker from './pages/ProgressTracker'
import TestKnowledge from './pages/TestKnowledge'
import StudentProfile from './pages/StudentProfile'
import CodingWorkbench from './pages/CodingWorkbench'
import TextLearning from './pages/TextLearning'
import VideoLearning from './pages/VideoLearning'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/progress" element={<ProgressTracker />} />
      <Route path="/test" element={<TestKnowledge />} />
      <Route path="/profile" element={<StudentProfile />} />
      <Route path="/courses/code" element={<CodingWorkbench />} />
      <Route path="/courses/text" element={<TextLearning />} />
      <Route path="/courses/video" element={<VideoLearning />} />
    </Routes>
  )
}

export default App
