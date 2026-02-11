import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import LoadingScreen from './pages/LoadingScreen';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;