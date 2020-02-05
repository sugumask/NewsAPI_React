import React, { Component } from 'react';

class NewsImage extends Component{
    render(){
        return(
            <>
            <a href={this.props.image} target='_blank'>
            <img src={this.props.image} className='content' alt='We are on the way Please wait a min'/>
            </a>
            </>
        )
    }
}
export default NewsImage;