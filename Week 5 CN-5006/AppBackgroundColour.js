import './App.css';

function AppColour(props){

    function greetUser(e) {
        document.body.style.background= e.target.value;
        alert('welcome'+document.getElementById(props.colour).value);
    }

    return(
        <body style={{ backgroundcolour: 'skyblue',colour:'white'}}>
            <div className='app'>
                <h1>{props.heading}</h1>
                <p style={{colour:'purple',font:'30px arial'}}>
                    how to create a funcutional component
                </p>
                <label class='label' id='lb1'>
                    {props.lb1}
                </label>
                <input id={props.colour} type='text'></input>
                <button value={props.colour} onClick={greetUser}> 
                    Colour Me{props.colour}

                </button>
            </div>
        </body>
    );
}
export default AppColour;