import React from 'react';
import './Hero.scss'; 
import Button from '../Button/Button'; 

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <h1 className="hero__title">The best AI Agent and AI-first Customer Service Platform</h1>
        <p className="hero__description">
          Fin is the first AI agent that delivers human-quality service. Use Fin on your existing platform, or Intercom's complete AI-first customer service platform.
        </p>
      </div>
      <div className="hero__button-container">
        <Button label="View demo" type="outline" onClick={() => console.log('View demo clicked')} />
        <Button label="Start free trial" type="primary" onClick={() => console.log('Start free trial clicked')} />
      </div>
    </section>
  );
};

export default Hero;
