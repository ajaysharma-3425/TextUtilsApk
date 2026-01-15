import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Textform(props) {
  const [text, setText] = useState("");
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  
  const handleClrClick = () => {
    setText("");
    props.showAlert("TextArea Cleared", "success");
    toast.success('Textarea Cleared.', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
    toast.success('A Text was Copied !', {
      position: "bottom-center"
    });
  }
  
  const handleEsClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  
  const wordCount = text.split(/\s/).filter((element) => { return element.length !== 0 }).length;
  const charCount = text.length;
  const readTime = 0.008 * wordCount;

  return (
    <div className="textform-container">
      <div className="container-fluid px-0 px-md-4 py-4">
        <div className="row">
          {/* Text Input Section */}
          <div className="col-12 col-lg-8 mb-4 mb-lg-0">
            <div className="card shadow-sm border-0" style={{ 
              backgroundColor: props.mode === "dark" ? "#2c3034" : "white",
              color: props.mode === "light" ? "black" : "white"
            }}>
              <div className="card-body p-3 p-md-4">
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="myBox"
                    value={text}
                    style={{
                      backgroundColor: props.mode === "dark" ? "#4951b3" : "white",
                      color: props.mode === "light" ? "black" : "white",
                      minHeight: "200px",
                      resize: "vertical",
                      border: props.mode === "dark" ? "1px solid #4951b3" : "1px solid #ced4da",
                      fontSize: "1rem",
                      lineHeight: "1.5"
                    }}
                    onChange={handleOnChange}
                    rows="8"
                    placeholder="Enter your text here..."
                  ></textarea>
                </div>
                
                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-2">
                  <button 
                    disabled={text.length === 0} 
                    className="btn btn-primary px-3 px-md-4 py-2"
                    onClick={handleUpClick}
                    style={{
                      opacity: text.length === 0 ? 0.6 : 1,
                      cursor: text.length === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    <i className="bi bi-text-uppercase me-2"></i>
                    Uppercase
                  </button>
                  <button 
                    disabled={text.length === 0} 
                    className="btn btn-primary px-3 px-md-4 py-2"
                    onClick={handleLoClick}
                    style={{
                      opacity: text.length === 0 ? 0.6 : 1,
                      cursor: text.length === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    <i className="bi bi-text-lowercase me-2"></i>
                    Lowercase
                  </button>
                  <button 
                    disabled={text.length === 0} 
                    className="btn btn-danger px-3 px-md-4 py-2"
                    onClick={handleClrClick}
                    style={{
                      opacity: text.length === 0 ? 0.6 : 1,
                      cursor: text.length === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    <i className="bi bi-eraser me-2"></i>
                    Clear
                  </button>
                  <button 
                    disabled={text.length === 0} 
                    className="btn btn-success px-3 px-md-4 py-2"
                    onClick={handleCopyClick}
                    style={{
                      opacity: text.length === 0 ? 0.6 : 1,
                      cursor: text.length === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    <i className="bi bi-clipboard me-2"></i>
                    Copy
                  </button>
                  <button 
                    disabled={text.length === 0} 
                    className="btn btn-warning px-3 px-md-4 py-2 text-dark"
                    onClick={handleEsClick}
                    style={{
                      opacity: text.length === 0 ? 0.6 : 1,
                      cursor: text.length === 0 ? "not-allowed" : "pointer"
                    }}
                  >
                    <i className="bi bi-text-indent-left me-2"></i>
                    Remove Spaces
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats and Preview Section */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm border-0 h-100" style={{ 
              backgroundColor: props.mode === "dark" ? "#2c3034" : "white",
              color: props.mode === "light" ? "black" : "white"
            }}>
              <div className="card-body p-3 p-md-4">
                <h3 className="mb-4">Text Summary</h3>
                
                {/* Stats Cards */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="stat-card p-3 rounded text-center" style={{ 
                      backgroundColor: props.mode === "dark" ? "#4951b3" : "#f8f9fa",
                      border: props.mode === "dark" ? "none" : "1px solid #e9ecef"
                    }}>
                      <h4 className="mb-2" style={{ 
                        color: props.mode === "light" ? "#4951b3" : "white"
                      }}>
                        {wordCount}
                      </h4>
                      <p className="mb-0 small">Words</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card p-3 rounded text-center" style={{ 
                      backgroundColor: props.mode === "dark" ? "#4951b3" : "#f8f9fa",
                      border: props.mode === "dark" ? "none" : "1px solid #e9ecef"
                    }}>
                      <h4 className="mb-2" style={{ 
                        color: props.mode === "light" ? "#4951b3" : "white"
                      }}>
                        {charCount}
                      </h4>
                      <p className="mb-0 small">Characters</p>
                    </div>
                  </div>
                </div>
                
                {/* Reading Time */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-clock me-2"></i>
                    <h5 className="mb-0">Reading Time</h5>
                  </div>
                  <p className="mb-0">
                    {readTime.toFixed(2)} minutes
                    <br />
                    <small className="text-muted">(at average reading speed)</small>
                  </p>
                </div>
                
                {/* Preview Section */}
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Preview</h5>
                    <span className="badge bg-secondary">{text.length > 0 ? "Live" : "Empty"}</span>
                  </div>
                  <div className="preview-container p-3 rounded" style={{
                    backgroundColor: props.mode === "dark" ? "#1a1d20" : "#f8f9fa",
                    color: props.mode === "light" ? "black" : "#e9ecef",
                    minHeight: "120px",
                    maxHeight: "200px",
                    overflowY: "auto",
                    border: props.mode === "dark" ? "1px solid #4951b3" : "1px solid #dee2e6",
                    fontSize: "0.95rem",
                    lineHeight: "1.5"
                  }}>
                    {text.length > 0 ? text : "Enter some text to see the preview here..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some custom styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .btn {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
          .stat-card {
            padding: 1rem !important;
          }
        }
        
        .btn {
          transition: all 0.2s ease;
        }
        
        .btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .stat-card {
          transition: transform 0.2s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .preview-container::-webkit-scrollbar {
          width: 6px;
        }
        
        .preview-container::-webkit-scrollbar-track {
          background: ${props.mode === "dark" ? "#1a1d20" : "#f1f1f1"};
          border-radius: 10px;
        }
        
        .preview-container::-webkit-scrollbar-thumb {
          background: ${props.mode === "dark" ? "#4951b3" : "#888"};
          border-radius: 10px;
        }
        
        .preview-container::-webkit-scrollbar-thumb:hover {
          background: ${props.mode === "dark" ? "#5a62c4" : "#555"};
        }
      `}</style>
    </div>
  );
}