import { useState, useSyncExternalStore } from 'react';
import './Greeting.css';

const Greeting = (props: GreetingProps) : JSX.Element => {


     let age: number = props.age;
    //  const pets: string[] = ['dog','cat','snail'];
    // const elizabeth = pets[0];
    // const lucy = pets[1]

    // array destructing
    // const [elizabeth,lucy,tamsin] = pets;

    // console.log(elizabeth);
    
    // const [age,setAge] = useState<number>(props.age);

    // useState(props.age);
    // gives back an Array
    // stateful variable
    // setter method to update the stateful varibale 

    const haveBirthday = () : void => {
        // setAge(age + 1);
        // setAge with arrow function
        // setAge((age) => age +1 )
        // console.log("before 2nd increment ", age)
        // setAge((age) => age +1 )
        // age++;
        console.log("Happy Birthday");
       // console.log("incremented age is ", age)
        
    };


    return (
        <div>
            {/* <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p> */}
            <p className="greeting_text"> Hello {props.name}. You are {age} years old. </p>
            <button onClick={props.ageFunc}>Happy Birthday ! </button>
        </div>
    );
}

export default Greeting;

export type GreetingProps ={
    name: string,
    age: number,
    ageFunc: () => void
}
