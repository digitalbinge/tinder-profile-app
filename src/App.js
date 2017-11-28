import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'




const FormInput = ({firstName, lastName, imageURL, onChange}) => (
  
  <form>
    First name:
    <input type="text" name="firstName" value={firstName} onChange={onChange} /><br/>
    Last name:
    <input type="text" name="lastName" value={lastName} onChange={onChange} /><br/>
    Image URL:
    <input type="text" name="imageURL" value={imageURL} onChange={onChange} /><br/>
  </form>

)

class App extends Component {

  //Set the initial state
  state = {
    firstName: 'Shaniqua',
    lastName: 'Neil',
    imageURL: 'https://randomuser.me/api/portraits/men/25.jpg',
    editable: false
  }

  //When the first name changes
  onChange = (event) => {
    const input = event.target;
    this.setState(prevState => ({
      [input.name]: input.value
    }));
  }

  edit = () => {
    this.setState({editable: !this.state.editable})
  }

  random = () => {
    fetch('https://randomuser.me/api/').then((results) => {
      return results.json()
    }).then((data) => {
      const randomFirstName = data.results[0].name.first;
      const randomLastName = data.results[0].name.last;
      const randomImageURL = data.results[0].picture.large;
      this.setState({
        firstName: randomFirstName,
        lastName: randomLastName,
        imageURL: randomImageURL
      });
    });
  }

  //Render our component
  render() {

    //Grab the first name, last name and imageURL from state
    const { firstName, lastName, imageURL } = this.state;

    return (
      <div className="App">
        <Profile 
          firstName={ firstName } 
          lastName={ lastName }
          imageURL={ imageURL } />

          <span>
            <button onClick={this.edit}>EDIT</button>
            <button onClick={this.random}>Random</button>
          </span>

          {(this.state.editable) ? <FormInput 
            onChange={this.onChange}
            firstName={firstName}
            lastName={lastName}
            imageURL={imageURL} /> : ''}

      </div>

    );
  }
}

export default App;
