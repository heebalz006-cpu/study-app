import React from 'react';
import logo from './logo.png';
import head from './head.png';
import imA from './imA.png';
import imB from './imB.png';
import imC from './imC.png';
import imD from './imD.png';
import imE from './imE.png';
export default function Filieres() {
  const selectFiliere = (filiere) => {
    alert(`Vous avez sélectionné : ${filiere}`);
    console.log(`Filière sélectionnée: ${filiere}`);
  };

  const handleMenuClick = () => {
    alert('Menu ouvert');
  };

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

        /* Header */
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

        /* Decorative Elements */
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

        /* Hero Section */
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

        /* Choisir la filière */
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

        /* Filières Cards */
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

        /* Card Backgrounds */
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

        /* Connection Lines */
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
        {/* Decorative Elements */}
        <div className="ellipse-11"></div>
        <div className="ellipse-12"></div>
        <div className="ellipse-13"></div>
        <div className="ellipse-14"></div>

        {/* Star */}
        <div className="star star-1"></div>

        {/* Header */}
        <div className="menu-icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          <img src={logo} alt="OFPPT Logo" />
        </div>

        <h1 className="title">Filières</h1>

        {/* Hero Section */}
        <div className="hero-box">
          <div className="hero-image">
            <img src={head} alt="Development" />
          </div>
        </div>

        {/* Choisir la filière */}
        <div className="filiere-selector">
          <span>Choisir La filière</span>
          <div className="arrows">
            <span className="arrow">&gt;&gt;&gt;</span>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>

        {/* Filières Cards */}
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