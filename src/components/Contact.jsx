import React, {useRef, useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s3xh5os', 'template_7xj7weu', form.current, {
      publicKey: '-KXsW9E27WyhZcn-z',
    }).then(() => {
      console.log('message sent');
      setShowSuccessMessage(true);

      e.target.reset();

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 6969);
    }).catch((error) => {
      console.error('Error sending message:', error.text);
    });
  };

  return (
    <div className='contact-bg'>
      <div className='contact container' id='contact'>
        <h1 className='display-2'>Contact</h1>
        <div className='contact-header'>
          <h2 className='display-3'>Get in touch</h2>
          <h3 className='h4'>Actively Looking for Work</h3>
          <h4 className='lead fs-4'>Whether looking to start a new project or not, your questions, comments and suggestions are all welcome.</h4>
          <img src='./line.jpg' className='line-qr' />
        </div>
        {
          showSuccessMessage && (
            <div className='success-overlay'>
              <div className='card text-bg-success mb-3' style={{maxWidth: '18rem'}}>
                <div className='card-header'>Contact Form</div>
                <div className='card-body'>
                  <h5 className='card-title'>Message Successfully Sent!</h5>
                  <p className='card-text'>Please wait for my response via email, usually within the next 48h.</p>
                </div>
              </div>
            </div>
          )
        }
          
        <form className='contact-form' ref={form} onSubmit={sendMail}>
          <div className='form-header'>
            <input className='form-control' type='text' name='name' placeholder='Name' required />
            <input className='form-control' type='email' name='email' placeholder='Email address' required />
          </div>
          <input className='form-control' type='text' name='subject' placeholder='Subject' required />
          <textarea className='form-control' name='message' cols='30' rows='10' placeholder='Your thoughts...' required></textarea>
          <button type='submit' className='btn btn-danger'>Send</button>
        </form>
      </div>
    </div>
    
  )
}

export default Contact