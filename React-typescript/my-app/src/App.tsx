
import './App.css';
import CounterClass from './Components/ClassBasedComp/CounterClass';
import Generics from './Components/GenericProps/Generics';
import EventProps from './Components/Props/EventProps';
import Person from './Components/Props/Person';
import PersonList from './Components/Props/PersonList';
import SendProps from './Components/Props/SendProps';
import StyleProps from './Components/Props/StyleProps';
import Toast from './Components/TemplateLitrals/Toast';
import ThemeConsumerComponent from './Components/UseContextHook/ThemeConsumerComponent';
import Counter from './Components/UseReducerHook/Counter';
import TextInput from './Components/UseRefHook/TextInput';
import LoggedIn from './Components/UseStateHook/LoggedIn';
import CustomButton from './Components/htmlProps/CustomButton';

function App() {
 const  personName ={
    first:'Ajay',
    last:'Vijay'
  }

  const nameList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    },

  ]
  return (
    <>
    {/* props */}
   <SendProps heading='React-typescript' name='Ajay' loginCount={10} 
   isLoggedIn={true}/>
   <Person name={personName}/>
   <PersonList names={nameList}/>
   <EventProps handleClick={(event,id)=>{console.log('Button Clicked',event,id)}}/>
   <StyleProps style={{border:'1px solid black', padding:'1rem'}}/>
   {/* Usestate hook in typescript */}
   <LoggedIn/>
   <Counter/>
   {/* useContext */}
   <ThemeConsumerComponent/>
   {/* useref */}
   <TextInput/>
   {/* class components */}
   <CounterClass initialValue={0}/>
   {/* generics */}
   <Generics
   items={[ "John", "Riya","Ketki"]  }
   onClick={(item)=>console.log(item)}
   />
   <Generics
   items={[ 1, 2,4,5]  }
   onClick={(item)=>console.log(item)}
   />
  
  {/* Wrapping Up HTML elements */}
   <CustomButton varient='primary'>Primary Button</CustomButton>

   <Toast position='left-top'/>
  
   </>

  );
}

export default App;
