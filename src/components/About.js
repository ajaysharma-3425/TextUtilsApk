import React from "react";

function About(props) {
  const containerStyle = {
    color: props.mode === "dark" ? "#e9ecef" : "#212529",
    backgroundColor: props.mode === "dark" ? "#0f172a" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  const sectionStyle = {
    backgroundColor: props.mode === "dark" ? "#1e293b" : "#f8fafc",
    borderLeft: props.mode === "dark" 
      ? "4px solid #3b82f6" 
      : "4px solid #2563eb",
    transition: "all 0.3s ease"
  };

  const featureIconStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    background: props.mode === "dark" 
      ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
      : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
    color: "white"
  };

  return (
    <div className="container-fluid px-0" style={containerStyle}>
      
      {/* Hero Section with Wave Background */}
      <div className="position-relative overflow-hidden">
        <div 
          className="py-5"
          style={{
            background: props.mode === "dark" 
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" 
              : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
            position: "relative"
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
                    <i className="bi bi-card-text display-4" style={{
                      color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                    }}></i>
                  </div>
                  <h1 className="display-4 fw-bold mb-0" style={{
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)" 
                      : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    TextUtils
                  </h1>
                </div>
                <p className="lead mb-4" style={{ fontSize: "1.25rem", opacity: 0.9 }}>
                  Your ultimate text analysis companion. Transform, analyze, and optimize your text 
                  with our comprehensive suite of tools designed for writers, developers, and content creators.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                    <i className="bi bi-lightning me-1"></i> Fast Processing
                  </span>
                  <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                    <i className="bi bi-shield-check me-1"></i> Privacy First
                  </span>
                  <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill">
                    <i className="bi bi-infinity me-1"></i> No Limits
                  </span>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="position-relative">
                  <div className="p-4 rounded-4 shadow-lg" style={sectionStyle}>
                    <div className="row text-center">
                      <div className="col-6 mb-4">
                        <div className="display-4 fw-bold" style={{
                          color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                        }}>
                          500+
                        </div>
                        <div className="small text-muted">Daily Users</div>
                      </div>
                      <div className="col-6 mb-4">
                        <div className="display-4 fw-bold" style={{
                          color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                        }}>
                          99.9%
                        </div>
                        <div className="small text-muted">Uptime</div>
                      </div>
                      <div className="col-6">
                        <div className="display-4 fw-bold" style={{
                          color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                        }}>
                          0s
                        </div>
                        <div className="small text-muted">Load Time</div>
                      </div>
                      <div className="col-6">
                        <div className="display-4 fw-bold" style={{
                          color: props.mode === "dark" ? "#60a5fa" : "#2563eb"
                        }}>
                          ∞
                        </div>
                        <div className="small text-muted">Text Length</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{
            color: props.mode === "dark" ? "#f8fafc" : "#1e293b"
          }}>
            Powerful Features
          </h2>
          <p className="lead mb-0" style={{ opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
            Everything you need for text processing in one place
          </p>
        </div>

        <div className="row g-4">
          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 h-100 rounded-3" style={sectionStyle}>
              <div style={featureIconStyle}>
                <i className="bi bi-calculator fs-4"></i>
              </div>
              <h4 className="fw-bold mb-3">Text Analysis</h4>
              <p className="mb-3" style={{ lineHeight: "1.6", opacity: 0.9 }}>
                Get instant insights with word count, character count (with and without spaces), 
                sentence count, and reading time estimation.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Real-time statistics
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Detailed breakdown
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Export reports
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 h-100 rounded-3" style={sectionStyle}>
              <div style={featureIconStyle}>
                <i className="bi bi-arrow-left-right fs-4"></i>
              </div>
              <h4 className="fw-bold mb-3">Text Transformation</h4>
              <p className="mb-3" style={{ lineHeight: "1.6", opacity: 0.9 }}>
                Transform your text with various formatting options including case conversion, 
                spacing adjustments, and text cleaning tools.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Uppercase/Lowercase
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Title Case
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Sentence Case
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 h-100 rounded-3" style={sectionStyle}>
              <div style={featureIconStyle}>
                <i className="bi bi-clipboard-check fs-4"></i>
              </div>
              <h4 className="fw-bold mb-3">Utility Tools</h4>
              <p className="mb-3" style={{ lineHeight: "1.6", opacity: 0.9 }}>
                Additional utilities to enhance your writing experience including copy to clipboard, 
                text clearing, and formatting tools.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  One-click copy
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Text preview
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Format cleanup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-5" style={{
        background: props.mode === "dark" 
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" 
          : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)"
      }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="lead mb-0" style={{ opacity: 0.8 }}>
              Three simple steps to analyze your text
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center p-4">
                <div className="position-relative mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: "80px",
                      height: "80px",
                      background: props.mode === "dark" 
                        ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                        : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold"
                    }}>
                    1
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Paste or Type Text</h4>
                <p style={{ opacity: 0.9 }}>
                  Enter your text in the editor. You can paste from any source or type directly.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-center p-4">
                <div className="position-relative mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: "80px",
                      height: "80px",
                      background: props.mode === "dark" 
                        ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                        : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold"
                    }}>
                    2
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Use Tools</h4>
                <p style={{ opacity: 0.9 }}>
                  Click on the action buttons to transform your text or view analysis results.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-center p-4">
                <div className="position-relative mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style={{
                      width: "80px",
                      height: "80px",
                      background: props.mode === "dark" 
                        ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                        : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold"
                    }}>
                    3
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Copy & Use</h4>
                <p style={{ opacity: 0.9 }}>
                  Copy the processed text with one click and use it wherever you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="text-center">
          <div className="p-5 rounded-4" style={{
            background: props.mode === "dark" 
              ? "linear-gradient(135deg, rgba(30, 64, 175, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)" 
              : "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)",
            border: props.mode === "dark" 
              ? "2px dashed #3b82f6" 
              : "2px dashed #2563eb"
          }}>
            <h2 className="display-6 fw-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-4 lead" style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9 }}>
              Join thousands of users who trust TextUtils for their text processing needs
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a 
                href="/" 
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
                style={{
                  background: props.mode === "dark" 
                    ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                    : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                  border: "none",
                  fontWeight: "600"
                }}
              >
                <i className="bi bi-play-circle me-2"></i>
                Start Analyzing Now
              </a>
              <a 
                href="#features" 
                className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill"
                style={{
                  borderColor: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                  color: props.mode === "dark" ? "#3b82f6" : "#2563eb",
                  fontWeight: "600"
                }}
              >
                <i className="bi bi-info-circle me-2"></i>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-top" style={{
        borderColor: props.mode === "dark" ? "#334155" : "#e2e8f0"
      }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-2 me-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" 
                      : "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
                    color: "white"
                  }}
                >
                  <i className="bi bi-card-text"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">TextUtils</h5>
                  <small className="text-muted">Advanced Text Processing Tool</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="/" className="text-decoration-none" style={{
                  color: props.mode === "dark" ? "#94a3b8" : "#64748b"
                }}>
                  Privacy Policy
                </a>
                <a href="/" className="text-decoration-none" style={{
                  color: props.mode === "dark" ? "#94a3b8" : "#64748b"
                }}>
                  Terms of Service
                </a>
                <a href="/about" className="text-decoration-none" style={{
                  color: props.mode === "dark" ? "#94a3b8" : "#64748b"
                }}>
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;