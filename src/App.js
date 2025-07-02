import React, { useState } from "react";

const Contact = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area" },
    { label: "Research Projects", key: "ongoing-research-projects" },
    { label: "Laboratories", key: "important-laboratories" },
    { label: "Committees", key: "departmental-committees" },
    { label: "Publications", key: "news-and-publication" },
    { label: "Downloads", key: "useful-downloads" },
    { label: "Notices", key: "notices-and-circular" },
    { label: "SOPs", key: "sops" },
    { label: "Photo Gallery", key: "photo-gallery" },
    { label: "Alumni", key: "notable-alumni" },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f8f9fa;
        }

        .amu-header-container {
          background: #f7f8f6;
          padding: 20px 10px 0 10px;
        }

        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          max-width: 1100px;
          margin: auto;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          flex-wrap: wrap;
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
          text-transform: uppercase;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .amu-nav a,
        .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          min-width: 260px;
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 10px;
          max-height: 50vh;
          overflow-y: auto;
        }

        .dropdown-menu a {
          display: block;
          padding: 8px 12px;
          font-size: 14px;
          color: #004d40;
          text-decoration: none;
        }

        .dropdown-menu a:hover {
          background-color: #e0f2f1;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          max-width: 1100px;
          margin: auto;
          margin-top: 4px;
          border-radius: 0 0 6px 6px;
        }

        .contact-wrapper {
          padding: 40px 20px;
          background-color: #f8f9fa;
        }

        .contact-section {
          background: #ffffff;
          max-width: 1000px;
          margin: auto;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .contact-info {
          margin-bottom: 30px;
        }

        .contact-info h2 {
          color: #004d40;
          font-size: 1.6em;
          margin-bottom: 10px;
        }

        .contact-form h2 {
          color: #004d40;
          font-size: 1.4em;
          margin-bottom: 15px;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
        }

        .contact-form input,
        .contact-form textarea {
          margin-bottom: 15px;
          padding: 10px 14px;
          font-size: 15px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .contact-form button {
          background-color: #004d40;
          color: white;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .contact-form button:hover {
          background-color: #00332e;
        }

        .footer {
          background: #004d40;
          color: white;
          text-align: center;
          padding: 16px;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
          }

          .amu-nav {
            justify-content: flex-start;
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="amu-header-container">
        <div className="amu-header-horizontal">
          <div className="amu-left">
            <img
              src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
              alt="AMU Logo"
            />
            <span className="amu-title">ALIGARH MUSLIM UNIVERSITY</span>
          </div>
          <nav className="amu-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
            <a href="/faculty">Faculty</a>
            <a href="/contact">Contact</a>
            <div className="dropdown-wrapper" style={{ position: "relative" }}>
              <a
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
                href="#"
              >
                Links ▾
              </a>
              {showDropdown && (
                <div
                  className="dropdown-menu"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  {dropdownItems.map(({ key, label }) => (
                    <a
                      key={key}
                      href={`https://www.amu.ac.in/department/computer-science#${key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="amu-underline"></div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-wrapper">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Department of Computer Science</h2>
            <p>
              <strong>Address:</strong> Aligarh Muslim University, Aligarh,
              India
            </p>
            <p>
              <strong>Email:</strong> cs.department@amu.ac.in
            </p>
            <p>
              <strong>Phone:</strong> +91 571 2700000
            </p>
          </div>

          <div className="contact-form">
            <h2>Submit Your Query</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © {new Date().getFullYear()} Aligarh Muslim University
      </div>
    </>
  );
};

export default Contact;
