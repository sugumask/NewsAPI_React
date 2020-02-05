import React, { Component } from 'react';
class NewsTime extends Component{
    render(){
        return(
            <div>
                <span className='left-content'>{this.props.time} </span>
                <span className='right-content'>{this.props.author} </span>                
                </div>
        )
    }
}
export default NewsTime;