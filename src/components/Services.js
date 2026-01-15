import React from "react";

function Services(props) {
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
    transition: "all 0.3s ease",
    height: "100%"
  };

  const serviceIconStyle = (color) => ({
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    background: props.mode === "dark" 
      ? `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)` 
      : `linear-gradient(135deg, ${color}10 0%, ${color}30 100%)`,
    color: color,
    fontSize: "1.5rem"
  });

  const services = [
    {
      id: 1,
      title: "Text Analysis",
      icon: "bi-graph-up",
      color: "#3b82f6",
      features: [
        "Word Count",
        "Character Count",
        "Sentence Count",
        "Paragraph Count",
        "Reading Time",
        "Keyword Density"
      ],
      description: "Comprehensive text analysis with detailed statistics and insights"
    },
    {
      id: 2,
      title: "Text Transformation",
      icon: "bi-arrow-left-right",
      color: "#10b981",
      features: [
        "Case Conversion",
        "Text Reversal",
        "Remove Duplicates",
        "Sort Lines",
        "Text Encoding",
        "Format Cleanup"
      ],
      description: "Transform your text with multiple formatting options"
    },
    {
      id: 3,
      title: "Text Utilities",
      icon: "bi-tools",
      color: "#8b5cf6",
      features: [
        "Copy to Clipboard",
        "Text Preview",
        "Export Options",
        "Text Comparison",
        "Find & Replace",
        "Text History"
      ],
      description: "Essential utilities for efficient text processing"
    },
    {
      id: 4,
      title: "Formatting Tools",
      icon: "bi-text-center",
      color: "#f59e0b",
      features: [
        "Space Management",
        "Line Breaks",
        "Text Alignment",
        "Text Wrapping",
        "Indentation",
        "Bullet Points"
      ],
      description: "Advanced formatting tools for perfect text presentation"
    },
    {
      id: 5,
      title: "Validation Tools",
      icon: "bi-check-circle",
      color: "#ef4444",
      features: [
        "Text Validation",
        "Grammar Check",
        "Plagiarism Check",
        "URL Validation",
        "Email Validation",
        "Code Validation"
      ],
      description: "Validate and verify your text content"
    },
    {
      id: 6,
      title: "Advanced Features",
      icon: "bi-stars",
      color: "#ec4899",
      features: [
        "Batch Processing",
        "API Access",
        "Custom Scripts",
        "Template System",
        "Collaboration",
        "Cloud Sync"
      ],
      description: "Premium features for power users"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      color: "#3b82f6",
      features: [
        "Basic Text Analysis",
        "Case Conversion",
        "Copy to Clipboard",
        "Up to 10,000 chars",
        "Community Support"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      color: "#10b981",
      features: [
        "All Free Features",
        "Advanced Analytics",
        "Batch Processing",
        "Unlimited Characters",
        "Priority Support",
        "Custom Templates",
        "API Access"
      ],
      cta: "Try Pro Free",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      color: "#8b5cf6",
      features: [
        "All Pro Features",
        "White Labeling",
        "Team Collaboration",
        "Custom Integration",
        "Dedicated Support",
        "SLA Guarantee",
        "Security Audit"
      ],
      cta: "Contact Sales"
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
                  <i className="bi bi-gear display-4" style={{
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
                    Our Services
                  </h1>
                  <p className="lead mb-0 mt-2" style={{ opacity: 0.9 }}>
                    Complete suite of text processing tools
                  </p>
                </div>
              </div>
              
              <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6", opacity: 0.9 }}>
                Discover our comprehensive range of text processing services designed to 
                enhance your writing, coding, and content creation workflow. From basic 
                text analysis to advanced processing tools.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="#services" 
                  className="btn btn-primary px-4 py-2 rounded-pill"
                  style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                      : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                    border: "none",
                    fontWeight: "500"
                  }}
                >
                  <i className="bi bi-eye me-2"></i>
                  Explore Services
                </a>
                <a 
                  href="#pricing" 
                  className="btn btn-outline-primary px-4 py-2 rounded-pill"
                  style={{
                    borderColor: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                    color: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                    fontWeight: "500"
                  }}
                >
                  <i className="bi bi-tag me-2"></i>
                  View Pricing
                </a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="p-4 rounded-4" style={cardStyle}>
                  <div className="row text-center">
                    <div className="col-4 mb-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                      }}>
                        20+
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Tools</div>
                    </div>
                    <div className="col-4 mb-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#10b981" : "#059669"
                      }}>
                        100%
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Free Tools</div>
                    </div>
                    <div className="col-4 mb-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#8b5cf6" : "#7c3aed"
                      }}>
                        24/7
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Available</div>
                    </div>
                    <div className="col-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#f59e0b" : "#d97706"
                      }}>
                        0
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Ads</div>
                    </div>
                    <div className="col-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#ec4899" : "#db2777"
                      }}>
                        99.9%
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Uptime</div>
                    </div>
                    <div className="col-4">
                      <div className="display-4 fw-bold" style={{
                        color: props.mode === "dark" ? "#06b6d4" : "#0891b2"
                      }}>
                        50k+
                      </div>
                      <div className="small" style={{ opacity: 0.8 }}>Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">All Text Processing Services</h2>
          <p className="lead mb-0" style={{ opacity: 0.8, maxWidth: "700px", margin: "0 auto" }}>
            Choose from our wide range of text processing and analysis tools
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="p-4 h-100 rounded-3" style={cardStyle}>
                <div style={serviceIconStyle(service.color)}>
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="mb-4" style={{ lineHeight: "1.6", opacity: 0.9 }}>
                  {service.description}
                </p>
                <ul className="list-unstyled mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill me-2 mt-1" style={{ 
                        color: service.color,
                        fontSize: "0.9rem"
                      }}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/" 
                  className="btn w-100 rounded-pill"
                  style={{
                    background: props.mode === "dark" 
                      ? `${service.color}20` 
                      : `${service.color}10`,
                    color: service.color,
                    border: `1px solid ${service.color}30`,
                    fontWeight: "500"
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  Try {service.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-5" style={{
        background: props.mode === "dark" 
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" 
          : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        borderTop: props.mode === "dark" 
          ? "1px solid #334155" 
          : "1px solid #e2e8f0"
      }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Simple, Transparent Pricing</h2>
            <p className="lead mb-0" style={{ opacity: 0.8 }}>
              Choose the plan that's right for you
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`p-4 h-100 rounded-3 ${plan.popular ? 'position-relative' : ''}`} 
                  style={{
                    ...cardStyle,
                    border: plan.popular 
                      ? props.mode === "dark" 
                        ? `2px solid ${plan.color}` 
                        : `2px solid ${plan.color}`
                      : cardStyle.border,
                    transform: plan.popular ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="position-absolute top-0 start-50 translate-middle px-3 py-1 rounded-pill"
                      style={{
                        background: plan.color,
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h3 className="fw-bold mb-2">{plan.name}</h3>
                    <div className="d-flex align-items-baseline justify-content-center mb-2">
                      <span className="display-3 fw-bold" style={{ color: plan.color }}>
                        {plan.price}
                      </span>
                      {plan.period !== "forever" && plan.period !== "contact us" && (
                        <span className="ms-2" style={{ opacity: 0.7 }}>/mo</span>
                      )}
                    </div>
                    <div className="small" style={{ opacity: 0.7 }}>{plan.period}</div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-start">
                        <i className="bi bi-check-circle-fill me-2 mt-1" style={{ 
                          color: plan.color,
                          fontSize: "0.9rem"
                        }}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/" 
                    className="btn w-100 rounded-pill py-2"
                    style={{
                      background: plan.popular 
                        ? plan.color 
                        : props.mode === "dark" 
                          ? `${plan.color}20` 
                          : `${plan.color}10`,
                      color: plan.popular ? "white" : plan.color,
                      border: plan.popular ? "none" : `1px solid ${plan.color}30`,
                      fontWeight: "500"
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <p className="mb-0" style={{ opacity: 0.7 }}>
              All plans include our core features. Need a custom plan? 
              <a href="/contact" className="text-decoration-none ms-1" style={{
                color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
              }}>
                Contact us for enterprise solutions
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">How We Work</h2>
            <div className="d-flex mb-4">
              <div className="me-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" 
                  style={{
                    width: "50px",
                    height: "50px",
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 64, 175, 0.2) 100%)" 
                      : "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)",
                    color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                  }}
                >
                  <i className="bi bi-lightning"></i>
                </div>
              </div>
              <div>
                <h4 className="fw-bold mb-2">Fast Processing</h4>
                <p style={{ opacity: 0.9 }}>
                  All text processing happens instantly in your browser. No server delays, 
                  no waiting time.
                </p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" 
                  style={{
                    width: "50px",
                    height: "50px",
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)" 
                      : "linear-gradient(135deg, rgba(6, 95, 70, 0.1) 0%, rgba(4, 120, 87, 0.1) 100%)",
                    color: props.mode === "dark" ? "#10b981" : "#059669"
                  }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>
              </div>
              <div>
                <h4 className="fw-bold mb-2">Privacy First</h4>
                <p style={{ opacity: 0.9 }}>
                  Your text never leaves your browser. We don't store, share, or analyze 
                  your content on our servers.
                </p>
              </div>
            </div>
            
            <div className="d-flex">
              <div className="me-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" 
                  style={{
                    width: "50px",
                    height: "50px",
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)" 
                      : "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%)",
                    color: props.mode === "dark" ? "#8b5cf6" : "#7c3aed"
                  }}
                >
                  <i className="bi bi-infinity"></i>
                </div>
              </div>
              <div>
                <h4 className="fw-bold mb-2">No Limits</h4>
                <p style={{ opacity: 0.9 }}>
                  Process unlimited text with all our free tools. No registration required, 
                  no usage limits.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="p-4 rounded-4" style={cardStyle}>
              <h3 className="fw-bold mb-4">Why Choose Our Services?</h3>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">100% Free Core Features</h5>
                    <p className="mb-0 small" style={{ opacity: 0.9 }}>
                      All essential text processing tools are completely free forever
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Browser-Based</h5>
                    <p className="mb-0 small" style={{ opacity: 0.9 }}>
                      No installation required. Works on all modern browsers
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Regular Updates</h5>
                    <p className="mb-0 small" style={{ opacity: 0.9 }}>
                      New features and improvements added regularly
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-success fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Community Driven</h5>
                    <p className="mb-0 small" style={{ opacity: 0.9 }}>
                      Features and improvements based on user feedback
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/" 
                className="btn btn-primary w-100 rounded-pill py-3"
                style={{
                  background: props.mode === "dark" 
                    ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                    : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                  border: "none",
                  fontWeight: "600"
                }}
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Start Using Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;