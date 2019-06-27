import React from 'react';
import Post from '../Components/Post'
export default class Comments extends React.Component{
     constructor(props){
        super(props);
     }

     render(){
         const element = this.props.Comment;
         console.log(element);
         return(
             <div className="container">
                 <ul>
                     <li>
                         {element}
                    </li>
                </ul>
            </div>
         );
     }
}