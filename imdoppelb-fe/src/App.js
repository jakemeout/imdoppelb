import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import "./css/App.css";

function App() {
  const divStyle = 
    {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: '5%'
    };

  return (
    <>
      <Nav />
      <div style={divStyle}>
      <Search />
      </div>
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
