import React, { useRef } from 'react';
import Button from '../components/ui/Button';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';

export default function Contact() {
  const form = useRef();
  const dispatch = useDispatch();

  const closeEmail = () => {
    dispatch({ type: 'CLOSE_EMAIL' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'REACT_APP_EMAIL_SERVICE_ID',
        'REACT_APP_EMAIL_TEMPLATE_ID',
        form.current,
        'REACT_APP_EMAIL_PUBLIC_KEY'
      )
      .then(
        (result) => {
          alert('전송되었습니다.');
          closeEmail();
        },
        (error) => {
          alert('전송을 실패했습니다.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Button onClick={closeEmail}> X </Button>
      <label>Name</label>
      <input type='text' name='from_name' placeholder='이름을 입력해주세요.' />
      <label>Phone</label>
      <input type='tel' name='phone' placeholder='연락처를 입력해주세요.' />
      <label>Email</label>
      <input type='email' name='email' placeholder='메일 주소를 입력해주세요' />
      <label>Message</label>
      <textarea name='text' />
      <input type='submit' value='Send' />
    </form>
  );
}
