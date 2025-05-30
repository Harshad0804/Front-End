import React, { useEffect, useState } from 'react'
import axios from 'axios'

function USecarts() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setdata(res.data.carts)
    }
    return (
        <div className='container'>
            <div className="row">
                {
                    data && Array.isArray(data) && data.map((products, index) => (
                        products.products.map((card, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={card.thumbnail} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title }</h5>
                                        <p className="card-text">{card.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))

                }
            </div>

        </div>
    )
}

export default USecarts
