import { Component } from 'react'

class boxComponent extends Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: 0,
            count: 0,
            totalCal: 0
        }
    }

    handleChange(e){
        if (e.target.value >= 0)(
            this.setState({
                value: e.target.value
            })
        )
    }

    changeValue(){
        this.setState({
            count: this.state.value,
            totalCal: (this.state.value * this.props.cal)
        })
    }

    resetValue(){
        this.setState({
            count: 0,
            totalCal: 0
        },console.log(this.state.count))
    }

  render(props) {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.img} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.cal} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" placeholder="Enter a number here" onChange={this.handleChange}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={() => this.changeValue()}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
            <div className="output">
                <div className="nums">
                    {this.state.count} {this.props.name} = {this.state.totalCal} calories
                </div>
                <div className="reset" onClick={() => this.resetValue()}>
                    Reset
                </div>
            </div>
        </div>
    )
  }
}

export default boxComponent
