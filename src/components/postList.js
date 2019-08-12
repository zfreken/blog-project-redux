import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../actions';

class PostList extends Component {

  componentDidMount(){
    this.props.fetchPostList();
  }

  renderItem(post){
    return(
      <div className="item">
        <i className="right triangle icon"></i>
        <div className="content">
          <div className="header">{post.title}</div>
          <div clclassName="description">{post.body}.</div>
        </div>
      </div>

    )
  }

  render() {
    return (
      <div className='ui list'>
          {this.props.postList.map(post => this.renderItem(post))}
      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    postList : state.postList
  }
}

export default connect(mapStateToProps,{ fetchPostList })(PostList);