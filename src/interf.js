import React, { useState, useEffect } from 'react';
import bottom from './bottom.png';
import group2 from './group2.png';
import logo from './logo.png';
import bg from './bg.png';
import yearOne from './yearOne.png';
import yearTwo from './yearTwo.png';
import yearThree from './yearThree.png';
import head from './head.png';
import imA from './imA.png';
import imB from './imB.png';
import imC from './imC.png';
import imD from './imD.png';
import imE from './imE.png';

export default function Interface() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [buttonAnimations, setButtonAnimations] = useState([false, false, false]);

  useEffect(() => {
    if (currentScreen === 2) {
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
    }
  }, [currentScreen]);

  const selectYear = (year) => {
    console.log(`Année sélectionnée: ${year}`);
    setCurrentScreen(3); // Aller vers Interface 3
  };

  const selectFiliere = (filiere) => {
    alert(`Vous avez sélectionné : ${filiere}`);
    console.log(`Filière sélectionnée: ${filiere}`);
  };

  const handleMenuClick = () => {
    setCurrentScreen(1); // Retour à Interface 1
  };

  const buttonStyle = (index) => ({
    opacity: buttonAnimations[index] ? '1' : '0',
    transform: buttonAnimations[index] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.5s ease'
  });

  // Interface 1
  if (currentScreen === 1) {
    return (
      <>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body, html {
            height: 100%;
          }
          
          .container {
            background-color: white;
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .top {
            position: relative;
            width: 100%;
            height: 50%;
          }
          
          .imgA {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .bottom {
            position: relative;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .imgB {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .btn-container {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .btn {
            background-color: rgb(2, 2, 59);
            padding: 15px 40px;
            border-radius: 20px;
            color: white;
            font-family: 'Courier New', Courier, monospace;
            border: none;
            cursor: pointer;
          }
          
          .btn h2 {
            margin: 0;
          }

          @media (min-width: 1000px) {
            .container {
              flex-direction: row;
              height: 100vh;
            }
            
            .top {
              margin-right: 5px;
              width: 50%;
              height: 100%;
              order: 1;
            }
            
            .bottom {
              width: 50%;
              height: 100%;
              order: 2;
            }
          }
        `}</style>
        
        <div className="container">
          <div className="top">
            <img src={group2} alt="image" className="imgA" />
          </div>
          <div className="bottom">
            <img src={bottom} alt="image" className="imgB" />
            <div className="btn-container">
              <button className="btn" onClick={() => setCurrentScreen(2)}>
                <h2>Commencer</h2>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Interface 2
  if (currentScreen === 2) {
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
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
          <div className="ellipse-3"></div>
          <div className="ellipse-4"></div>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <h1 className="header">Education Level</h1>

          <div className="illustration">
            <div className="illustration-content">
              <img src={bg} alt="bg" />
            </div>
          </div>

          <h2 className="title">Choisir votre année !</h2>

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

  // Interface 3
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marko+One&display=swap');

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

        .menu-icon {
            position: absolute;
            width: 32px;
            height: 32px;
            left: 14px;
            top: 7px;
            cursor: pointer;
            z-index: 100;
        }

        .menu-icon span {
            display: block;
            width: 24px;
            height: 3px;
            background: #1E1E1E;
            margin: 5px auto;
            border-radius: 2px;
        }

        .logo {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 53px;
            top: 6px;
            z-index: 100;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .title {
            position: absolute;
            width: 299px;
            height: 92px;
            left: 141px;
            top: 13px;
            font-size: 40px;
            line-height: 54px;
            color: #0F2B4F;
            z-index: 100;
        }

        .ellipse-11 {
            position: absolute;
            width: 325.16px;
            height: 210.24px;
            left: 186.47px;
            top: -153.13px;
            background: #0D2B47;
            border-radius: 50%;
            transform: rotate(45deg);
        }

        .ellipse-12 {
            position: absolute;
            width: 96.61px;
            height: 59.87px;
            left: 365px;
            top: -22px;
            background: #72B8D7;
            border-radius: 50%;
        }

        .ellipse-13 {
            position: absolute;
            width: 86.27px;
            height: 47.26px;
            left: 387px;
            top: 8px;
            background: #3A88AA;
            border-radius: 50%;
            transform: rotate(30deg);
        }

        .ellipse-14 {
            position: absolute;
            width: 80.32px;
            height: 46.32px;
            left: 318.47px;
            top: -42.46px;
            background: #86D1F1;
            border-radius: 50%;
            transform: rotate(-25deg);
        }

        .star {
            position: absolute;
            background: #FFFB25;
            border-radius: 1px;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .hero-box {
            position: absolute;
            width: 395px;
            height: 192px;
            left: 15px;
            top: 92px;
            background: #041E36;
            border-radius: 20px;
            overflow: hidden;
        }

        .hero-image {
            position: absolute;
            width: 299px;
            height: 308px;
            left: 67px;
            top: -48px;
        }

        .hero-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .filiere-selector {
            position: absolute;
            width: 231px;
            height: 24px;
            left: 14px;
            top: 309px;
            background: #F7DCDC;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 0 13px;
            justify-content: space-between;
            z-index: 10;
        }

        .filiere-selector span {
            font-size: 15px;
            line-height: 20px;
            color: #32256C;
        }

        .arrows {
            display: flex;
            gap: 8px;
        }

        .arrow {
            font-size: 20px;
            color: #1D1B20;
            cursor: pointer;
        }

        .filiere-card {
            position: absolute;
            width: 165px;
            height: 140px;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .filiere-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .filiere-card-image {
            position: absolute;
            width: 151px;
            height: 86px;
            left: 7px;
            top: 8px;
            border-radius: 15px;
            overflow: hidden;
        }

        .filiere-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .filiere-card-title {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
            color: #32256C;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .card-dev {
            left: 15px;
            top: 362px;
            background: #8BDCFF;
        }

        .card-gestion {
            left: 245px;
            top: 487px;
            background: #FFD6A4;
        }

        .card-elec {
            left: 15px;
            top: 619px;
            background: rgba(145, 255, 154, 0.8);
        }

        .card-meca {
            left: 245px;
            top: 751px;
            background: #DED5FC;
        }

        .card-logistique {
            left: 17px;
            top: 883px;
            background: rgba(255, 202, 224, 0.79);
        }

        .line {
            position: absolute;
            border: 2px solid #ddd;
            border-radius: 10px;
        }

        .line-1 {
            width: 152px;
            height: 71px;
            left: 180px;
            top: 429px;
            border-left: none;
            border-top: 2px solid #8BDCFF;
            border-right: 2px solid #FFD6A4;
            border-bottom: none;
            border-top-right-radius: 20px;
        }

        .line-2 {
            width: 219px;
            height: 71px;
            left: 26px;
            top: 554px;
            border-right: none;
            border-top: 2px solid #FFD6A4;
            border-left: 2px solid #A7FFAF;
            border-bottom: none;
            border-top-left-radius: 20px;
        }

        .line-3 {
            width: 152px;
            height: 71px;
            left: 180px;
            top: 682px;
            border-left: none;
            border-top: 2px solid #A7FFAF;
            border-right: 2px solid #DED5FC;
            border-bottom: none;
            border-top-right-radius: 20px;
        }

        .line-4 {
            width: 219px;
            height: 71px;
            left: 26px;
            top: 812px;
            border-right: none;
            border-top: 2px solid #DED5FC;
            border-left: 2px solid #FFD5E7;
            border-bottom: none;
            border-top-left-radius: 20px;
        }
      `}</style>

      <div className="container">
        <div className="ellipse-11"></div>
        <div className="ellipse-12"></div>
        <div className="ellipse-13"></div>
        <div className="ellipse-14"></div>

        <div className="star star-1"></div>

        <div className="menu-icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          <img src={logo} alt="OFPPT Logo" />
        </div>

        <h1 className="title">Filières</h1>

        <div className="hero-box">
          <div className="hero-image">
            <img src={head} alt="Development" />
          </div>
        </div>

        <div className="filiere-selector">
          <span>Choisir La filière</span>
          <div className="arrows">
            <span className="arrow">&gt;&gt;&gt;</span>
          </div>
        </div>

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>

        <div className="filiere-card card-dev" onClick={() => selectFiliere('Développement Digital')}>
          <div className="filiere-card-image">
            <img src={imA} alt="Développement Digital" />
          </div>
          <div className="filiere-card-title">Développement<br />Digital</div>
        </div>

        <div className="filiere-card card-gestion" onClick={() => selectFiliere('Gestion des entreprises')}>
          <div className="filiere-card-image">
            <img src={imB} alt="Gestion des entreprises" />
          </div>
          <div className="filiere-card-title">Gestion des<br />entreprise</div>
        </div>

        <div className="filiere-card card-elec" onClick={() => selectFiliere('Électricité')}>
          <div className="filiere-card-image">
            <img src={imC} alt="Électricité" />
          </div>
          <div className="filiere-card-title">Électricité</div>
        </div>

        <div className="filiere-card card-meca" onClick={() => selectFiliere('Mécanique')}>
          <div className="filiere-card-image">
            <img src={imD} alt="Mécanique" />
          </div>
          <div className="filiere-card-title">Mécanique</div>
        </div>

        <div className="filiere-card card-logistique" onClick={() => selectFiliere('Logistique')}>
          <div className="filiere-card-image">
            <img src={imE} alt="Logistique" />
          </div>
          <div className="filiere-card-title">Logistique</div>
        </div>
      </div>
    </>
  );
}