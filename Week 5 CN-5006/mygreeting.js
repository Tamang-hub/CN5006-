import './App.css';
function GreetingElement() {
    const greeting='Welcome to  react application development';

    return(
        <div className='app'>
            <h1>{greeting} </h1>
        </div>
    );
}

export default GreetingElement