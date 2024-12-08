import React, { useRef, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataportfolio, blogContent, achievements } from "../../content_option";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
    const blogRef = useRef(null);
    const achievementRef = useRef(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // Add animation when scrolling into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    // Truncate text function
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };    

    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                {/* Original intro section */}
                <div className="intro_sec d-block d-lg-flex align-items-center">
                    <div 
                        className="h_bg-image order-1 order-lg-2 h-100"
                        style={{ backgroundImage: `url(${introdata.your_img_url})` }}
                    ></div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{introdata.title}</h2>
                                <h1 className="fluidz-48 mb-1x">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                introdata.animated.first,
                                                introdata.animated.second,
                                                introdata.animated.third,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p className="mb-1x">{introdata.description}</p>
                                <div className="intro_btn-action pb-5">
                                    <Link to="/portfolio" className="text_2">
                                        <div id="button_p" className="ac_btn btn">
                                            My Portfolio
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/contact">
                                        <div id="button_h" className="ac_btn btn">
                                            Contact Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New sections start here */}
                <section ref={achievementRef} className="achievements-section">
                  <h2 className="section-title">Achievements & Certifications</h2>
                  <Slider {...sliderSettings} className="achievements-slider">
                      {achievements.map((achievement, index) => (
                          <div key={index} className="achievement-slide">
                              <div className="achievement-card">
                                  <center>
                                    <img src={achievement.icon} alt={achievement.title} />
                                  </center>
                                  <h3>{achievement.title}</h3>
                                  <p>{achievement.organization}</p>
                                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                      Verify
                                  </a>
                              </div>
                          </div>
                      ))}
                  </Slider>
              </section>

                <section className="featured-projects">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {dataportfolio.slice(0, 3).map((project, index) => (
                            <div key={index} className="project-card">
                                <img src={project.img} alt={project.title} />
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="view-more">
                        <Link to="/portfolio" className="ac_btn btn">View All Projects</Link>
                    </div>
                </section>

                <section className="featured-blogs" ref={blogRef}>
            <h2 className="section-title">Latest Blogs</h2>
            <div className="blogs-grid">
                {blogContent.slice(0, 3).map((blog, index) => (
                    <div 
                        key={index} 
                        className="blog-card"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <img src={blog.thumbnail} alt={blog.title} />
                        <div className="blog-content">
                            <span className="blog-category">{blog.category}</span>
                            <h3>{blog.title}</h3>
                            <p>{truncateText(blog.summary, 150)}</p>
                            <div className="blog-meta">
                                <span>{blog.date}</span>
                                <span>{blog.readTime}</span>
                            </div>
                            <a 
                                href={blog.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="read-more-btn"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view-more">
                <Link to="/blog" className="ac_btn btn">
                    View All Blogs
                </Link>
            </div>
        </section>
        <br />
        <br />
            </section>
        </HelmetProvider>
    );
};