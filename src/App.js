import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from './redux-action-creators/increment-decrement';

const App = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className='App-div'>
      <button onClick={()=> dispatch(increment())} >Increment</button>
      <button onClick={ ()=> dispatch(decrement())}>Decrement</button>
      <h1>counter {counter}</h1>
    </div>
    
  );
}

export default App;
