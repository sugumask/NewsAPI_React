import React, { Component } from 'react';

class NewsDesc extends Component{
    render(){
        return(
            <p className='content'>{this.props.description}</p>
        )
    }
}
export default NewsDesc;