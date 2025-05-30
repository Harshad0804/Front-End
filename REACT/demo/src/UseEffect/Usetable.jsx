import React, { useEffect, useState } from 'react'

function Usetable() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("https://fakestoreapi.com/users")
        const result = await res.json()
        console.log(result);
        setdata(result)


    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user, index) => {
                        console.log(user)
                        return (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name.firstname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Usetable
