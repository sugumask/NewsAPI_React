import React, { Component } from 'react';

class NewsClick extends Component{
    render(){
        return(
            <>
            <a href={this.props.url} className='external' target='_blank'> <img src='open1.jpg' className='external'/> </a>
                <button onClick={()=>this.props.removeNews(this.props.title)} className='delete-card' value='DELETE'>DELETE</button> 
                 
            </>    
        )/*<img src='del.png' className='delete-card'/>*/
    }

}
export default NewsClick;