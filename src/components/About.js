import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const [btnColor, setbtnColor] = useState("btn btn-primary")
    // let toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px, solid, white'
    //         })
    //         setbtnText('Enable Dark Mode');
    //         setbtnColor('btn btn-primary ')
    //     }
    //     else{
    //         setmyStyle(
    //             {
    //                 color: 'white', 
    //                 backgroundColor: 'black'
    //             })
    //         setbtnText('Disable Dark Mode');
    //         setbtnColor('btn btn-secondary ');
    //     }
    return (
        <div className="container" style={{backgroundColor : props.mode==='light'?'white':'black', color : props.mode==='light'?'black':'white'}}>
            <h2 className="my-3">About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Text Utils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}}>
                            <strong>Text Utils is the App with major basic tools required to manipulate given text.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How to use it?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}} >
                            <strong>Just go on textutils_uf.com.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How it can save your time?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'black', color : props.mode==='light'?'black':'white'}} >
                            <strong>It can save your plenty of time in manipulating your text on the local applications.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className={btnColor}>{btnText}</button>
            </div> */}
        </div>
    )
}
