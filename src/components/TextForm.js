import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearText = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }

    const handleCopyToClipboard = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleRemoveExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("New text"); // Correct way to change the text
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#2d1717'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2'  onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2'  onClick={handleCopyToClipboard}>Copy Text</button>
            <button className='btn btn-primary mx-2'  onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary mx-2'  onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#2d1717'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").join("").length} and {text.length} characters</p>
            <p>{0.008 * text.split(" ").join("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}