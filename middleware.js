const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

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

const cakeState = {
  numOfCakes: 10,
};

const icecreamState = {
  numOfIcecream: 15,
};

// (previousState, action) => newState
const cakeReducer = (state = cakeState, action) => {
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
    default:
      return state;
  }
};

const icecreamReducer = (state = icecreamState, action) => {
  switch (action.type) {
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

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

// store.dispatch(orderCake(2));
store.dispatch(orderCake());
store.dispatch(cakeRestock(5));

// store.dispatch(orderIcecream(2));
store.dispatch(orderIcecream());
store.dispatch(icecreamRestock(5));

unsubscribe();
