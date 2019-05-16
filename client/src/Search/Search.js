import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'
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
      brewresults: null
    }
    this.state.handleChange = this.handleChange.bind(this)
    // this.state.handleClick = this.handleClick.bind(this)
  }
  search = () => {
    axios.post("/api/search", {
      zip: this.state.zip
    }).then(res => {
      this.setState({
        brewresults: res.data,
        results: true
      }, () => {
        console.log(this.state.brewresults);
      });
      // console.log(res.data.results)
      // }
    });
  }

  handleChange = (e) => {
    this.setState({
      zip: e.target.value
    }, () => {

      if (this.state.zip.length === 5) {
        this.search()
      }
      else {
        this.setState({
          brewresults: null
        })

      }
    })
  }

  // handleClick = (e) => {
  //   e.preventeventdefault()
  //   this.search(e.target.value)
  //   this.setState({ value: e.target.value });
  //   if (this.state.value) {
  //     this.search()
  //   }
  // }

  render() {
    return (
      <div>
        <form >
          <input
            // placeholder="Search for..."
            value={this.state.zip}
            onChange={this.handleChange}
            className='input-style'
          />

          {/* <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => this.handleClick(e)}
          >Submit
            </button> */}
          {this.state.brewresults && <Bnb brewresults={this.state.brewresults} barkresults={this.state.barkresults} />}
        </form>

      </div>
    )

  }
}

export default Search