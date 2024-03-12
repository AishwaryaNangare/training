
import './App.css';
import CounterClass from './Components/ClassBasedComp/CounterClass';
import EventProps from './Components/Props/EventProps';
import Person from './Components/Props/Person';
import PersonList from './Components/Props/PersonList';
import SendProps from './Components/Props/SendProps';
import StyleProps from './Components/Props/StyleProps';
import ThemeConsumerComponent from './Components/UseContextHook/ThemeConsumerComponent';
import Counter from './Components/UseReducerHook/Counter';
import TextInput from './Components/UseRefHook/TextInput';
import LoggedIn from './Components/UseStateHook/LoggedIn';

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
   <LoggedIn/>
   <Counter/>
   <ThemeConsumerComponent/>
   <TextInput/>
   <CounterClass initialValue={0}/>
  
   </>

  );
}

export default App;
