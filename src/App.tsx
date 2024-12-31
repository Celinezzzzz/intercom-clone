import './App.scss'
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';


const App: React.FC = () => {
  return (
    <div className="first-section">
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
