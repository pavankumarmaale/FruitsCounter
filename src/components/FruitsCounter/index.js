// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate bananas<span className="count">{mangoesCount}</span> mangoes
            <span className="count">{bananasCount}</span>
          </h1>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button type="button" className="button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
            />
            <button type="button" className="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
