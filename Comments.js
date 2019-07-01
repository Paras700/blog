import React from 'react';
import Post from '../Components/Post'
export default class Comments extends React.Component{
     constructor(props){
        super(props);
     }

     render(){
         const new_data = this.props.data.list;
         console.log(new_data);
         const element = new_data.map((item) =>{
         return(
             <div className="container">
                      <p>{item}</p>
            </div>
          );  
        });return <p>{element}</p>  
     }
}
