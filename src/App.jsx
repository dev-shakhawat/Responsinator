import React, { useState } from 'react';

const devices = [
  { name: 'iPhone 13', width: 390, height: 1080 },
  { name: 'iPad', width: 810, height: 1080 },
  { name: 'Laptop', width: 1024, height: 768 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Over Size Desktop', width: 1920, height: 1080 },
];

const App = () => {
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleLoadUrl = () => {
    if (inputUrl.startsWith('http')) {
      setUrl(inputUrl);
    } else {
      alert('Please enter a valid URL with http:// or https://');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-start">
      <div className="text-2xl font-bold mb-4"> 
        <span>Multiple Screens Responsinator made by</span>
        <a className='text-blue-500 ml-2' rel="noopener noreferrer" href="https://github.com/dev-shakhawat" target="_blank">Md. Shakhawat Hossain</a>  
      </div>

      {/* URL ইনপুট */}
      <div className="w-full max-w-xl flex mb-4">
        <input
          type="text"
          placeholder="Enter website URL"
          value={inputUrl}
          onChange={handleInputChange}
          className="flex-1 p-2 border border-gray-400 rounded-l"
        />
        <button
          onClick={handleLoadUrl}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Load
        </button>
      </div>

      {/* all devices */}
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {devices.map((device) => (
          <div key={device.name} className="border-4 border-gray-400 rounded-lg overflow-hidden shadow-lg m-2">
            <div className="bg-gray-200 text-center font-semibold p-1">{device.name}</div>
            <div
              style={{ width: device.width, height: device.height }}
              className="overflow-hidden"
            >
              {url ? (
                <iframe
                  src={url}
                  title={device.name}
                  className="w-full h-full"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm p-2">
                  Enter URL and click Load
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;