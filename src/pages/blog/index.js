import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { blogContent, meta } from "../../content_option";
import "./style.css";

export const BlogList = () => {
    return (
        <HelmetProvider>
            <Container className="blog-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Blog | {meta.title}</title>
                </Helmet>
                
                <Row className="blog-header mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Blog</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>

                <div className="blog-grid">
                    {blogContent.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <img src={post.thumbnail} alt={post.title} />
                                <div className="blog-category">{post.category}</div>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-summary">{post.summary}</p>
                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="blog-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a 
                                    href={post.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="blog-read-more"
                                >
                                    Read on {post.platform}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
            <center><h6>Made with ♥️ using React</h6></center>
        <br />
        </HelmetProvider>
    );
};