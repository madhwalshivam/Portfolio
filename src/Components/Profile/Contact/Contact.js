import React, { useRef } from 'react';
import "./Contact.css";
import emailJS from 'emailjs-com';

 const Contact = () => {
  const form = useRef();

  const handleSubmit= (e) => {
    e.preventDefault();

    emailJS.sendForm('service_i4qkimf', 'template_ro0pikx', form.current,  'o5X5iqFHhGIHDBsEv',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };      

    return (
    <div className="educationblock">
    <div className="educationtitle">CONTACT</div>
    <div className="educationcontentdesc">
      <span className="education">Let's</span> Work Together
    </div>
    <form className="contactform" ref={form} onSubmit={handleSubmit}>
      <input type="text" name="from_name" placeholder="Name" className="inputfieldtext"/>
      <input type="text" name="from_email" placeholder="Email" className="inputfieldtext"/>
      <textarea rows={5} name="message" placeholder="Enter Message" className="inputfieldtextmessage"/>
      <input type="submit" className="submitcontext"value="send"/>
    </form>
    </div>
  );
};
export default Contact
