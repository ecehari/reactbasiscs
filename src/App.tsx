import { useState } from 'react';
import './App.css'
import CanDrink from './components/Candrink';
import Greeting from './components/Greeting/Greeting';
import SongList from './components/Songs/SongList';
import Song from './components/Songs/Song';


function App() {

  const mattsAge = 19;
  const mattsName = "Matt";

 const [age,setAge] = useState<number>(17);

const haveBirthday = () => {
  setAge(age => age + 1);
  console.log(age);
}

  return (
  <div>
    <h1>Hello World</h1>
    <Greeting name={mattsName} age={age} ageFunc={haveBirthday}/>
    {/* <Greeting name="Tamsin" age={32}/> */}
    <br /> 
    {/* <Song title='Rocksong' artist='Ed' />
    <Song title='Jazz song' artist='Bieber' /> */}
    <SongList />
    <CanDrink name={mattsName} age={age}  />
    {/* <CanDrink name='Tamsin' age={21} />
    <CanDrink name='schoolkid' age={15} /> */}
  </div>);
  
}

export default App
