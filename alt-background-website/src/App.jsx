import { useState } from 'react' //used to keep track of the current index
import './App.css'


const background_colors = ['#e63946', '#ffffff', '#a8dadc', '#457b9d', '#1d3557'];

function App() {
  const [count, setCount] = useState(0)

  const buttonClick = () => {
    setCount((index) => (index + 1) % background_colors.length); //wraps back to first color
  };

  return (
    <div className="alt-background" style={ {backgroundColor: background_colors[count]} } >
    
      <button className="created-button" onClick={buttonClick}>
        Change background
      </button>

    </div>
  );
}

export default App
