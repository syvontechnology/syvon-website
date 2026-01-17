export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px",
        background: "#08090d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div>
          <h3>Syvon</h3>
          <p style={{ opacity: 0.7, marginTop: 12 }}>
            Engineering intelligent and sustainable solutions across AI, EV,
            and AgriTech.
          </p>
        </div>

        <div>
          <h4>Domains</h4>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Electric Mobility</li>
            <li>AgriTech</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>CSR</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: contact@syvon.ai</p>
          <p>India</p>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: 60, opacity: 0.5 }}>
        © {new Date().getFullYear()} Syvon. All rights reserved.
      </p>
    </footer>
  );
}
