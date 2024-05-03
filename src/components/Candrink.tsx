const CanDrink = (props: Signature) : JSX.Element => {

    let isAllowedUS: boolean = true;
    let isAllowedUK: boolean = true;
    const age: number = props.age;

    if (age<18)   isAllowedUK = !isAllowedUK
         
    if (age<21)  isAllowedUS = !isAllowedUS  


    return (
    <ul>
        <li>{props.name}, you {isAllowedUK ? 'can' : "can't" } drink in the UK</li>        
        <li>{props.name}, you {isAllowedUS ? 'can' : "can't" } drink in the Texas</li>

    </ul>)
}

type Signature = {
    name: string,
    age: number,
    ageFunc: () => void
}

export default CanDrink;