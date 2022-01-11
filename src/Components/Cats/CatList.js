import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.Map(cat => {
     return(
     <div>
     <li key={props.cats.id}>{cat}</li>
     </div>
      )
     }
      )}
   </div>
 )
}
 
export default CatList;
