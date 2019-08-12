import { combineReducers } from "redux";
import PostListReducer from './postListReducer';


export default combineReducers({
    postList : PostListReducer
});