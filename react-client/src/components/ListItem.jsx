import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cars from './components/Cars.jsx';
class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  $.ajax {
  url: "/localhost:3000/cars"
}.then(function(data) {
  console.log('/////dataaa ', data)
});

}


export default ListItem;



 ReactDOM.render(<ListItem />, document.getElementById('app'));
// ReactDOM.render(
//   <ListItem saveMyCar={this.save}/>,
//   document.getElementById('cars')
// );
