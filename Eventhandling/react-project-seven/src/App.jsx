import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseover() {
    alert("Para k upar mouse lekar aaye ho");
  }

  function handleInputChange(e) {
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submit krdu kya ");
  }

  return (
    <div>
      <button onClick={() => alert("Button click hua h")}>
        Click me
      </button>
      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}
      {/* <p onMouseOver={handleMouseover} style={{ border: "1px solid black" }}>
        I am a Para
      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  );
}

export default App;
