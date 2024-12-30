// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.scss'
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section className="product">
        <div className="card-container">
          <Card 
            title="Fin AI Agent"
            description="The human-quality AI agent that works with any help desk"
            imgSrc="../src/assets/images/demo1.png"
            alt="Fin AI Agent demo"
          />
          <Card 
            title="Customer Service Platform"
            description="The AI-first platform trusted by thousands of support leaders"
            imgSrc="../src/assets/images/demo2.png"
            alt="Customer Service Platform demo"
          />
        </div>
      </section>
    </div>
  );
};

export default App;



// function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
          // </p>
  //   </>
  // )
// }

// export default App
