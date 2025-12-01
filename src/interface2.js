import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import bg from './bg.png';
import yearOne from './yearOne.png';
import yearTwo from './yearTwo.png';
import yearThree from './yearThree.png';
export default function EducationLevel() {
  const [buttonAnimations, setButtonAnimations] = useState([false, false, false]);

  useEffect(() => {
    // Animation au chargement
    const buttons = [0, 1, 2];
    buttons.forEach((index) => {
      setTimeout(() => {
        setButtonAnimations(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 200 * (index + 1));
    });
  }, []);

  const selectYear = (year) => {
    alert(`Vous avez sélectionné la ${year}${year === 1 ? 'ère' : 'ème'} année`);
    console.log(`Année sélectionnée: ${year}`);
  };

  const buttonStyle = (index) => ({
    opacity: buttonAnimations[index] ? '1' : '0',
    transform: buttonAnimations[index] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.5s ease'
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Londrina+Sketch&family=Marko+One&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Marko One', serif;
            background: #FFFFFF;
            overflow-x: hidden;
        }

        .container {
            position: relative;
            width: 440px;
            height: 956px;
            margin: 0 auto;
            background: #FFFFFF;
            overflow: hidden;
        }

        .ellipse-1 {
            position: absolute;
            width: 580.77px;
            height: 327.09px;
            left: -61.88px;
            top: -100.86px;
            background: linear-gradient(180deg, #36C0ED 48.08%, #C8F1FF 100%);
            border-radius: 50%;
        }

        .ellipse-2 {
            position: absolute;
            width: 581px;
            height: 267px;
            left: -62px;
            top: -90px;
            background: linear-gradient(180deg, #C6F1FF 37.5%, #36C0ED 100%);
            border-radius: 50%;
        }

        .ellipse-3 {
            position: absolute;
            width: 57px;
            height: 583px;
            left: -41.16px;
            top: 390.18px;
            background: #C6F1FF;
            border-radius: 50%;
            transform: rotate(-2deg);
        }

        .ellipse-4 {
            position: absolute;
            width: 158.16px;
            height: 367.23px;
            left: -111.68px;
            top: 692.46px;
            background: #0D2B47;
            border-radius: 50%;
            transform: rotate(-20deg);
        }

        .logo {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 5px;
            top: 8px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 20px;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .header {
            position: absolute;
            width: 394px;
            left: 80px;
            top: 23px;
            font-family: 'Marko One', serif;
            font-size: 40px;
            line-height: 54px;
            color: #013A76;
            z-index: 10;
        }

        .illustration {
            position: absolute;
            width: 373px;
            height: 215px;
            left: 33px;
            top: 156px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5;
        }

        .illustration img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .title {
            position: absolute;
            width: 326px;
            left: 55px;
            top: 382px;
            font-family: 'Londrina Sketch', cursive;
            font-size: 40px;
            line-height: 47px;
            color: #031330;
            text-align: center;
            z-index: 10;
        }

        .year-button {
            width: 100%;
            height: 82px;
            border: none;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 20px;
        }

        .year-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .year-button:active {
            transform: translateY(-2px);
        }

        .button-1 {
            top: 515px;
            background: linear-gradient(180deg, #74B5F1 8.17%, #1164B2 73.08%);
        }

        .button-2 {
            top: 639px;
            background: linear-gradient(180deg, #1164B2 25.96%, #003363 78.37%);
        }

        .button-3 {
            top: 759px;
            background: linear-gradient(180deg, #044480 27.88%, #0B335A 53.37%);
        }

        .year-text {
            font-family: 'Marko One', serif;
            font-size: 40px;
            line-height: 54px;
            color: #FFFFFF;
        }

        .year-icon {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .year-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media (max-width: 440px) {
            .container {
                width: 100%;
            }
        }
      `}</style>

      <div className="container">
        {/* Decorative Elements */}
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
        <div className="ellipse-4"></div>

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Header */}
        <h1 className="header">Education Level</h1>

        {/* Illustration */}
        <div className="illustration">
          <div className="illustration-content">
            <img src={bg} alt="bg" />
          </div>
        </div>

        {/* Title */}
        <h2 className="title">Choisir votre année !</h2>

        {/* Buttons */}
        <button 
          className="year-button button-1" 
          style={{ position: 'absolute', top: '515px', left: '44px', ...buttonStyle(0) }} 
          onClick={() => selectYear(1)}
        >
          <span className="year-text">1ère année</span>
          <div className="year-icon">
            <img src={yearOne} alt="year one icon" />
          </div>
        </button>

        <button 
          className="year-button button-2" 
          style={{ position: 'absolute', top: '639px', left: '44px', ...buttonStyle(1) }} 
          onClick={() => selectYear(2)}
        >
          <span className="year-text">2ème année</span>
          <div className="year-icon">
            <img src={yearTwo} alt="year two icon" />
          </div>
        </button>

        <button 
          className="year-button button-3" 
          style={{ position: 'absolute', top: '759px', left: '44px', ...buttonStyle(2) }} 
          onClick={() => selectYear(3)}
        >
          <span className="year-text">3ème année</span>
          <div className="year-icon">
            <img src={yearThree} alt="year three icon" />
          </div>
        </button>
      </div>
    </>
  );
}