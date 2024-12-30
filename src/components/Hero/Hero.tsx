import React from 'react';
import './Hero.scss'; // Create and link this file

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
        <button className="button button--outline">View demo</button>
        <button className="button button--primary">Start free trial</button>
      </div>
    </section>
  );
};

export default Hero;
