import React from 'react';
import './styles.css';

const Error = () => {

  return (
    <article className='error'>
      <div className='message_error--error'>
        <p className='txt--error'>
          No results were found with these values.
        </p>
      </div>
    </article>
  );
};

export { Error };
