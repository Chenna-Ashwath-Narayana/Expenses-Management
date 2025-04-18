import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Homepage from './assets/homepage/Homepage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
