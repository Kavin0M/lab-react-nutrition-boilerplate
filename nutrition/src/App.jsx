import { Component } from 'react'
import './App.css'
import data from "./resources/FoodData"
import FoodBox from './components/FoodBox'

class App extends Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ""
    }
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="searchbar">
          <div className='title'>Search</div>
          <input type="text" onChange={this.handleChange}/>
        </div>
        {data
        .filter(item => item.name.includes(this.state.value))
        .map(item => (
          <FoodBox key={item.id} img={item.img} name={item.name} cal={item.cal} />
        ))}
      </div>
    )
  }
}

export default App
