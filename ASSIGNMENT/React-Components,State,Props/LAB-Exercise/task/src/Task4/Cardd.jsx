import React, { Component } from 'react'

class Cardd extends Component {

    constructor(props) {
        super(props)
        this.data = props;
    }
    render() {
        return (
            <div className='d-flex aligns-items-center justify-content-center text-center w-75 mx-auto' >
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={this.data.img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.name}</h5>
                        <h5 className="card-text">{this.data.age}</h5>
                        <h5 className="card-text">{this.data.location}</h5>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default Cardd
