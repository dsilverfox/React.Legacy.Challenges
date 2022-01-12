import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component() {
  constructor (props) {
    super(props);
      this.state = {
       things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
        }
        this.search = ('')
  };

  holdChange(e) {
    this.setSearch({search: e.target.value})
  };

 searchFunction() {
  return this.state.things.filter((thing) => thing.toLowerCase().includes(this.search.toLowerCase()))
  };


 render() {
   return(
     <div>
       <Input placeholder='Search Here'
       type='text'
       value= {this.search}
       onChange= {this.holdChange}
        />
        <button onClick={(e)=> this.searchFunction()}>Click Me!</button>
       <h3>Results:</h3>
       {this.things.map((thing) => 
       <li>{thing}</li>
       )};
     </div>
   )
   } 
  };
 
export default SearchIndex;
