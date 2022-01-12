import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map((cat, idx) => {
     return(
       <li key= { idx }>{cat}</li>
      )
     }
      )}
   </div>
 )
}
 
export default CatList;
