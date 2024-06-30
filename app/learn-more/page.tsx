import Link from "next/link";

export default function Learn() {
  return (
    <main>
      <h1 className="head_text text-start">LEgion Security</h1>
      <br className="max-md:hidden" />
      <section className="security-services">
        <strong>Our Security Solutions</strong>
      </section>

      <section className="content">
        <p style={{ fontFamily: 'Times New Roman', fontSize: '20px' }}>
          Securing your digital world requires a comprehensive approach. We offer a range of security services to help you identify, prevent, and mitigate threats to your data and systems.
        </p>

        <strong>
          <Link href="/offensive-security">Offensive Security</Link>
        </strong>

        <p style={{ fontFamily: 'Times New Roman', fontSize: '20px' }}>
          Our Offensive Security team acts as your ethical hacker squad. We take a proactive approach, simulating real-world cyberattacks to uncover vulnerabilities in your systems, applications, and network before malicious actors can exploit them. This proactive identification and remediation of weaknesses helps prevent breaches and minimizes the risk of data loss.
        </p>

        <strong>
          <Link href="/defensive-security">Defensive Security</Link>
        </strong>

        <p style={{ fontFamily: 'Times New Roman', fontSize: '20px' }}>
          Our Defensive Security team focuses on building a robust shield for your critical assets. We design and implement comprehensive security solutions tailored to your specific needs, creating a strong perimeter defense to deter and prevent cyberattacks.
        </p>

        <p style={{ fontFamily: 'Times New Roman', fontSize: '20px' }}>
          By combining Offensive and Defensive Security strategies, we create a layered approach that safeguards your data from a variety of threats. Contact us today to learn more about how we can help you achieve a secure digital environment.
        </p>
      </section>
    </main>
  );
}
