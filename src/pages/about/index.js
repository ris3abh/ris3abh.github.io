import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataabout, meta, worktimeline, skills } from "../../content_option";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const About = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <br />
        <br />
        <br />
        {/* About Section */}
        <section className="about-section">
          <h1 className="section-title">About Me</h1>
          <div className="about-content">
            <p>{dataabout.aboutme}</p>
            <p>{dataabout.aboutme1}</p>
            <p>{dataabout.aboutme2}</p>
            <p>{dataabout.aboutme3}</p>
          </div>
        </section>
        <br />
        <br />
        <br />
        {/* Timeline Section */}
        <section className="timeline-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {worktimeline.map((data, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"} ${expandedId === i ? "expanded" : ""}`}
            >
              <div className="timeline-date">
                <span>{data.date}</span>
              </div>
              <div className="timeline-content" onClick={() => toggleExpand(i)}>
                <div className="timeline-header">
                  <h3>{data.jobtitle}</h3>
                  <h4>{data.where}</h4>
                  <button className="expand-btn">
                    {expandedId === i ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                <div className="timeline-details">
                  <p>{data.description1}</p>
                  <p>{data.description2}</p>
                  <p>{data.description3}</p>
                  <p>{data.description4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        <br />
        <br />
        <br />
        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <h4>{skill.name}</h4>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <center><h6>Made with ♥️ using React</h6></center>
        <br />
    </HelmetProvider>
  );
};