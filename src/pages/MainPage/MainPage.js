import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MainPage.css';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease',
      once: false
    });
    AOS.refresh();
  }, []);

  return (
    <div className="main-page">
      <img src="/images/border1.png" alt="border" className="top-left-image" data-aos="fade-down" />
      <img src="/images/border2.png" alt="border" className="top-right-image" data-aos="fade-down" />
      
      <h1 className="main-title" data-aos="fade-up">Most Awaited !</h1>

      <p className="main-para" data-aos="fade-up">
        a world of cyber security to learn, compete and grow.<br />
        Some more content about what we offer will come here
      </p>

      <button className="btn" data-aos="fade-up">
        <a href="#started" alt="">Get Started Now &#8594;</a>
      </button>

      <div className="semicircle" data-aos="fade-up">
        <img src="/images/circle.png" alt="border" className="semicircle" />
        <img src="/images/analytics.png" alt="border" className="center-image" data-aos="fade-up" />
      </div>

      <h2 className="heading1" data-aos="fade-up">Things users love</h2>
      <h2 className="heading2" data-aos="fade-up">about X-ACK</h2>

      <div className="card-container" data-aos="fade-up">
        <div className="card1">
          <h3>Users appreciate X-ACK's intuitive interface</h3>
          <p>An intuitive interface means that users can quickly understand how to use the platform without the need for extensive training or guidance.</p>
        </div>
        <div className="card2">
          <h3>Robust Learning Tools</h3>
          <p>Something about our learning tools and features goes here</p>
        </div>
      </div>

      <div className="card-container" data-aos="fade-up">
        <div className="card3">
          <h3>Flexible Difficulty</h3>
          <p>We have sophistically designed machines for all beginner to advance level players</p>
        </div>
        <div className="card4">
          <h3>Community</h3>
          <p>We fostered a nurturing community ...some more 1 line about community</p>
        </div>
        <div className="card5">
          <h3>Gamified UI elements</h3>
          <p>Info about earning badges and respect from players and machines. Gamified features</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
