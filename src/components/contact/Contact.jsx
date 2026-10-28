import "./Contact.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = ( { dialogRef }) => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const toastId = toast.loading("Sending your message...");
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "e26ee77e-5df6-4b21-9af7-37c3561f6c19");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
        
            const data = await response.json();
        
            if (response.ok && data.success) {
                toast.success("Message sent! Thanks for contacting Pulse.", {
                    id: toastId
                });
                form.reset();
            } else {
                toast.error("Couldn't send your message. Please try again.", {
                    id: toastId
                });
            }
        } catch (error) {
            toast.error("Connection problem. Please try again.", {
                id: toastId
            });
        }
    };

  return(
    <dialog 
        id="contact-modal" 
        ref={dialogRef}
        onClick={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
    
            const clickedOutside =
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom;
    
            if (clickedOutside) {
                event.currentTarget.close();
            }
        }}>
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
            </form>
            <Toaster position="bottom-center" />
        </dialog>
  )
    
}

export default Contact;