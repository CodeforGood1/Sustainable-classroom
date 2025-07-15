import { useState } from 'react'

function CodingWorkbench() {
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('// Write your code here')
  const [output, setOutput] = useState('')

  const handleRunCode = () => {
    // Placeholder logic (backend integration later)
    setOutput(`Running ${language} code...`)
  }

  return (
    <div className="min-h-screen bg-light p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Coding Workbench</h1>

      {/* Language Selector */}
      <div className="mb-4">
        <label className="text-sm font-medium text-dark mr-2">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      {/* Code Editor */}
      <textarea
        className="w-full h-64 p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      {/* Run Button */}
      <button
        onClick={handleRunCode}
        className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800"
      >
        Run Code
      </button>

      {/* Output Area */}
      <div className="mt-6 bg-white p-4 rounded-lg border">
        <h2 className="text-lg font-semibold text-dark mb-2">Output:</h2>
        <pre className="text-sm bg-gray-100 p-2 rounded-md">{output}</pre>
      </div>
    </div>
  )
}

export default CodingWorkbench
