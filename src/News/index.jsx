import React from 'react';
import { Component } from 'react';
import  './styles.css';
import NewsHead from './NewsHead';
import NewsImage from './NewsImage';
import NewsDesc from './NewsDesc';
import NewsTime from './NewsTime';
import NewsClick from './NewsClick';

class News extends Component{
    render(){
const{item:{title,urlToImage,description,publishedAt,author,url}}=this.props;
        return(
            <div className='main'>
                <div className='main-content'>
                <NewsHead title={title}/>
                <NewsImage image={urlToImage} />
                <NewsDesc description={description} />
                <NewsTime time={publishedAt} author={author}/>
                <NewsClick url={url} title={title} removeNews={this.props.removeNews}/>               
                </div>
            </div>
        )
    }
}
export default News;