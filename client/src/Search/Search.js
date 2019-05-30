import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';
import Bnb from '../Results/Bnb';

// const { API_KEY } = process.env
// const API_URL = 'TBD'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: false,
      error: false,
      zip: '',
      brewResults: null
    }
    this.state.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = () => {
    if (localStorage.hasOwnProperty('searchZip')) {
      this.setState({
        zip: localStorage.getItem('searchZip')
      });
      this.search(localStorage.getItem("searchZip"));
    }
  }

  search = (zipcode) => {
    console.log("performing search on:")
    console.log(zipcode);
    axios.post("/api/search", {
      zip: zipcode
    }).then(res => {
      console.log(res.data)
      if (res.data) {
        localStorage.setItem('searchZip', zipcode);
        this.setState({
          brewResults: res.data.brews,
          barkResults: res.data.barks,
          results: true
        }, () => {
          console.log(this.state.brewResults);
        });
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      zip: e.target.value
    }, () => {

      if (this.state.zip.length === 5) {
        this.search(this.state.zip);
      }
      else {
        this.setState({
          brewResults: null,
          barkResults: null
        })

      }
    })
  }

  render() {
    return (
      <div>
        <form >
          <input
            placeholder="Search for..."
            value={this.state.zip}
            onChange={this.handleChange}
            className='input-style'
          />
          <p className="searchMessage">Please login to Save Search Results</p>
          {this.state.brewResults &&
            <Bnb brewResults={this.state.brewResults} barkResults={this.state.barkResults} />
          }

        </form>

      </div>
    )

  }
}

export default Search