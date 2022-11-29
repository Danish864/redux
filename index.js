const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake(cake = 1) {
  return {
    type: CAKE_ORDERED,
    payload: cake,
  };
}

function cakeRestock(qty) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

function orderIcecream(icecream = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: icecream,
  };
}

function icecreamRestock(qty) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIcecream: 15,
};

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

store.dispatch(orderCake(2));
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(cakeRestock(5));

store.dispatch(orderIcecream(2));
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(icecreamRestock(5));

unsubscribe();