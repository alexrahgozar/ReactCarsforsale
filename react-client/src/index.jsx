import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Cars from "./components/Cars.jsx";

var globalData = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    console.log("here Alex compDidMount Says");
    $.get("/cars", function(carData) {
      console.log("This is CarData inside indexjsx: ", carData);
      var div = document.createElement("div");
      globalData.push(carData);
    }).done(carData => {
      this.setState({
        items: carData
      });
    });
  }

  save(term) {
    console.log(term);
    console.log(`${term} was posted`);

    fetch("/cars", {
      method: "POST",
      body: JSON.stringify(term),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(() => window.location.reload(false));
  }

  render() {
    console.log(this.state.items, "youuuuuu");
    return (
      <div>
        <h1>Carsforsale.com®</h1>
        <Cars saveMyCar={this.save} />

        {this.state.items.map((item, index) => {
          return (
            <ul style={{ backgroundColor: "#8b9dc3" }}>
              <li>Seller: {item.seller}</li>
              <li>Make: {item.make}</li>
              <li>Model: {item.model}</li>
              <li>Year: {item.year}</li>
              <li>Milage: {item.milage}</li>
              <li>Price: {item.price}</li>
              <li>Phone: {item.phone} </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
