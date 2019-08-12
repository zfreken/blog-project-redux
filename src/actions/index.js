import axios from 'axios';

// Eger object donmek istersek middleWare kullanmmamiza gerek yok 
// ama biz async ile func dondugumuz icin bu sekilde redux-thunk ile middleWare olusturup 
// dispatch ederek object donduk.


export const fetchPostList = () => {


  return async (dispatch) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({
      type:'FETCH_POST_LIST',
      payload : response.data
    });
  }
}