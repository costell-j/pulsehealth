import "./Contact.css";
import { useState } from 'react';

const Contact = ( { dialogRef }) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "e26ee77e-5df6-4b21-9af7-37c3561f6c19");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        setResult("Error");
        }
    };

  return(
    <dialog id="contact-modal" ref={dialogRef}>
            <button id="contact-close" type="button" className="btn" onClick={() => dialogRef.current.close()}>Close</button>
            <h2>Contact Pulse</h2>
            <p className="contact-description">
                Have a question about Pulse or feedback about the site?
                Send a message below.
            </p>
            
            <p className="contact-note">
                Please don't include private medical information.
            </p>
            <form id="contact-form" action="" onSubmit={onSubmit}>
                <p>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </p>
                <p><button type="submit" className="btn" id="contact-submit">Submit</button></p>
                <p id="result" role="status">{result}</p>
            </form>
        </dialog>
  )
    
}

export default Contact;