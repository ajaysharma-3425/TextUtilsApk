import React, { useState } from "react";

function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerStyle = {
    color: props.mode === "dark" ? "#e9ecef" : "#212529",
    backgroundColor: props.mode === "dark" ? "#0f172a" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  const cardStyle = {
    backgroundColor: props.mode === "dark" ? "#1e293b" : "#f8fafc",
    border: props.mode === "dark" 
      ? "1px solid #334155" 
      : "1px solid #e2e8f0",
    borderRadius: "12px",
    transition: "all 0.3s ease"
  };

  const inputStyle = {
    backgroundColor: props.mode === "dark" ? "#0f172a" : "#ffffff",
    border: props.mode === "dark" 
      ? "1px solid #334155" 
      : "1px solid #d1d5db",
    color: props.mode === "dark" ? "#e9ecef" : "#212529",
    transition: "all 0.3s ease"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general"
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email Us",
      details: "support@textutils.com",
      subtitle: "We'll respond within 24 hours",
      color: "#3b82f6"
    },
    {
      icon: "bi-telephone",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9am-6pm EST",
      color: "#10b981"
    },
    {
      icon: "bi-clock",
      title: "Office Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM EST",
      color: "#8b5cf6"
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      details: "Remote",
      subtitle: "Available Worldwide",
      color: "#f59e0b"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Is there a fee for support?",
      answer: "No, all our support services are completely free for all users."
    },
    {
      question: "Can I request a new feature?",
      answer: "Absolutely! We welcome all feature requests and consider them for future updates."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we provide custom text processing solutions for businesses. Contact us for details."
    }
  ];

  return (
    <div className="container-fluid px-0" style={containerStyle}>
      
      {/* Hero Section */}
      <div 
        className="py-5"
        style={{
          background: props.mode === "dark" 
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" 
            : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
          borderBottom: props.mode === "dark" 
            ? "1px solid #334155" 
            : "1px solid #e2e8f0"
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-inline-flex align-items-center mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-3 p-3 me-3"
                  style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 64, 175, 0.2) 100%)" 
                      : "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)"
                  }}
                >
                  <i className="bi bi-chat-dots display-4" style={{
                    color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                  }}></i>
                </div>
                <div>
                  <h1 className="display-4 fw-bold mb-0" style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)" 
                      : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    Contact Us
                  </h1>
                  <p className="lead mb-0 mt-2" style={{ opacity: 0.9 }}>
                    Get in touch with our team
                  </p>
                </div>
              </div>
              
              <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6", opacity: 0.9 }}>
                Have questions, feedback, or need assistance? We're here to help! 
                Our team is ready to assist you with any inquiries about TextUtils.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="#contact-form" 
                  className="btn btn-primary px-4 py-2 rounded-pill"
                  style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                      : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                    border: "none",
                    fontWeight: "500"
                  }}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Send Message
                </a>
                <a 
                  href="#faq" 
                  className="btn btn-outline-primary px-4 py-2 rounded-pill"
                  style={{
                    borderColor: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                    color: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                    fontWeight: "500"
                  }}
                >
                  <i className="bi bi-question-circle me-2"></i>
                  View FAQs
                </a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="p-4 rounded-4" style={cardStyle}>
                  <div className="text-center mb-4">
                    <div className="display-6 fw-bold mb-2" style={{
                      color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                    }}>
                      24/7
                    </div>
                    <p className="mb-0" style={{ opacity: 0.8 }}>
                      Support Available
                    </p>
                  </div>
                  <div className="row text-center">
                    <div className="col-6 mb-4">
                      <div className="display-6 fw-bold" style={{
                        color: props.mode === "dark" ? "#10b981" : "#059669"
                      }}>
                        &lt;24h
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Avg Response</div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="display-6 fw-bold" style={{
                        color: props.mode === "dark" ? "#8b5cf6" : "#7c3aed"
                      }}>
                        100%
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Free Support</div>
                    </div>
                    <div className="col-6">
                      <div className="display-6 fw-bold" style={{
                        color: props.mode === "dark" ? "#f59e0b" : "#d97706"
                      }}>
                        98%
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Satisfaction</div>
                    </div>
                    <div className="col-6">
                      <div className="display-6 fw-bold" style={{
                        color: props.mode === "dark" ? "#ec4899" : "#db2777"
                      }}>
                        5★
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container py-5">
        <div className="row g-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="p-4 text-center rounded-3" style={cardStyle}>
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: props.mode === "dark" 
                      ? `${info.color}20` 
                      : `${info.color}10`,
                    color: info.color
                  }}
                >
                  <i className={`bi ${info.icon} fs-3`}></i>
                </div>
                <h4 className="fw-bold mb-2">{info.title}</h4>
                <p className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>{info.details}</p>
                <p className="small mb-0" style={{ opacity: 0.8 }}>{info.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="p-4 rounded-4" style={cardStyle}>
              <div className="mb-4">
                <h2 className="fw-bold mb-2">Send us a message</h2>
                <p style={{ opacity: 0.9 }}>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form id="contact-form" onSubmit={handleSubmit}>
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <div>
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  </div>
                )}
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-medium">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label fw-medium">
                      Inquiry Type <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-tag"></i>
                      </span>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="business">Business Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="subject" className="form-label fw-medium">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-card-heading"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-medium">
                      Message <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text align-items-start pt-3">
                        <i className="bi bi-chat-text"></i>
                      </span>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Tell us how we can help..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 rounded-pill"
                      disabled={isSubmitting}
                      style={{
                        background: props.mode === "dark" 
                          ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                          : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                        border: "none",
                        fontWeight: "600"
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="col-12">
                    <p className="small text-center mb-0" style={{ opacity: 0.7 }}>
                      By submitting this form, you agree to our 
                      <a href="/privacy" className="text-decoration-none ms-1" style={{
                        color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                      }}>
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="col-lg-5">
            <div className="p-4 rounded-4" style={cardStyle}>
              <div className="mb-4">
                <h2 id="faq" className="fw-bold mb-2">Frequently Asked Questions</h2>
                <p style={{ opacity: 0.9 }}>Find quick answers to common questions below.</p>
              </div>
              
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${index}`}
                        aria-expanded="false"
                        aria-controls={`faqCollapse${index}`}
                        style={{
                          ...inputStyle,
                          fontWeight: "500"
                        }}
                      >
                        <i className="bi bi-question-circle me-2 text-primary"></i>
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faqCollapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-3" style={{ opacity: 0.9 }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 rounded-3" style={{
                background: props.mode === "dark" 
                  ? "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)" 
                  : "linear-gradient(135deg, rgba(6, 95, 70, 0.05) 0%, rgba(4, 120, 87, 0.05) 100%)",
                border: props.mode === "dark" 
                  ? "1px solid rgba(16, 185, 129, 0.2)" 
                  : "1px solid rgba(6, 95, 70, 0.1)"
              }}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-lightbulb fs-4" style={{
                      color: props.mode === "dark" ? "#10b981" : "#059669"
                    }}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Need immediate help?</h5>
                    <p className="mb-0 small" style={{ opacity: 0.9 }}>
                      Check our 
                      <a href="/docs" className="text-decoration-none mx-1" style={{
                        color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                      }}>
                        documentation
                      </a>
                      or visit our 
                      <a href="/community" className="text-decoration-none mx-1" style={{
                        color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                      }}>
                        community forum
                      </a>
                      for quick answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="p-4 mt-4 rounded-4" style={cardStyle}>
              <h4 className="fw-bold mb-4">Connect With Us</h4>
              <p className="mb-4" style={{ opacity: 0.9 }}>
                Follow us on social media for updates, tips, and community discussions.
              </p>
              
              <div className="d-flex gap-3">
                {[
                  { icon: "bi-twitter", color: "#1da1f2", label: "Twitter" },
                  { icon: "bi-github", color: "#333", label: "GitHub" },
                  { icon: "bi-discord", color: "#5865f2", label: "Discord" },
                  { icon: "bi-linkedin", color: "#0077b5", label: "LinkedIn" },
                  { icon: "bi-reddit", color: "#ff4500", label: "Reddit" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="/"
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: props.mode === "dark" 
                        ? `${social.color}20` 
                        : `${social.color}10`,
                      color: social.color,
                      textDecoration: "none",
                      transition: "all 0.3s ease"
                    }}
                    title={social.label}
                  >
                    <i className={`bi ${social.icon} fs-5`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-5" style={{
        background: props.mode === "dark" 
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" 
          : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        borderTop: props.mode === "dark" 
          ? "1px solid #334155" 
          : "1px solid #e2e8f0"
      }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="fw-bold mb-2">Stay Updated</h3>
              <p className="mb-0" style={{ opacity: 0.9 }}>
                Subscribe to our newsletter for the latest updates and features.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Enter your email"
                  style={{
                    ...inputStyle,
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px"
                  }}
                />
                <button
                  className="btn btn-primary px-4"
                  style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                      : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                    border: "none",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    fontWeight: "500"
                  }}
                >
                  Subscribe
                </button>
              </div>
              <p className="small mt-2 mb-0" style={{ opacity: 0.7 }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;