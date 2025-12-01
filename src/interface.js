import React, { useState, useEffect } from 'react';
import Group from './Group.png';

export default function OFPPTApp() {
  const [activeDot, setActiveDot] = useState(1);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    isLarge: window.innerWidth >= 1200,
    isMedium: window.innerWidth >= 768 && window.innerWidth < 1200,
    isSmall: window.innerWidth >= 481 && window.innerWidth < 768,
    isXSmall: window.innerWidth <= 480
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        isLarge: width >= 1200,
        isMedium: width >= 768 && width < 1200,
        isSmall: width >= 481 && width < 768,
        isXSmall: width <= 480
      });
    };
    
    const interval = setInterval(() => {
      setActiveDot(prev => (prev % 3) + 1);
    }, 3000);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const handleStart = () => {
    setButtonPressed(true);
    setTimeout(() => {
      setButtonPressed(false);
      alert('Bienvenue sur OFPPT! 🎓');
    }, 150);
  };

  const getResponsiveValue = (values) => {
    const { isLarge, isMedium, isSmall, isXSmall } = screenSize;
    if (isLarge) return values.large;
    if (isMedium) return values.medium;
    if (isSmall) return values.small;
    if (isXSmall) return values.xSmall;
    return values.default;
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: getResponsiveValue({
      large: '100%', medium: '100%', small: '100%', xSmall: '100%', default: '100%'
    }),
    height: getResponsiveValue({
      large: '1050px', medium: '1000px', small: '900px', xSmall: '100vh', default: '956px'
    }),
    background: '#FFFFFF',
    borderRadius: getResponsiveValue({
      large: '20px', medium: '20px', small: '15px', xSmall: '0', default: '20px'
    }),
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const gradientStyle = {
    position: 'absolute',
    width: getResponsiveValue({
      large: '50%', medium: '100%', small: '100%', xSmall: '100%', default: '100%'
    }),
    height: getResponsiveValue({
      large: '100%', medium: '610px', small: '540px', xSmall: '50vh', default: '573px'
    }),
    top: getResponsiveValue({
      large: '-50px', medium: '-48px', small: '-40px', xSmall: '-30px', default: '-44px'
    }),
    background: 'linear-gradient(180deg, #C6F1FF 0%, #2BCBFE 75.48%)',
    borderRadius: getResponsiveValue({
      large: '65px', medium: '65px', small: '60px', xSmall: '50px', default: '65px'
    }),
    zIndex: 1
  };

  const imageStyle = {
    position: 'absolute',
    width: getResponsiveValue({
      large: '50%', medium: '1200', small: '100%', xSmall: '100%%', default: '100%'
    }),
    height: getResponsiveValue({
      large: '100%', medium: '700px', small: '620px', xSmall: '620px', default: '620px'
    }),
    left: getResponsiveValue({
      large: '25%', medium: '50%', small: '50%', xSmall: '50%', default: '50%'
    }),
    transform: 'translateX(-50%)',
    top: getResponsiveValue({
      large: '30px', medium: '25px', small: '20px', xSmall: '15px', default: '21px'
    }),
    zIndex: 3,
    backgroundImage: `url(${Group})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const bubbleLargeStyle = {
    position: 'absolute',
    width: getResponsiveValue({
      large: '480px', medium: '300px', small: '280px', xSmall: '280px', default: '400px'
    }),
    height: getResponsiveValue({
      large: '420px', medium: '240px', small: '240px', xSmall: '250px', default: '355px'
    }),
    left: getResponsiveValue({
      large: '57%', medium: '27%', small: '25%', xSmall: '20%', default: '27%'
    }),
    top: getResponsiveValue({
      large: '390px', medium: '720px', small: '630px', xSmall: '69vh', default: '603px'
    }),
    background: '#42D0FF',
    opacity: 0.3,
    borderRadius: '50%',
    zIndex: 2,
    animation: 'float 6s ease-in-out infinite'
  };

  const bubbleSmallStyle = {
    ...bubbleLargeStyle,
    width: getResponsiveValue({
      large: '170px', medium: '155px', small: '120px', xSmall: '100px', default: '142px'
    }),
    height: getResponsiveValue({
      large: '170px', medium: '155px', small: '120px', xSmall: '100px', default: '143px'
    }),
    left: getResponsiveValue({
      large: '51%', medium: '155px', small: '18px', xSmall: '15px', default: '18px'
    }),
    top: getResponsiveValue({
      large: '380px', medium: '720px', small: '630px', xSmall: '70vh', default: '683px'
    }),
    background: 'rgba(254, 197, 127, 0.49)',
    animationDelay: '1s'
  };

  const dotsContainerStyle = {
    position: 'absolute',
    display: 'flex',
    gap: getResponsiveValue({
      large: '15px', medium: '14px', small: '11px', xSmall: '10px', default: '12px'
    }),
    left: getResponsiveValue({
      large: '74%', medium: '50%', small: '50%', xSmall: '50%', default: '50%'
    }),
    transform: 'translateX(-50%)',
    top: getResponsiveValue({
      large: '120px', medium: '620px', small: '600px', xSmall: '55vh', default: '708px'
    }),
    zIndex: 4
  };

  const getDotStyle = (isActive) => {
    const size = getResponsiveValue({
      large: { width: '48px', height: '32px' },
      medium: { width: '45px', height: '30px' },
      small: { width: '38px', height: '26px' },
      xSmall: { width: '35px', height: '24px' },
      default: { width: '42px', height: '28px' }
    });

    return {
      ...size,
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      transform: isActive ? 'scale(1.2)' : 'scale(1)'
    };
  };

  const buttonContainerStyle = {
    position: 'absolute',
    left: '50%',
    left: getResponsiveValue({
      large: '75%', medium: '50%', small: '50%', xSmall: '50%', default: '50%'
    }),
    transform: 'translateX(-50%)',
    top: getResponsiveValue({
      large: '550px', medium: '800px', small: '710px', xSmall: '78vh', default: '746px'
    }),
    zIndex: 5
  };

  const buttonStyle = {
    position: 'relative',
    width: getResponsiveValue({
      large: '240px', medium: '230px', small: '200px', xSmall: '180px', default: '214px'
    }),
    height: getResponsiveValue({
      large: '72px', medium: '70px', small: '62px', xSmall: '58px', default: '66px'
    }),
    background: 'linear-gradient(135deg, #1a3a52 0%, #2d5f8d 100%)',
    borderRadius: getResponsiveValue({
      large: '20px', medium: '20px', small: '20px', xSmall: '18px', default: '20px'
    }),
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(3, 32, 58, 0.3)',
    transform: buttonPressed ? 'scale(0.95)' : 'scale(1)'
  };

  const buttonGlowStyle = {
    position: 'absolute',
    width: getResponsiveValue({
      large: '270px', medium: '260px', small: '230px', xSmall: '210px', default: '245px'
    }),
    height: getResponsiveValue({
      large: '95px', medium: '92px', small: '82px', xSmall: '75px', default: '88px'
    }),
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(11, 64, 170, 0.3)',
    borderRadius: '50%',
    pointerEvents: 'none'
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@700&family=Poppins:wght@400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <div style={{
        fontFamily: "'Poppins', sans-serif",
        background: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <div style={containerStyle}>
          <div style={gradientStyle} />
          <div style={imageStyle} />
          <div style={bubbleLargeStyle} />
          <div style={bubbleSmallStyle} />
          
          <div style={dotsContainerStyle}>
            {[1, 2, 3].map(dot => (
              <div key={dot} style={{
                ...getDotStyle(activeDot === dot),
                background: activeDot === dot 
                  ? 'rgba(238, 167, 191, 1)' 
                  : dot === 1 
                    ? 'rgba(238, 167, 191, 0.42)'
                    : dot === 2
                      ? 'rgba(238, 167, 191, 0.67)'
                      : 'rgba(238, 167, 169, 0.62)'
              }} />
            ))}
          </div>

          <div style={buttonContainerStyle}>
            <button
              onClick={handleStart}
              style={buttonStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(2, 32, 58, 0.4)';
              }}
              onMouseLeave={e => {
                if (!buttonPressed) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 16, 29, 0.3)';
                }
              }}
            >
              <div style={buttonGlowStyle} />
              <span style={{
                position: 'relative',
                fontFamily: "'Lemonada', cursive",
                fontWeight: 700,
                fontSize: getResponsiveValue({
                  large: '28px', medium: '26px', small: '23px', xSmall: '20px', default: '24px'
                }),
                color: '#FFFFFF',
                zIndex: 1
              }}>
                Commencer
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}