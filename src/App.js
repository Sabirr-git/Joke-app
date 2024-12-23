import './App.css';
import {useState} from 'react';

function App() {
   const Jokes = ["What did one snowman say to the other snowman? It smells like carrots over here!","What did 20 do when it was hungry? Twenty-eight.","Why is grass so dangerous? Because it's full of blades!","Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!","Why can't a nose be 12 inches long? Because then it would be a foot.","What is the most popular fish in the ocean? The starfish.","Why did the football coach yell at the vending machine? He wanted his quarter back!","I had a joke about paper today, but it was tearable.","What kind of job can you get at a bicycle factory? A spokesperson","What subject do cats like best in school? Hiss-tory."];
   const [currentjoke,setcurrentjoke]= useState('');

   const button_clicked= ()=>{
   const randomindex = Math.floor(Math.random() * Jokes.length)
   setcurrentjoke(Jokes[randomindex]);
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentjoke)
      .then(() => {
        alert('Joke copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
    
   
    return (
       <div className="App">

        <h1>Jokes App</h1>
        <h2>{currentjoke}</h2>
        <button onClick={button_clicked}  id='btn1'  >Get Jokes</button>
        <button onClick={copyToClipboard} id='btn2'> Copy joke </button>
       </div>
    );
}

export default App;

