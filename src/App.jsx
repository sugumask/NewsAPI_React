import React, { Component } from 'react';

import './App.css';
import News from './News';

class App extends Component{
state = {articles:[]}
removeNewsArticles=newsDelete=>{
  this.setState({
    articles:this.state.articles.filter(bal =>bal.title !==newsDelete )
  })
}
  render(){
  return(
<>
    {
      !this.state.articles.length?<div className='load'>Loading...</div>:
      this.state.articles.map(item=><News item={item} removeNews={this.removeNewsArticles} />)
    }
</>
  )
}  
componentDidMount(){
  let apiUrl='https://newsapi.org/v2/everything?q=forests&apiKey=e8a2effb70bf42309142b02929ad533f';
  fetch(apiUrl)
  .then(response =>response.json()).then(res=>
    {
      if(res.status==='ok')
      {
        this.setState({
          articles:res.articles,
        })
      }console.log(res);
      
  })
}
}

export default App;
