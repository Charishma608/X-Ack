import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
