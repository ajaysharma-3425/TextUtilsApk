import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export default function Textform(props) {
  const [text,setText] = useState("");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }
    const handleClrClick = () =>{
      setText("");
      props.showAlert("TextArea Cleared","success");
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
    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied","success");
      toast.success('A Text was Copied !', {
        position: "bottom-center"
      })      
    }
    const handleEsClick=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
  return (
    <div>
    
    <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{backgroundColor:props.mode==="dark"?"#4951b3":"white",color:props.mode==="light"?"black":"white"}}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleEsClick}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
    <h2>Your Text Summary :</h2>
    <p>{text.split(/\s/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes To Read</p>
    <h5>Preview</h5>
    <p>{text.length>0?text:"Enter somthing to Preview"}</p>
    </div>
    </div>
  );
}
