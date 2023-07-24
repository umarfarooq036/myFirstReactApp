import React, { useState } from 'react'
// import axios from 'axios'
// import fileDownload from 'js-file-download'

export default function TextForm(props) {
    const convertUpClick = () => {
        // console.log("upper case button clicked:")
        let newText = text.toLocaleUpperCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text", "warning")
        }
        else {
            props.showAlert("Converted to Upper Case", "success")

        }
    }
    const convertLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text", "warning")
        }
        else {
            props.showAlert("Converted to Lower Case", "success")
        }
    }
    const clearText = () => {
        let newText = ("");
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text", "warning")
        }
        else {
            props.showAlert("Text Cleared", "success")

        }
    }
    const handleCopyText = ()=>{
        // navigator.clipboard.writeText(`"${text}"`).then(()=>alert("Copied!
        // alert(`${"'" + text +"\'"} copied to clipboard`);
        // copyToClipboard(`'${text}'`)
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();  
        props.showAlert("Copied to clipboard!","success")

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // let words = text.replace(/\s+/g, ' ').trim();
    // let wordsCount = words.split(' ').length;  

    let words = text.split(/\s+/).filter((element) => { return element.length !== 0 })
    let wordsCount = words.length;

    return (
        <>
            <div className="container my-3 ">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-outline-primary" onClick={convertUpClick}>ConvertToUpperCase</button>
                <button disabled = {text.length === 0} type='button' className="btn btn-outline-secondary mx-2" onClick={convertLowClick}>ConvertToLowerCase</button>
                <button disabled = {text.length === 0} type='button' className="btn btn-outline-secondary mx-2" onClick={clearText}>Clear Text</button>
                <button disabled = {text.length === 0} type='button' className="btn btn-outline-secondary mx-2" onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{wordsCount} Words and {text.length} Characters.</p>
                <p>{wordsCount * 0.008} Minutes to read this.</p>
            </div>
            <div className="container my-3">
                <h2>Preview Your Text</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview here."}</p>
            </div>
        </>
    )
}