import React, { useState, FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('missingBlock');
      return;
    }
    setStatus('sending');
    // Send form data to your endpoint or Formspree
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual endpoint
    try {
      const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className=' pt-12 flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 pt-10 flex flex-col justify-center w-full h-full items-center'>
          <h1 className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300 pb-5 pt-5'>Contact</h1>
          <p className='text-gray-300 py-4'>Send me a message</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='text-gray-300 mb-2'>Name</label>
            <input
              className='bg-[#ccd6f6] p-2 rounded-md'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-gray-300 mb-2'>Email</label>
            <input
              className='bg-[#ccd6f6] p-2 rounded-md'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-gray-300 mb-2'>Message</label>
            <textarea
              className='bg-[#ccd6f6] p-2 rounded-md'
              name='message'
              rows={10}
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {status === 'missingBlock' && <p className='text-red-500'>Please fill in all fields.</p>}
          {status === 'sending' && <p className='text-yellow-500'>Sending message...</p>}
          {status === 'success' && <p className='text-green-500'>Thank you! We will get back to you soon.</p>}
          {status === 'error' && <p className='text-red-500'>An error occurred. Please try again later.</p>}
          <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md '>
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

