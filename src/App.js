import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar } from './components';
import { Ecommerce, Employee } from './pages';
import Line from './pages/Line';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div >
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar /></div>) :
            (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>)}
          <div className={`dark:bg-main-bg bg-gray-200 min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/employee" element={<Employee/>} />
                <Route path="/lines" element={<Line/>} />
                </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
