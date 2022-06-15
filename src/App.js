import Block from './components/block';
import Header from "./components/header";
import "./App.css";
import ph3 from "./res/photo3.jpeg";
const ph1 = "https://source.unsplash.com/gYl-UtwNg_I/1500x1500";
const ph2 = "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"

const ph4 = "https://source.unsplash.com/ITjiVXcwVng/1500x1500";
const ph5 = "https://source.unsplash.com/3MNzGlQM7qs/1500x1500";

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <div className='cont'>
        <Block text = "Hey" imgsrc = {ph1}/>
        <Block text = "Let's" imgsrc = {ph2}/>
        <Block text = "Give" imgsrc = {ph3}/>
        <Block text = "All" imgsrc = {ph4}/>
        <Block text = "You can" imgsrc = {ph5}/>
      </div>
    </div>
  );
}

export default App;