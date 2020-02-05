import React, { Component } from 'react';
class NewsHead extends Component{
    render(){
        return(
            <div className='content'>{this.props.title} </div>
        )
    }
}
export default NewsHead;