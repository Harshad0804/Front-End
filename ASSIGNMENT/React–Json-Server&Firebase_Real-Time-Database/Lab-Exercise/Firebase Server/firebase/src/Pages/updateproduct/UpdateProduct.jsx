import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/MyContext';

function UpdateProduct() {

    // data store use
    const context = useContext(MyContext)
    // console.log(context)


    const { products, setProducts, editProducts } = context;

    return (
        <div>
            <div>
                <div className=' flex justify-center items-center h-screen'>
                    <div className=' bg-gray-800 px-8 py-8 rounded-xl w-80 lg:w-96 '>
                        <div className="flex space-x-2 items-center mb-4">
                            <Link to={'/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>

                            <h1 className='text-center text-white text-xl  font-bold'>Update Product</h1>
                        </div>
                        <div>
                            <input type="text"
                                value={products.title}
                                onChange={(e) => setProducts({ ...products, title: e.target.value })}
                                name='title'
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product Title'
                            />
                        </div>
                        <div>
                            <input type="text"
                                value={products.price}
                                onChange={(e) => setProducts({ ...products, price: e.target.value })}
                                name='price'
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product Price'
                            />
                        </div>
                        <div>
                            <input type="text"
                                value={products.imageUrl}
                                onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                                name='imageUrl'
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product Image url'
                            />
                        </div>
                        <div>
                            <input type="text"
                                value={products.category}
                                onChange={(e) => setProducts({ ...products, category: e.target.value })}
                                name='category'
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product Category'
                            />
                        </div>
                        <div className=' flex justify-center mb-3'>
                            <button
                                onClick={editProducts}
                                className=' bg-orange-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                                Update Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct;