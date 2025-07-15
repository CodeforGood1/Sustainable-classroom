import { useState } from 'react'

function VideoLearning() {
  const videos = [
    {
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript — syntax, variables, and control structures.',
      url: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      resources: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide']
    },
    {
      title: 'Async JS & Promises',
      description: 'Understand asynchronous behavior in JavaScript and how to handle it with promises.',
      url: 'https://www.youtube.com/embed/PoRJizFvM7s',
      resources: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises']
    },
    {
      title: 'JavaScript DOM Manipulation',
      description: 'Manipulate HTML elements using JavaScript to create dynamic pages.',
      url: 'https://www.youtube.com/embed/0ik6X4DJKCc',
      resources: ['https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model']
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const current = videos[currentIndex]

  return (
    <div className="min-h-screen bg-light p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Video-Based Learning</h1>

      <div className="bg-white p-6 rounded-2xl shadow border">
        {/* Video Title */}
        <h2 className="text-2xl font-semibold text-primary mb-2">
          {current.title}
        </h2>

        {/* Embedded Video */}
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={current.url}
            title={current.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{current.description}</p>

        {/* Resources */}
        <div className="mb-4">
          <h3 className="font-medium text-dark mb-1">Related Resources:</h3>
          <ul className="list-disc list-inside text-sm text-blue-700">
            {current.resources.map((link, i) => (
              <li key={i}>
                <a href={link} target="_blank" rel="noreferrer" className="underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="px-4 py-2 bg-secondary text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={currentIndex === videos.length - 1}
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

export default VideoLearning
