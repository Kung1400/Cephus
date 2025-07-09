import Link from 'next/link';
import "./homepage.css"
const Home = () => {
  const isuserloggedin = true;

  return (
    <section className="w-full">

      <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
        </Link>
        {isuserloggedin && (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/contact-us" className='black_btn'>
              Get Started
            </Link>
          </div>
        )}
      </nav>

      <section className="w-full">
        <div className="content-container">
          <h1 className="head_text text-start">
            We are LEgion
            <br className="max-md:hidden" />
            <span className="black">
              The future of the Cyber World
            </span>
          </h1>
          <p className="desc black" style={{ fontFamily: 'Times New Roman', fontSize: '20px' }}>
            In this digital landscape, threats are everywhere. 
            At Legion Security, we are your impenetrable shield. 
            Our expert team provides a comprehensive suite of offensive and defensive cybersecurity solutions, 
            safeguarding your critical assets and empowering you to thrive in an uncertain world. 
            We do not just react to threats – we actively hunt them down. 
            Let Legion be your trusted partner, ensuring your digital peace of mind.
          </p>

          <section className="services">
            <h2 className="services-heading underline">Our Services</h2>
            <ul className="services-list">
              <li>
                <Link href="/offensive-security">
                  <i className="fas fa-lock"></i> Offensive Security
                </Link>
              </li>
              <li>
                <Link href="/defensive-security">
                  <i className="fas fa-shield-alt"></i> Defensive Security
                </Link>
              </li>
            </ul>

            <Link href="/learn-more">
              <button>Learn More</button>
            </Link>
          </section>

        </div>
      </section>
    </section>
  );
};

export default Home;
