import React, { useState } from 'react';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })// event passed in...Now let's define the handleChange function. This function will sync the internal state of the component formState with the user input from the DOM. 
    }
    // console.log(formState);
    //JSX
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id ="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange}name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email}  name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} row="5"  />
                   </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;