import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usecard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setdata(res.data)
    }
    return (
        <div className='container'>
            <div className='row' style={{padding:"20px"}}>

                {
                    data && data.map((products, index) => {
                        const {image,title,price,description} = products
                        return (

                            <div className='col-md-3' key={index}>
                                <div className="card" style={{ width: '300px',height:"500px" }}>
                                    <img src={image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title.slice(0,20)}</h5>
                                        <h5 className="card-title">{price} $</h5>
                                        <p className="card-text">{description.slice(0,50)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Usecard
