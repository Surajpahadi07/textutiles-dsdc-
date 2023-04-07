import React, { useState } from 'react'

export default function Textform() {
    //               text is  value and useState is method    (and)     useState is use for updating text value
    const [text, setText] = useState("");

    // function ....
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const textInUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const textInLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const textInCleanCase = () => {
        setText("");
    }
    const firstWord = () => {
        let properForm = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(properForm);
    }
    
    function allWordCap () {
        let properForm = text.split(" ");
        let temp = "";
        properForm.forEach((element)=>{
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            temp   = temp +" "+ element;
            setText(temp);
        })
       
    }
return (
    <div>
        <div className="mb-3 container">
            {/* css use in jsx     "style={{margin:'50px', padding:'10px;'}}"     */}
            <h1>Enter text here</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                value={text} onChange={handleOnChange}></textarea>
            <div className='p-2'>
                <button className='btn btn-primary m-1' onClick={textInUpperCase}>UPPER CASE</button>
                <button className='btn btn-primary m-1' onClick={textInLowerCase}>LOWER CASE</button>
                <button className='btn btn-primary m-1' onClick={textInCleanCase}>CLEAR</button>
                <button className='btn btn-primary m-1' onClick={firstWord}>PROPER FORM</button>
                <button className='btn btn-primary m-1' onClick={allWordCap}>CAPITAL ALL WORDS</button>
            </div>
            <div>
                <h2>Your text Summary</h2>
            </div>
            <div>
                <p>total character {text.split(" ").length} and total words {text.length}</p>
            </div>
        </div>
    </div>
)
}
