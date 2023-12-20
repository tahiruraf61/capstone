import React, { useState } from "react";

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [message, setMessage] = useState('');



    const matchEmail = email !== confirmEmail;

    //form submission
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log("First name:", firstName);
       console.log("last name:", lastName);
       console.log("Email:", email);
       console.log("confirm email:", confirmEmail);
       console.log("Message:", message);

       //clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setConfirmEmail("");
        setMessage("");



    }
    return (
        <div className="form-container">
            <h4 style={{textAlign: 'center', marginTop: '100px'}}>Send us an email</h4>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="firstName">First name<sup>*</sup></label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                className="formInput"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
                <label htmlFor="lastName">Last name<sup>*</sup></label>
                <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                className="formInput"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
                />
                <label htmlFor="email">Email<sup>*</sup></label>
                <input
                type={"email"}
                name="email"
                id="email"
                value={email}
                className="formInput"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <label htmlFor="confirmEmail">Confirm email<sup>*</sup></label>
                <input
                type="email"
                name="confirmEmail"
                value={confirmEmail}
                id="confirmEmail"
                className="formInput"
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder="example@email.com"
                required
                />
                <label htmlFor="message">Message<sup>*</sup></label>
                <textarea
                id="message"
                name="message"
                value={message}
                className="inputText"
                placeholder="Your message here"
                onChange={(e) => setMessage(e.target.value)}
                required
                />

                {matchEmail && <p style={{color: "red"}}>Error Email mismatch</p>}
                <input
                type="submit"
                value={'Submit'}
                className="button"
                disabled={matchEmail}
                />

            </form>
        </div>
    )
}
export default Contact;