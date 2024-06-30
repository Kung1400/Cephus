import React from 'react';
import Link from 'next/link';
const HomePage = () => {
  return (
    <section className="w-full">
      
      <div className="content-container">
        <h1 className="head_text text-start">Welcome to LEgion</h1>
        </div>
    <section className="w-full">

      
    <div className="home-page">
      <header className="header">
        <h1>Your Trusted Partner in Cybersecurity</h1>
      </header>
      <main className="main-content">
        
        <section className="hero">
          
        <p>
          LEgion safeguards your digital assets with cutting-edge 
          cybersecurity solutions. 
          Our team of elite security professionals utilizes advanced threat detection and proactive defense strategies to 
          keep your data secure in todays ever-evolving cyber landscape. 
          Empower your business with confidence and choose LEgion as your trusted cyber guardian.
        </p>
        </section>
        <section className="services">
          <h2>Our Comprehensive Security Solutions</h2>
          <ul>
            <li>
              <h3>Network Security</h3>
              <p>
                Protect your network from unauthorized access, malware, and other
                threats with our advanced firewalls, intrusion detection systems,
                and vulnerability assessments.
              </p>
            </li>
            <li>
              <h3>Endpoint Security</h3>
              <p>
                Secure your devices, including desktops, laptops, and mobile
                devices, from cyberattacks with our endpoint protection software
                and data encryption solutions.
              </p>
            </li>
            <li>
              <h3>Data Security</h3>
              <p>
                Ensure the confidentiality, integrity, and availability of your
                sensitive data with our data loss prevention, encryption, and
                backup solutions.
              </p>
            </li>
            <li>
              <h3>Security Awareness Training</h3>
              <p>
                Empower your employees to become the first line of defense
                against cyberattacks with our comprehensive security awareness
                training programs.
              </p>
            </li>
          </ul>
        </section>
        <section className="why-us">
          <h2>Why Choose LEgion?</h2>
          <ul>
            <li>
              <i className="fas fa-shield"></i>
              <h3>Proven track record</h3>
              <p>
                We have a proven track record of success in protecting businesses
                of all sizes from cyber threats.
              </p>
            </li>
            <li>
              <i className="fas fa-user-secret"></i>
              <h3>Expert team</h3>
              <p>
                Our team of experienced cybersecurity professionals is dedicated to
                providing you with the best possible protection.
              </p>
            </li>
            <li>
              <i className="fas fa-sync-alt"></i>
              <h3>24/7 Support</h3>
              <p>
                We offer 24/7 support to ensure that you have access to help
                when you need it most.
              </p>
            </li>
            <li>
              <i className="fas fa-handshake"></i>
              <h3>Trusted Partner</h3>
              <p>
                We are a trusted partner that you can rely on to keep your
                business safe from cyberattacks.
              </p>
            </li>
          </ul>
        </section>
        <section className="resources">
        
        <div className="actions">
           
            <p>
              <Link href="/login">
                <i className="fas fa-lock"></i> Already have an account? Login
              </Link>
            </p>
              <Link href="/signup">
                <i className="fas fa-shield-alt"></i> Create an account
              </Link>
            
          
        </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; LEgion {new Date().getFullYear()}</p>
      </footer>
    </div>
    </section>
    </section>
  );
};

export default HomePage;
