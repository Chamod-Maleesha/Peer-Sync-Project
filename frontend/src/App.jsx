import { useState, useEffect } from 'react';

function App() {
  const [backendStatus, setBackendStatus] = useState({
    checked: false,
    online: false,
    message: 'Checking backend status...'
  });

  const checkBackendHealth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health');
      if (response.ok) {
        const data = await response.json();
        setBackendStatus({
          checked: true,
          online: true,
          message: data.message || 'Backend is connected and healthy!'
        });
      } else {
        setBackendStatus({
          checked: true,
          online: false,
          message: `Backend returned status ${response.status}`
        });
      }
    } catch (error) {
      setBackendStatus({
        checked: true,
        online: false,
        message: 'Could not connect to backend (http://localhost:5000)'
      });
    }
  };

  useEffect(() => {
    checkBackendHealth();
  }, []);

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">🎓</span>
          <span className="brand-name">Peer Sync</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#seniors">Senior Mentors</a>
          <a href="#resources">Resources</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">University Peer-Learning Platform</span>
          <h1>Empowering Students Through Peer Learning</h1>
          <p className="hero-description">
            Peer Sync bridges the gap between junior students and experienced senior peers.
            Get personalized guidance, access verified course resources, and build strong study networks.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">Get Started</a>
            <button onClick={checkBackendHealth} className="btn btn-secondary">
              Refresh Server Status
            </button>
          </div>

          {/* Backend Status Notification */}
          <div className={`status-pill ${backendStatus.online ? 'status-online' : 'status-offline'}`}>
            <span className="status-indicator"></span>
            <span>
              <strong>Server Status:</strong> {backendStatus.message}
            </span>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="features-section">
        <h2 className="section-title">What Peer Sync Offers</h2>
        <p className="section-subtitle">
          Everything you need to navigate your university academic journey with confidence.
        </p>

        <div className="features-grid">
          <div className="card">
            <div className="card-icon">👨‍🏫</div>
            <h3>Senior Mentorship</h3>
            <p>
              Connect with senior students who have already completed your modules with distinction.
              Gain practical advice on exams, projects, and coursework.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Curated Study Resources</h3>
            <p>
              Discover lecture summaries, past examination papers, revision roadmaps, and reference materials
              verified by high-performing peers.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Peer Study Groups</h3>
            <p>
              Find fellow coursemates, form collaborative study sessions, and tackle difficult assignments
              together in a supportive learning environment.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>AI-Assisted Learning (Planned)</h3>
            <p>
              Upcoming intelligent recommendations to match you with the right study materials and mentors
              tailored to your current course schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Peer Sync — University Peer Learning Project</p>
        <p className="footer-subtext">Built with React, Vite, Node.js, Express & PostgreSQL</p>
      </footer>
    </div>
  );
}

export default App;
