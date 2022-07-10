import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content">
          <Link to="/test" ><span className="main__content-title">start</span></Link>
        </div>
      </div>
    </main>
  )
}

export default Main;