import React, { useState, useEffect } from 'react';
import Group from './Group.png';

export default function OFPPTApp() {
  const [activeDot, setActiveDot] = useState(1);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1200);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 481 && window.innerWidth < 768);
  const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(window.innerWidth <= 480);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1200);
      setIsSmallScreen(window.innerWidth >= 481 && window.innerWidth < 768);
      setIsExtraSmallScreen(window.innerWidth <= 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-cycling dots every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev % 3) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Button click handler
  const handleStart = () => {
    setButtonPressed(true);
    
    setTimeout(() => {
      setButtonPressed(false);
      alert('Bienvenue sur OFPPT! 🎓');
    }, 150);
  };

  // Responsive styles
  const getContainerStyles = () => {
    const baseStyle = {
      position: 'relative',
      width: '100%',
      maxWidth: '440px',
      height: '956px',
      background: '#FFFFFF',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };

    if (isLargeScreen) {
      return { ...baseStyle, maxWidth: '540px', height: '1050px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, maxWidth: '500px', height: '1000px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, maxWidth: '420px', height: '900px', borderRadius: '15px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, maxWidth: '100%', height: '100vh', borderRadius: '0' };
    }
    return baseStyle;
  };

  const getGradientStyles = () => {
    const baseStyle = {
      position: 'absolute',
      width: '100%',
      height: '573px',
      top: '-44px',
      background: 'linear-gradient(180deg, #C6F1FF 0%, #2BCBFE 75.48%)',
      borderRadius: '65px',
      zIndex: 1
    };

    if (isLargeScreen) {
      return { ...baseStyle, height: '650px', top: '-50px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, height: '610px', top: '-48px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, height: '540px', top: '-40px', borderRadius: '60px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, height: '50vh', top: '-30px', borderRadius: '50px' };
    }
    return baseStyle;
  };

  const getImageStyles = () => {
    const baseStyle = {
      position: 'absolute',
      width: '362px',
      height: '730px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '21px',
      zIndex: 3,
      backgroundImage: `url(${Group})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };

    if (isLargeScreen) {
      return { ...baseStyle, width: '420px', height: '800px', top: '30px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, width: '390px', height: '770px', top: '25px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, width: '330px', height: '680px', top: '20px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, width: '85%', height: '65%', top: '15px' };
    }
    return baseStyle;
  };

  const getBubbleLargeStyles = () => {
    const baseStyle = {
      position: 'absolute',
      width: '400px',
      height: '355px',
      left: '90px',
      top: '603px',
      background: '#42D0FF',
      opacity: 0.3,
      borderRadius: '50%',
      zIndex: 2,
      animation: 'float 6s ease-in-out infinite'
    };

    if (isLargeScreen) {
      return { ...baseStyle, width: '480px', height: '420px', left: '110px', top: '670px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, width: '440px', height: '390px', left: '100px', top: '640px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, width: '350px', height: '310px', left: '80px', top: '560px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, width: '280px', height: '250px', left: '60px', top: '69vh' };
    }
    return baseStyle;
  };

  const getBubbleSmallStyles = () => {
    const baseStyle = {
      position: 'absolute',
      width: '142px',
      height: '143px',
      left: '18px',
      top: '683px',
      background: 'rgba(254, 197, 127, 0.49)',
      borderRadius: '50%',
      zIndex: 2,
      animation: 'float 6s ease-in-out infinite',
      animationDelay: '1s'
    };

    if (isLargeScreen) {
      return { ...baseStyle, width: '170px', height: '170px', left: '25px', top: '760px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, width: '155px', height: '155px', left: '22px', top: '720px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, width: '120px', height: '120px', left: '18px', top: '630px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, width: '100px', height: '100px', left: '15px', top: '70vh' };
    }
    return baseStyle;
  };

  const getDotsContainerStyles = () => {
    const baseStyle = {
      position: 'absolute',
      display: 'flex',
      gap: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '708px',
      zIndex: 4
    };

    if (isLargeScreen) {
      return { ...baseStyle, top: '790px', gap: '15px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, top: '750px', gap: '14px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, top: '660px', gap: '11px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, top: '60vh', gap: '10px' };
    }
    return baseStyle;
  };

  const getDotStyles = (isActive) => {
    let width = '42px';
    let height = '28px';

    if (isLargeScreen) {
      width = '48px';
      height = '32px';
    } else if (isMediumScreen) {
      width = '45px';
      height = '30px';
    } else if (isSmallScreen) {
      width = '38px';
      height = '26px';
    } else if (isExtraSmallScreen) {
      width = '35px';
      height = '24px';
    }

    return {
      width,
      height,
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      transform: isActive ? 'scale(1.2)' : 'scale(1)'
    };
  };

  const getButtonContainerStyles = () => {
    const baseStyle = {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '746px',
      zIndex: 5
    };

    if (isLargeScreen) {
      return { ...baseStyle, top: '840px' };
    }
    if (isMediumScreen) {
      return { ...baseStyle, top: '800px' };
    }
    if (isSmallScreen) {
      return { ...baseStyle, top: '710px' };
    }
    if (isExtraSmallScreen) {
      return { ...baseStyle, top: '78vh' };
    }
    return baseStyle;
  };

  const getButtonStyles = () => {
    let width = '214px';
    let height = '66px';
    let borderRadius = '20px';

    if (isLargeScreen) {
      width = '240px';
      height = '72px';
    } else if (isMediumScreen) {
      width = '230px';
      height = '70px';
    } else if (isSmallScreen) {
      width = '200px';
      height = '62px';
    } else if (isExtraSmallScreen) {
      width = '180px';
      height = '58px';
      borderRadius = '18px';
    }

    return {
      position: 'relative',
      width,
      height,
      background: 'linear-gradient(135deg, #1a3a52 0%, #2d5f8d 100%)',
      borderRadius,
      border: 'none',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(3, 32, 58, 0.3)',
      transform: buttonPressed ? 'scale(0.95)' : 'scale(1)'
    };
  };

  const getButtonTextStyles = () => {
    let fontSize = '24px';

    if (isLargeScreen) {
      fontSize = '28px';
    } else if (isMediumScreen) {
      fontSize = '26px';
    } else if (isSmallScreen) {
      fontSize = '23px';
    } else if (isExtraSmallScreen) {
      fontSize = '20px';
    }

    return {
      position: 'relative',
      fontFamily: "'Lemonada', cursive",
      fontWeight: 700,
      fontSize,
      color: '#FFFFFF',
      zIndex: 1
    };
  };

  const getButtonGlowStyles = () => {
    let width = '245px';
    let height = '88px';

    if (isLargeScreen) {
      width = '270px';
      height = '95px';
    } else if (isMediumScreen) {
      width = '260px';
      height = '92px';
    } else if (isSmallScreen) {
      width = '230px';
      height = '82px';
    } else if (isExtraSmallScreen) {
      width = '210px';
      height = '75px';
    }

    return {
      position: 'absolute',
      width,
      height,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(11, 64, 170, 0.3)',
      borderRadius: '50%',
      pointerEvents: 'none'
    };
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@700&family=Poppins:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }

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
        <div style={getContainerStyles()}>
          
          {/* Gradient Background */}
          <div style={getGradientStyles()} />

          {/* Main Image: Logo OFPPT + People + Blue Arrow */}
          <div style={getImageStyles()} />

          {/* Decoration Bubbles */}
          <div style={getBubbleLargeStyles()} />
          <div style={getBubbleSmallStyles()} />

          {/* Pagination Dots */}
          <div style={getDotsContainerStyles()}>
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                style={{
                  ...getDotStyles(activeDot === dot),
                  background: activeDot === dot 
                    ? 'rgba(238, 167, 191, 1)' 
                    : dot === 1 
                      ? 'rgba(238, 167, 191, 0.42)'
                      : dot === 2
                        ? 'rgba(238, 167, 191, 0.67)'
                        : 'rgba(238, 167, 169, 0.62)'
                }}
              />
            ))}
          </div>

          {/* Start Button */}
          <div style={getButtonContainerStyles()}>
            <button
              onClick={handleStart}
              style={getButtonStyles()}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(2, 32, 58, 0.4)';
              }}
              onMouseLeave={(e) => {
                if (!buttonPressed) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 16, 29, 0.3)';
                }
              }}
            >
              {/* Button Glow Effect */}
              <div style={getButtonGlowStyles()} />
              
              {/* Button Text */}
              <span style={getButtonTextStyles()}>
                Commencer
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}