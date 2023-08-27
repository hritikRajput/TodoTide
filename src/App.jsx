import './App.css';
import { backgrounds } from "./db/index";

function App() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const bg = backgrounds[randomIndex];
  console.log(bg)
  return (
    <div className='app' style={{ backgroundImage: `url("${bg.image}")` }}>
    </div>
  );
}

export default App;
