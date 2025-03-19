import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name">Ahmad Bilal</h1>
        <p className="title">Software Engineer & Developer</p>
      </header>

      <section className="About">
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with expertise in full-stack development and a focus on React, Python, Kubernetes, Docker, and more. I love solving problems and creating efficient, scalable solutions.
        </p>
      </section>

      <section className="Skills">
        <h2>Skills</h2>
        <ul>
          <li>React & Redux</li>
          <li>Node.js & Express</li>
          <li>Docker & Kubernetes</li>
          <li>Python (Flask, Django)</li>
          <li>CI/CD, Jenkins, Git</li>
        </ul>
      </section>

      <section className="Experience">
        <h2>Experience</h2>
        <ul>
          <li>AI Engineer Intern at Big Space Center</li>
          <li>Software Engineer at TechCorp</li>
        </ul>
      </section>

      <footer>
        <p>Contact</p>
        <p>Email: ahmad.anas.ab@gmail.com</p>
        <p>Number: +966 560 900 600</p>
        <p>
          <a href="https://www.linkedin.com/in/ahmadanasbilal" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
