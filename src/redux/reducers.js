import { combineReducers } from "redux";

const user = (state = null) => state
const listings = (state = []) => state

export default combineReducers({ user, listings });