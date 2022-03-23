import './App.css';
import {createStore, compose, applyMiddleware, bindActionCreators} from 'redux';


function App() {
  // //store
// //action
// const increment =()=>{
//   return{
//     type: 'INCREMENT'
//   };
// };
// const decrement =()=>{
//   return{
//     type: 'DECREMENT'
//   };
// };
// //reducer
// const counter =(state=0, action)=>{
// switch(action.type){
// case 'INCREMENT':
// return state +1;
// case 'DECREMENT':
// return state -1;
// }
// };
// let store = createStore(counter);
// //display in the console
// store.subscribe(()=> console.log(store.getState()));
// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
const makeBigger = string => string.toUpperCase();
const makeRepeat = string => string.repeat(3);
const makeBold = string => string.bold();
const incorporateAllThese = compose(makeBold, makeRepeat, makeBigger);
console.log(incorporateAllThese("elo"));
const initialState ={value:0};
const incrementAction ={
  type:'INCREMENT',
  payload:5
}
const reducer = (state, action)=> {
  return state;
};
const store = createStore(reducer);
console.log(store);

  return (
    <div className="App">

    </div>
  );
}

export default App;
