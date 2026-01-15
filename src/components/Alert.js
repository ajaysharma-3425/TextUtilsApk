import React, { useEffect, useState } from 'react';

export default function Alert(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Check if alert exists and has valid structure
  const isValidAlert = props.alert && 
                      typeof props.alert === 'object' && 
                      props.alert.type && 
                      props.alert.message;

  useEffect(() => {
    if (isValidAlert) {
      setIsVisible(true);
      setIsExiting(false);
      
      // Auto dismiss after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isValidAlert, props.alert]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (props.onClose) {
        props.onClose();
      }
    }, 300);
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'danger':
        return '⚠';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '✕';
    }
  };

  // Safe type extraction with fallback
  const getAlertType = () => {
    if (!isValidAlert) return 'info';
    return props.alert.type || 'info';
  };

  // Safe title extraction with fallback
  const getAlertTitle = () => {
    if (!isValidAlert) return '';
    
    if (props.alert.title) return props.alert.title;
    
    const type = getAlertType();
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  if (!isValidAlert || !isVisible) return null;

  const alertType = getAlertType();
  const alertTitle = getAlertTitle();
  const alertMessage = props.alert.message || '';

  return (
    <div className="alert-container">
      <div 
        className={`alert-toast ${alertType} ${isExiting ? 'exiting' : ''}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="alert-content">
          <div className="alert-icon">
            {getAlertIcon(alertType)}
          </div>
          <div className="alert-body">
            <div className="alert-title">
              {alertTitle}
            </div>
            <div className="alert-message">
              {alertMessage}
            </div>
          </div>
          <button 
            className="alert-close-btn"
            onClick={handleClose}
            aria-label="Close alert"
          >
            ×
          </button>
        </div>
        <div className="alert-progress-bar">
          <div className="alert-progress"></div>
        </div>
      </div>
    </div>
  );
}