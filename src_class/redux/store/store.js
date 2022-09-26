import { createStore } from "redux";
import RootReducer from './RootReducer';

export const store = createStore(RootReducer);

// All the reducer are stored in one center point location which is being called redux store.