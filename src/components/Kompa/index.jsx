const Kompa = (props) => {
    //const greet = props.greet;
    //const num = props.num;
    const { greet, num, nick } = props;
    return (
        <div>
            <h1>Funkcijska kompa {greet +"!"} i broj je {num + 10} a nadimak {nick}</h1>
            <p>neki tekst</p>
        </div>
    );
};

//najbolji nacin
// const Kompa = ({ greet, num }) => {
//    return (
//        <div>
//            <h1>Funkcijska kompa {greet +"!"} i broj je {num + 10}</h1>
//            <p>neki tekst</p>
//        </div>

//    );
//};

export default Kompa;

