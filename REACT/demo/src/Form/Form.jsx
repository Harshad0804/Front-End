import React,{useState} from 'react'

function Form() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("")
    const [city, setcity] = useState("")

    return (
        <div>
            <form action>
                <div classname="mb-3">
                    <label htmlfor="exampleFormControlInput1" classname="form-label">Name</label>
                    <input type="text"  classname="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div classname="mb-3">
                    <label htmlfor="exampleFormControlInput2" classname="form-label">Email address</label>
                    <input type="email" classname="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div classname="mb-3">
                    <label htmlfor="exampleFormControlTextarea3" classname="form-label">Phone Number</label>
                    <input type="tel" classname="form-control" id="exampleFormControlTextarea3" rows="{3}" defaultvalue="{&quot;&quot;}" />
                </div>
                <div classname="mb-3">
                    <label htmlfor="exampleFormControlTextarea4" classname="form-label">City</label>
                    <input type="text" classname="form-control" id="exampleFormControlTextarea4" rows="{3}" defaultvalue="{&quot;&quot;}" />
                </div>
                <div>
                    <input type="submit" name="" id="" />
                </div>
            </form>
        </div>


    )
}

export default Form
