import React, { Component } from 'react'
import axios from 'axios'
// import ResultsCard from '../Card/BrewResultsCard'
import Bnb from '../Results/Bnb';

// const { API_KEY } = process.env
// const API_URL = 'TBD'

class Search extends Component {
  state = {
    error: false,
    query: '',
    longitude: 43.0718,
    latitude: 70.7626,
    zip: '03801',

    brewresults: []
  }

  search = () => {
    axios.post("/api/seach", {
      params: {
        zip: this.state.zip
      }
    }).then(res => {
      console.log(res.data)
      if (res.data.success) {
        this.setState({ brewresults: res.data.data });
      }
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.zip]: e.target.value });
  }

  onSubmit=(e)=> {
    e.preventDefault();
    const form ={
      zip:this.state.zip
    }
  }

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     this.search();
  //     // if (this.state.query.length >= 5) {
  //     //   // this.showDropdown()
  //     //   // if (this.state.query.length % 2 === 0) {

  //     //   // }
  //     // } else if (!this.state.query) {
  //     //   // this.hideDropdown()
  //     // }
  //   })
  // }

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.onSubmit(e)}>Submit</button> 
        </form>
        <Bnb brewresults={this.state.brewresults} barkresults={this.state.barkresults} />
      </div>
    )

  }
}

export default Search