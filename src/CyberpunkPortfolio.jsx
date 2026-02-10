import React, { useState, useEffect } from 'react';

export default function CyberpunkPortfolio() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-neon-blue">
      <style>{`
        :root {
          --cyber-black: #0d0208;
          --cyber-dark: #1a0f1f;
          --cyber-purple: #c369f0;
          --cyber-pink: #ff006e;
          --cyber-cyan: #00f5ff;
          --cyber-yellow: #ffbe0b;
          --neon-blue: #00ffff;
          --neon-pink: #ff10f0;
          --neon-purple: #a537fd;
          --card-bg: rgba(13, 2, 8, 0.8);
          --card-border: #b537f2;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'JetBrains Mono', monospace;
          background: var(--cyber-black);
          color: var(--neon-blue);
          line-height: 1.6;
          overflow-x: hidden;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              var(--cyber-purple) 2px,
              var(--cyber-purple) 4px
            ),
            radial-gradient(circle at 20% 50%, rgba(181, 55, 242, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(0, 245, 255, 0.2) 0%, transparent 50%);
          background-size: 100% 4px, 100% 100%, 100% 100%, 100% 100%;
          animation: cyberpunkPulse 4s ease-in-out infinite, scanlines 8s linear infinite;
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        body::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(181, 55, 242, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181, 55, 242, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: gridFloat 15s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes cyberpunkPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes scanlines {
          0% { background-position: 0 0, 0 0, 0 0, 0 0; }
          100% { background-position: 0 100%, 0 0, 0 0, 0 0; }
        }

        @keyframes gridFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        header {
          padding: 3rem 0;
          animation: fadeInDown 0.8s ease-out;
          position: relative;
        }

        header::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 0, 110, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatGlow 6s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.2); }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .terminal-prompt {
          font-size: 0.9rem;
          color: var(--neon-pink);
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 0.3s forwards;
          text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .terminal-prompt::before {
          content: '>>>';
          margin-right: 0.5rem;
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          color: var(--cyber-pink);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          animation: glitchTitle 8s infinite, slideInLeft 0.8s ease-out 0.5s both;
          text-transform: uppercase;
          text-shadow: 
            0 0 10px var(--cyber-pink),
            0 0 20px var(--cyber-pink),
            0 0 40px var(--cyber-pink),
            0 0 80px var(--neon-purple),
            0 0 120px var(--neon-purple);
          position: relative;
        }

        @keyframes glitchTitle {
          0%, 90%, 100% { 
            transform: translate(0);
            text-shadow: 
              0 0 10px var(--cyber-pink),
              0 0 20px var(--cyber-pink),
              0 0 40px var(--cyber-pink),
              0 0 80px var(--neon-purple),
              0 0 120px var(--neon-purple);
          }
          92% { 
            transform: translate(-2px, 2px);
            text-shadow: 
              2px 0 var(--neon-blue),
              -2px 0 var(--neon-pink);
          }
          94% { 
            transform: translate(2px, -2px);
            text-shadow: 
              -2px 0 var(--neon-blue),
              2px 0 var(--neon-pink);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .subtitle {
          font-size: 1.3rem;
          color: var(--neon-blue);
          margin-bottom: 1rem;
          animation: slideInLeft 0.8s ease-out 0.7s both;
          text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
          letter-spacing: 0.05em;
        }

        .contact-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
          animation: fadeIn 0.8s ease-out 1s both;
        }

        .contact-links a {
          color: var(--neon-blue);
          text-decoration: none;
          padding: 0.7rem 1.5rem;
          border: 2px solid var(--cyber-purple);
          border-radius: 0;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          position: relative;
          overflow: hidden;
          background: rgba(181, 55, 242, 0.1);
          text-shadow: 0 0 5px var(--neon-blue);
          clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .contact-links a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyber-pink), transparent);
          transition: left 0.5s ease;
          z-index: -1;
        }

        .contact-links a:hover::before {
          left: 100%;
        }

        .contact-links a::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid var(--cyber-pink);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-links a:hover::after {
          opacity: 1;
          animation: glitchBorder 0.3s;
        }

        @keyframes glitchBorder {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(-2px, 2px); }
          75% { transform: translate(2px, -2px); }
        }

        .contact-links a:hover {
          border-color: var(--neon-pink);
          background: rgba(255, 0, 110, 0.2);
          transform: translateY(-3px);
          box-shadow: 
            0 0 20px var(--cyber-pink),
            0 0 40px var(--cyber-pink),
            0 5px 30px rgba(255, 0, 110, 0.5);
          text-shadow: 0 0 10px var(--neon-pink);
        }

        section {
          margin: 4rem 0;
          animation: fadeInUp 0.8s ease-out both;
        }

        section:nth-child(1) { animation-delay: 0.2s; }
        section:nth-child(2) { animation-delay: 0.3s; }
        section:nth-child(3) { animation-delay: 0.4s; }
        section:nth-child(4) { animation-delay: 0.5s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1rem;
          position: relative;
        }

        .section-header::before {
          content: '▸▸';
          color: var(--cyber-pink);
          font-weight: 700;
          font-size: 1.5rem;
          text-shadow: 0 0 10px var(--cyber-pink);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        h2 {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--neon-blue);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
        }

        .section-header::after {
          content: '';
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--cyber-purple) 0%, transparent 100%);
          box-shadow: 0 0 5px var(--cyber-purple);
        }

        .profile-content {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          border-left: 4px solid var(--cyber-pink);
          padding: 2rem;
          border-radius: 0;
          line-height: 1.8;
          box-shadow: 
            0 0 20px rgba(181, 55, 242, 0.3),
            inset 0 0 20px rgba(181, 55, 242, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
        }

        .profile-content::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(181, 55, 242, 0.1) 50%,
            transparent 70%
          );
          animation: scan 3s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .profile-content:hover {
          transform: translateX(10px);
          box-shadow: 
            0 0 30px rgba(255, 0, 110, 0.5),
            0 0 60px rgba(181, 55, 242, 0.3),
            inset 0 0 30px rgba(255, 0, 110, 0.1);
          border-color: var(--cyber-pink);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .skill-tag {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          padding: 1rem;
          border-radius: 0;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          text-shadow: 0 0 5px currentColor;
        }

        .skill-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyber-pink), transparent);
          transition: left 0.5s ease;
        }

        .skill-tag::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid var(--neon-blue);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-tag:hover::before {
          left: 100%;
        }

        .skill-tag:hover::after {
          opacity: 1;
        }

        .skill-tag:hover {
          border-color: var(--neon-pink);
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 0 20px var(--cyber-pink),
            0 0 40px var(--cyber-purple),
            0 10px 30px rgba(255, 0, 110, 0.4);
          color: var(--neon-pink);
          text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
          background: rgba(255, 0, 110, 0.1);
        }

        .experience-grid {
          display: grid;
          gap: 1.5rem;
        }

        .experience-card {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          border-radius: 0;
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--neon-pink), var(--neon-blue));
          transform: scaleY(0);
          transition: transform 0.3s ease;
          box-shadow: 0 0 10px currentColor;
        }

        .experience-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 20px 20px 0;
          border-color: transparent var(--cyber-pink) transparent transparent;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .experience-card:hover::before {
          transform: scaleY(1);
        }

        .experience-card:hover::after {
          opacity: 1;
        }

        .experience-card:hover {
          border-color: var(--neon-pink);
          transform: translateX(10px);
          box-shadow: 
            0 0 30px rgba(0, 245, 255, 0.3),
            0 0 60px rgba(181, 55, 242, 0.2);
          background: rgba(181, 55, 242, 0.05);
        }

        .experience-card h3 {
          color: var(--neon-pink);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-family: 'Syne', sans-serif;
          text-shadow: 0 0 10px var(--neon-pink);
          letter-spacing: 0.05em;
        }

        .experience-card p {
          color: var(--neon-blue);
          opacity: 0.9;
        }

        .experience-card .duration {
          color: var(--cyber-yellow);
          font-size: 0.85rem;
          margin-top: 0.5rem;
          font-style: italic;
          text-shadow: 0 0 5px var(--cyber-yellow);
        }

        .interests-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .interest-item {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          padding: 0.75rem 1.5rem;
          border-radius: 0;
          color: var(--neon-blue);
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
          text-shadow: 0 0 5px currentColor;
          overflow: hidden;
        }

        .interest-item::before {
          content: '◆';
          margin-right: 0.5rem;
          color: var(--cyber-pink);
          text-shadow: 0 0 10px var(--cyber-pink);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .interest-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, var(--cyber-pink), var(--neon-blue));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .interest-item:hover::after {
          opacity: 0.3;
        }

        .interest-item:hover {
          border-color: var(--neon-pink);
          color: var(--neon-pink);
          transform: scale(1.1) rotate(-2deg);
          box-shadow: 
            0 0 20px var(--cyber-pink),
            0 0 40px var(--cyber-purple),
            0 8px 30px rgba(255, 0, 110, 0.4);
          text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
        }

        .education-card {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          border-radius: 0;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 0, 110, 0.2) 0%, transparent 70%);
          animation: rotateGlow 15s linear infinite;
        }

        @keyframes rotateGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .education-card:hover {
          border-color: var(--neon-pink);
          box-shadow: 
            0 0 30px rgba(181, 55, 242, 0.4),
            0 0 60px rgba(255, 0, 110, 0.3);
        }

        .education-card h3 {
          color: var(--neon-pink);
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          font-family: 'Syne', sans-serif;
          position: relative;
          z-index: 1;
          text-shadow: 0 0 10px var(--neon-pink);
          letter-spacing: 0.05em;
        }

        .education-card p {
          color: var(--neon-blue);
          position: relative;
          z-index: 1;
        }

        .education-card .year {
          color: var(--cyber-yellow);
          font-weight: 600;
          margin-top: 0.5rem;
          position: relative;
          z-index: 1;
          text-shadow: 0 0 5px var(--cyber-yellow);
        }

        footer {
          text-align: center;
          padding: 3rem 0;
          border-top: 2px solid var(--cyber-purple);
          margin-top: 4rem;
          color: var(--neon-blue);
          opacity: 0.8;
          box-shadow: 0 -2px 20px rgba(181, 55, 242, 0.3);
        }

        footer p {
          font-size: 0.9rem;
          text-shadow: 0 0 5px currentColor;
        }

        .terminal-cursor {
          display: inline-block;
          width: 10px;
          height: 20px;
          background: var(--cyber-pink);
          animation: blink 1s infinite;
          margin-left: 5px;
          box-shadow: 0 0 10px var(--cyber-pink);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .contact-links {
            flex-direction: column;
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }

        .contact-links a:last-child {
          border-color: var(--cyber-yellow);
          color: var(--cyber-yellow);
          text-shadow: 0 0 10px var(--cyber-yellow);
        }

        .contact-links a:last-child:hover {
          background: rgba(255, 190, 11, 0.2);
          box-shadow: 
            0 0 20px var(--cyber-yellow),
            0 0 40px var(--cyber-yellow);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: var(--card-bg);
          border: 2px solid var(--cyber-purple);
          border-radius: 0;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
          animation: slideUp 0.3s ease-out;
          box-shadow: 
            0 0 30px rgba(181, 55, 242, 0.5),
            0 0 60px rgba(255, 0, 110, 0.3);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--neon-pink);
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 10px var(--neon-pink);
        }

        .modal-close:hover {
          transform: rotate(90deg);
          text-shadow: 0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink);
        }

        .modal-email {
          background: rgba(0, 245, 255, 0.1);
          border: 2px solid var(--neon-blue);
          padding: 1rem;
          border-radius: 0;
          text-align: center;
          font-size: 1.2rem;
          color: var(--neon-blue);
          text-shadow: 0 0 10px var(--neon-blue);
          margin-top: 1rem;
          word-break: break-all;
        }

        .copy-btn {
          background: var(--cyber-purple);
          border: 2px solid var(--neon-pink);
          color: white;
          padding: 0.75rem 1.5rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          text-shadow: 0 0 5px currentColor;
        }

        .copy-btn:hover {
          background: var(--neon-pink);
          transform: translateY(-2px);
          box-shadow: 
            0 0 20px var(--cyber-pink),
            0 5px 20px rgba(255, 0, 110, 0.4);
        }
      `}</style>

      <div className="container">
        {/* Email Modal */}
        {showEmailModal && (
          <div className="modal-overlay" onClick={() => setShowEmailModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowEmailModal(false)}>×</button>
              <h2 style={{ color: 'var(--neon-pink)', marginBottom: '1rem', textShadow: '0 0 10px var(--neon-pink)' }}>
                📧 Contact Me
              </h2>
              <p style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                Feel free to reach out via email:
              </p>
              <div className="modal-email">
                guptayuraj10@gmail.com
              </div>
              <button 
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText('guptayuraj10@gmail.com');
                  alert('Thank You for copying my Email🥰');
                }}
              >
                📋 Copy Email
              </button>
            </div>
          </div>
        )}

        <header>
          <div className="terminal-prompt">yuraj@portfolio:~$</div>
          <h1>Yuraj Gupta</h1>
          <p className="subtitle">Aspiring IT Intern | Linux & Web Enthusiast</p>
          <div className="contact-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowEmailModal(true); }}>📧 Email</a>
            <a href="https://github.com/gupta-yuraj" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            <a href="https://www.linkedin.com/in/yuraj-gupta-576b41313/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
            
       
             <a href="public/Yuraj_Gupta_Resume.pdf" download>⬇️ Download Resume</a>

          </div>
        </header>

        <main>
          <section className="reveal">
            <div className="section-header">
              <h2>Profile</h2>
            </div>
            <div className="profile-content">
              {/* <p>BBA (General) graduate from Bangalore University (2022–2025). Actively looking for an internship in the IT field. Interested in how machines and software work, with growing interest in reverse engineering. Comfortable with Linux, Git/GitHub, VS Code, React.</p> */}
            <p className='experience-grid'>
              BBA (General) graduate from Bangalore University (2022–2025) aspiring to start a career in IT. 
              Highly curious about system-level workings, software behavior, and reverse engineering. 
              Hands-on experience with Linux environments and development tools including Git/GitHub, VS Code, React, and frontend basics. 
              Motivated to learn, build projects, and grow through real-world internships and challenges.
            </p>

            </div>
          </section>

          <section className="reveal">
            <div className="section-header">
              <h2>Education</h2>
            </div>
            <div className="education-card">
              <h3>BBA (General)</h3>
              <p>Bangalore University</p>
              <p className="year">2022 – 2025</p>
            </div>
          </section>

          <section className="reveal">
            <div className="section-header">
              <h2>Skills</h2>
            </div>
            <div className="skills-grid">
              {['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'C', 'Java Basics', 'Linux', 'Git & GitHub', 'Vercel', 'Tailwind CSS', 'Netlify'].map((skill) => (
                <div key={skill} className="skill-tag">{skill}</div>
              ))}
            </div>
          </section>

          <section className="reveal">
            <div className="section-header">
              <h2>Experience</h2>
            </div>
            <div className="experience-grid">
              <div className="experience-card">
                <h3>Grocers Adda</h3>
                <p>Customer Satisfaction</p>
                <p className="duration">24 days / 90 hours</p>
              </div>
              <div className="experience-card">
                <h3>Vijaya Steels</h3>
                <p>HR Recruitment - End-to-end recruitment process</p>
              </div>
              <div className="experience-card">
                <h3>Inventory Handling Internship</h3>
                <p>Inventory management and operations</p>
                <p className="duration">4 weeks</p>
              </div>
              <div className="experience-card">
                <h3>Prathik Medicals & General</h3>
                <p>Customer strategies & operations</p>
              </div>
    
            

            </div>
          </section>

          <section className="reveal">
            <div className="section-header">
              <h2>Interests</h2>
            </div>
            <div className="interests-list">
              {['Reverse Engineering', 'Linux Internals', 'Web Security', 'System Architecture', 'Software Analysis'].map((interest) => (
                <div key={interest} className="interest-item">{interest}</div>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <p>&lt;/&gt; Crafted with code and creativity <span className="terminal-cursor"></span></p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>© 2025 Yuraj Gupta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
