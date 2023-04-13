import React, { useState } from 'react'

export default function Textform(props) {
    //               text is  value and useState is method    (and)     useState is use for updating text value
    const [text, setText] = useState("");

    // function ....
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // sentence change into cap form 
    const textInUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'text is convert into upper case')
    }

    // sentence change in lower form 
    const textInLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'text is convert into lower case')
    }

    // clean all 
    const textInCleanCase = () => {
        setText("");
        props.showAlert('success', 'text is clean')
    }
    // first word of sentence be capital 
    const firstWord = () => {
        let properForm = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(properForm);
        props.showAlert('success', 'first word is capital')
    }
    // all words in capital letter 
    function allWordCap() {
        let properForm = text.split(" ");
        let temp = "";
        properForm.forEach((element) => {
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            temp = temp + " " + element;
            setText(temp);
            props.showAlert('success', 'all words in capital letter')
        })

    }

    // text bold on click on button 
    function boldText() {
        let boldValue = document.querySelector("#boldSize").value;
        document.querySelector("#getText").style.fontWeight = boldValue;
        props.showAlert('success', 'text is bold')

    }

    // change font style 
    function italicText() {
        document.querySelector("#getText").style.fontStyle = "italic";
        props.showAlert('success', 'text is italic')
    }

    // add underline 
    function underlineText() {
        document.querySelector("#getText").style.textDecoration = "underline";
        props.showAlert('success', 'text is underline')
    }


    // Change color name 
    function colorChange() {
        var colorNam = document.querySelector("#colorValue").value;
        document.querySelector("#getText").style.color = colorNam;
        props.showAlert('success', 'text is color')
    }

    function enterHere() {
        var splitWords = document.querySelector("#getText").value.split(" ");
        let searchName = document.querySelector("#searchName").value;
        for (let i = 0; i < splitWords.length; i++) {
            const regex = /[a-z]/gi;
            const found = searchName.match(regex);
            console.log(found)
            if (found) {
                props.showAlert('success', 'found')
            } else {
                props.showAlert('error', 'not found')
            }
          
        }
    }

    // dropdown text editing button 

    // let dropdownMenuLink = document.querySelector("#dropdownMenuLink");
    // dropdownMenuLink.addEventListener("cick", () => {
    //     alert("")
    // })




    return (
        // jsx in return 
        <>
            <div className="mb-3 container" style={{backgroundColor: props.mode === 'dark'? 'black': 'white', color:props.mode === 'dark'?'white':'black'}}>
                {/* header part design */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                    <div>
                        <h1>Enter text here</h1>
                    </div>
                    <div>
                        {/* count total words and total alphabets */}
                        <h5>Total Character <span style={{ fontWeight: 600, padding: "2.5px" }}>{text.split(" ").length}</span> and Total Words <span style={{ fontWeight: 600, padding: "2.5px" }}>{text.length}</span></h5>
                    </div>
                </div>

                {/* text area  */}
                <div>
                    <textarea className="form-control putText" id="getText" rows="3"
                        value={text} onChange={handleOnChange} autoFocus placeholder='TEXT HERE . . . '></textarea>
                </div>

                <div className='p-2'>
                    {/* dropdown list on click on text editor*/}
                    <div class="dropdown ">
                        <button className={`btn btn-${props.mode} dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Text Editor
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <div id='dropItem'><hr />
                                    <button className='btn btn-primary m-1' onClick={textInUpperCase}>UPPER CASE</button>
                                    <button className='btn btn-primary m-1' onClick={textInLowerCase}>LOWER CASE</button>
                                    <button className='btn btn-primary m-1' onClick={textInCleanCase}>CLEAR</button>
                                    <button className='btn btn-primary m-1' onClick={firstWord}>PROPER FORM</button>
                                    <button className='btn btn-primary m-1' onClick={allWordCap}>CAPITAL ALL WORDS</button>
                                    <button className='btn btn-primary m-1' id='italicWord' onClick={italicText}>ITALIC</button>
                                    <button className='btn btn-primary m-1' id='underlineWord' onClick={underlineText}>UNDERLINE</button>
                                    <button className='btn border m-1 ' onClick={boldText}> BOLD
                                        <select id='boldSize' className='ms-2 rounded-3 bg-primary text-white border-0'>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="300">300</option>
                                            <option value="400">400</option>
                                            <option value="500">500</option>
                                            <option value="600">600</option>
                                            <option value="700">700</option>
                                            <option value="800">800</option>
                                            <option value="900">900</option>
                                        </select>
                                    </button>
                                    <div>
                                        <input type='text' id='colorValue' placeholder='Font Color Name...' />
                                        <button className='btn btn-primary m-1' onClick={colorChange}>COLOR</button><br />
                                        <input type='text' id='searchName' placeholder='Name of Word' />
                                        <button className='btn btn-primary m-1' onClick={enterHere}>Enter</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* your text summary  */}
            <div>
                <h2 style={{backgroundColor: props.mode === 'dark'? 'black': 'white', color:props.mode === 'dark'?'white':'black'}}>Your text Summary</h2>
            </div>
        </>)
}
