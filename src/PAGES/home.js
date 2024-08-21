import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">

            <div className='home-heading'>
                <h1>Unlock Your Full Potential</h1>
                <h2>Streamline your tasks, stay focused, and achieve more with our productivity app.</h2>
            </div>
            <div className='home-inputs'>
                <Outlet/>
            </div>

           
        </div>
    );
}

export default Home;
