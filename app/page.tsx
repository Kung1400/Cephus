import React from 'react';
import Link from 'next/link';

const WelcomePage = () => {
  return (
    <section className="w-full">
      <div className="content-container">
        <h1 className="head_text text-start">Welcome to LEgion</h1>
        <p style={{ fontFamily: 'Times New Roman', fontSize: '30px' }}>
          LEgion safeguards your digital assets with cutting-edge 
          cybersecurity solutions. 
          Our team of elite security professionals utilizes advanced threat detection and proactive defense strategies to 
          keep your data secure in todays ever-evolving cyber landscape. 
          Empower your business with confidence and choose LEgion as your trusted cyber guardian.
        </p>

        <div className="actions">
          <ul className="services-list">
            <li>
              <Link href="/login">
                <i className="fas fa-lock"></i> Already have an account? Login
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <i className="fas fa-shield-alt"></i> Create an account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
