import React from 'react';
import { conditionalExpression } from '@babel/types';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
           name : "",
           commment:"",
        };
    }
    onSubmit(e){
    e.preventDefault();
    let data =  JSON.stringify(localStorage.getItem('post'));
    console.log(data);
    const array =[];   
    if(data != null){
      data.map(function(v){
        array.push(v);
      });
    }  
    array.push(this.state);
    localStorage.setItem('post',JSON.stringify(array));
    }
    render(){
        return(
            <div>
                <div className="container">
                  <p className="bg-primary"> Pellentesque habitant morbi tristique senectus et netus et
                     malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                     feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                      eu libero sit amet quam egestas semper. Aenean ultricies mi 
                      vitae est. Mauris placerat eleifend leo. Quisque sit amet est
                      et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum 
                      sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
                      elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis 
                      tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
                      Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque 
                      egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. 
                      Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                      </p>
                 </div>
                    <div className="container">
                    <form className="comment-form form-group" onSubmit={(e) =>this.onSubmit(e)}>
                    <div className="input-group">
                    <span className="input-group-addon">Name</span>
                       <input type="text" 
                         placeholder="Your name" 
                         className="form-control"
                         value={this.state.name}
                         onChange={e => this.setState({ name: e.target.value })} 
                         />
                 </div>  
                    <div className="input-group">
                    <span className="input-group-addon">Comment</span>
                    <input type="text" 
                      placeholder="Say something..." 
                      className="form-control"
                      value={this.state.commment}
                      onChange={e => this.setState({ commment: e.target.value })}  
                      />
                </div>
                    <input type="submit"                   
                      className="btn btn-primary" />
                  </form>
                  </div>
            </div>
        );
    }
}