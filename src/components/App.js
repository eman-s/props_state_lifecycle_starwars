import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props)
      this.state = {
        vehicles:[],
        value:'',
        pilot:''
      };
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
handleNameChange(event){
  this.setState({
    pilot:event.target.value
  })
}


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      pilot:'',
      value:this.state.pilot
    })

  }


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentWillMount(){
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json())
    .then((json)=>{
      console.log('heres all the',json)
      this.setState({
        vehicles:json.results})
      })
  }


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render(){
    let starwarz = this.state.vehicles;
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return (
      <div className="App">
        <Jumbotron />
        <div className="card text-center">
        <div className="card-header">
        </div>
        <div className="card-block">
        <h4 className="card-title">What is your name pilot?</h4>
        <form className='form' onSubmit = {this.handleSubmit}>
        <input onChange={this.handleNameChange} type="text" className="form-control" value={this.state.pilot} placeholder="enter your name"></input>
        <br></br>
        <button type="button" className="btn btn-primary btn-lg" type="submit" value="Submit">Enter Name</button>
        </form>
        </div>
        <div className="card-footer text-muted">
           <h2>{this.state.value}</h2>
        </div>
        </div>
          <div className='Wrapper'>
          {starwarz.map((spaceship)=>{
            return <div className="card" key={spaceship.name} style={{width: 400}}>
            <div className="card-block">
            <h4 className="card-title">Vehicle: {spaceship.name}</h4>
            <h5 className="card-text">Model: {spaceship.model}</h5>
            </div>
            <ul className="list-group list-group-flush">
            <h5 className="card-text">Specs</h5>
            <li className="list-group-item">Manufacturer: {spaceship.manufacturer}</li>
            <li className="list-group-item">Class: {spaceship.vehicle_class}</li>
            <li className="list-group-item">Passengers: {spaceship.passengers}</li>
            <li className="list-group-item">Crew: {spaceship.crew}</li>
            <li className="list-group-item">Length: {spaceship.length}</li>
            <li className="list-group-item">Max Speed: {spaceship.max_atmosphering_speed}</li>
            <li className="list-group-item">Cargo Capacity: {spaceship.cargo_capacity}</li>
            </ul>
            </div>
          })
          /*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
         </div>
      </div>
    );
  }
}

export default App;
