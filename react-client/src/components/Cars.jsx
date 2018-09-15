import React from 'react';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Seller: '',
      Make: '',
      Model: '',
      Year: 0,
      Milage: 0,
      Price: 0,
      Phone: 0

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value });
  }



  handleSubmit  (e) {
    var data =
    {seller: this.state.Seller,
      make: this.state.Make,
      model: this.state.Model,
      year: this.state.Year,
      milage: this.state.Milage,
      price: this.state.Price,
      phone: this.state.Phone
  }

   console.log(data)
    // console.log('function saveMyCar: ', this.props.saveMyCar)

    e.preventDefault()
    this.props.saveMyCar(data)
    e.target.reset();
  }

  render() {

    return (

      <form method='POST' onSubmit={this.handleSubmit} className='inputForm'>
      <label>
      Seller : <input
      type='text'
      name='Seller'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
      <label>
      Make : <input
      type='text'
      name='Make'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
      <label>
      Model : <input
      type='text'
      name='Model'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
      <label>
      Year : <input
      type='Number'
      name='Year'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
      <label>
      Milage : <input
      type='Number'
      name='Milage'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
      <br></br>
        <label>
        Price : <input
        type='Number'
        name='Price'
        value={this.state.term}
        onChange={this.handleChange}/>
        </label>
        <br></br>
      <label>
      Phone Number : <input
      type='Number'
      name='Phone'
      value={this.state.term}
      onChange={this.handleChange}/>
      </label>
        <br></br>
        <input type='submit' value='Submit'/>
    </form>

    )
  }
}

export default Cars;
