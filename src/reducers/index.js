import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favouriteReducer from "./favouriteReducer";
const reducer = combineReducers({
  movieReducer,
  favouriteReducer,
});
export default reducer;