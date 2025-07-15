import { useState } from 'react'

function TextLearning() {
  const modules = [
    {
      title: 'Introduction to JavaScript',
      content: `JavaScript is a scripting language used to create and control dynamic content on web pages.`,
      code: `console.log('Hello, World!');`
    },
    {
      title: 'Variables and Data Types',
      content: `In JavaScript, variables can be declared using var, let, or const. Data types include string, number, boolean, etc.`,
      code: `let name = 'Golden';\nconst age = 22;`
    },
    {
      title: 'Functions and Scope',
      content: `Functions in JS allow you to group code for reuse. They have access to the variables in their scope.`,
      code: `function greet(name) {\n  return 'Hello, ' + name;\n}`
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentModule = modules[currentIndex]

  return (
    <div className="min-h-screen bg-light p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Text-Based Learning</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">
        {/* Module Title */}
        <h2 className="text-2xl font-semibold text-primary mb-2">
          {currentModule.title}
        </h2>

        {/* Module Explanation */}
        <p className="text-gray-700 mb-4">
          {currentModule.content}
        </p>

        {/* Code Block */}
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono mb-4">
          {currentModule.code}
        </pre>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="px-4 py-2 bg-secondary text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={currentIndex === modules.length - 1}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default TextLearning
