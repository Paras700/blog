import React from 'react';
import { conditionalExpression } from '@babel/types';
import Comments from './Comments';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
          list :[],
          text : ""
        };
    }
    pushData(e){
    this.setState({
      text :e.target.value
    }); 
    }
    saveData(){
        console.log('called');
        this.setState({
            list: [...this.state.list, this.state.text]
        })
        console.log(this.state.list);
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
                      egestas haugue, eu vulputate magna eros eu erat. Aliquam erat volutpat. 
                      Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                      </p>
                 </div>
                    <div className="container">                   
                    <div className="input-group">
                    <span className="input-group-addon">Comment</span>
                    <input type="text" 
                      placeholder="Say something..." 
                      className="form-control"
                      onInput={(e) => this.pushData(e)}
                      />  
                </div>
                    <input type="button"                   
                      className="btn btn-primary"
                      value="Post"
                      onClick={(e) =>this.saveData(e)} 
                      />
                  </div>
                  <div>
                      <Comments data={this.state}/>
                    </div>
            </div>
        );
    }
}
