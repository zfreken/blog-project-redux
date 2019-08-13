import { combineReducers } from "redux";
import PostListReducer from './postListReducer';
import UserListReducer from './userListReducer';


export default combineReducers({
    postList : PostListReducer,
    userList : UserListReducer
});