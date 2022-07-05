import './Styles/Contact.css'
import { TextField } from '@mui/material'
import { useState } from 'react'

const Contact = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
    }
    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1 style={{ color: "white", fontSize: '50px' }}>CONTACT</h1>
            <div className='contact-text'>
                <div className='contact-text-container'>
                    <p>Interested in joining us? Well, do not hesitate to contact us. Who knows? This may be the beginning of something completely scary and fantastic</p>
                </div>
            </div>
            <div className='form'>
                <form className='form-contact' onSubmit={handleSubmit} >
                    <fieldset>
                        <legend>CONTACT US</legend>
                        <TextField
                            id="outlined-basic"
                            name="name"
                            label="Your Name"
                            variant="outlined"
                            onChange={handleChange}
                            value={formValue.name}
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Your Email"
                            variant="outlined"
                            onChange={handleChange}
                            value={formValue.email}
                        />
                        <TextField
                            id="outlined-basic"
                            name="message"
                            label="Message"
                            variant="outlined"
                            onChange={handleChange}
                            value={formValue.message}
                        />
                    </fieldset>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </>
    )
}
export default Contact