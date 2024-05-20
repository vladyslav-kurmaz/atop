'use client';
import {useState, useEffect, ChangeEvent, FormEvent} from 'react';

import { useRouter } from 'next/navigation';
import validationForm from '@/utils/validationForm';

import ThankYou from '@/components/ThankYou/ThankYou';
import { useTranslation } from 'react-i18next';

const WriteUsComponent = () => {
  const {t} = useTranslation(['form']);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const [thankYou, setThenkYou] = useState(false);
  const [formData, setFormData] = useState(
    {
      name: '',
      company: '',
      email: '',
      number: '',
      country: '',
      sevices: '',
      message: ''
    }
  )
  const name = validationForm(formData.name, 'name')?.statusInput;
  const company = validationForm(formData.company, 'company')?.statusInput;
  const email = validationForm(formData.email, 'email')?.statusInput;
  const number = validationForm(formData.number, 'number')?.statusInput;
  const sevices = validationForm(formData.sevices, 'sevices')?.statusInput;
  const country = validationForm(formData.country, 'country')?.statusInput;
  const message = validationForm(formData.message, 'message')?.statusInput;

  useEffect(() => {
    window.addEventListener('popstate', close);

    return () => {
      window.removeEventListener('popstate', close);
    };
  }, []);

  useEffect(() => {    
    if (name && company && country && email && number && sevices && message) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  },[name, company, country, email, number, sevices, message])

  const changeInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const textarea = e.target as HTMLTextAreaElement;

    switch(target.getAttribute('name') || textarea.getAttribute('name')) {
      case 'name':
        setFormData(state => ({...state, name: target.value}));
        break;
      case 'company':
        setFormData(state => ({...state, company: target.value}));
        break;
      case 'email':
        setFormData(state => ({...state, email: target.value}));
        break;
      case 'number':
        setFormData(state => ({...state, number: target.value}));
        break;
      case 'country':
        setFormData(state => ({...state, country: target.value}));
        break;
      case 'sevices':
        setFormData(state => ({...state, sevices: target.value}));
        break;
      case 'message':
        setFormData(state => ({...state, message: target.value}));
        break;
    }
  }

  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const botToken = '6107968820:AAFSae9KQYrqKBQm9e3R__UgnAernpW_qXc';
    const chatId = '-1001980963004';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const transform = `
      Запит з сайту
      Ім'я: ${formData.name},
      Компанія: ${formData.company},
      Пошта: ${formData.email},
      Номер телефону: ${formData.number},
      Країна: ${formData.country},
      Сервіс який цікавить: ${formData.sevices},
      Повідомлення: ${formData.message},
    `
    const data = {
      chat_id: chatId,
      text: transform,
    };

    try{
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (request.ok) {
        setThenkYou(true);
        document.body.style.overflow = 'hidden';
        setFormData(state => ({
          name: '',
          company: '',
          email: '',
          number: '',
          country: '',
          sevices: '',
          message: ''
        }))

        // history.pushState({}, "Сторінка подяки", 'https://www.kyokushinkaidojo.com.ua/thank-you.html')
        window.location.reload();
      }

    } catch (e) {
      console.log(e);
      
    }
  } 

  return (
    <>
      <div className='modal'>
        {thankYou ? <ThankYou changeState={setThenkYou}/> : null}
        <form 
          className='modal__form'
          onSubmit={(e) => sendForm(e)}
        >
          <div className="modal__form-container">
            <h1 className='modal__form-title'>{t('title')}</h1>
            <div className='modal__form-close' 
              onClick={router.back}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <mask id="mask0_566_2429" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                  <rect width="40" height="40" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_566_2429)">
                <path d="M10.4718 31.4722L8.52734 29.5278L18.0551 20L8.52734 10.4722L10.4718 8.52783L19.9996 18.0556L29.5273 8.52783L31.4718 10.4722L21.944 20L31.4718 29.5278L29.5273 31.4722L19.9996 21.9445L10.4718 31.4722Z" fill="#929292"/>
                </g>
              </svg>
            </div>
          </div>
          <div className="modal__form-content">
            <label htmlFor="name" className='modal__form-label'>
              <span>{t('name-label')}</span>
              <input 
                id='name' 
                name='name' 
                type="text" 
                className='modal__form-label-input'
                placeholder={t("name-pleceholder")}
                value={formData.name}
                onChange={(e) => changeInput(e)}
                />

                {validationForm(formData.name, 'name')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.name, 'name')?.message}</div> : null}
            </label>
            <label htmlFor="company" className='modal__form-label'>
              <span>{t("company-label")}</span>
              <input 
                id='company' 
                name='company' 
                type="text" 
                className='modal__form-label-input'
                placeholder={t('company-placeholder')}
                value={formData.company}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.company, 'company')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.company, 'company')?.message}</div> : null}
            </label>
            <label htmlFor="email" className='modal__form-label'>
              <span>{t("email-label")}</span>
              <input 
                id='email' 
                name='email' 
                type="text" 
                className='modal__form-label-input'
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.email, 'email')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.email, 'email')?.message}</div> : null}
            </label>
            <label htmlFor="number" className='modal__form-label'>
              <span>{t("phone-label")}</span>
              <input 
                id='number' 
                name='number' 
                type="tel" 
                className='modal__form-label-input'
                placeholder={t("phone-placeholder")}
                value={formData.number}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.number, 'number')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.number, 'number')?.message}</div> : null}
            </label>
            <label htmlFor="country" className='modal__form-label'>
              <span>{t("country-label")}</span>
              <input 
                id='country' 
                name='country' 
                type="text" 
                className='modal__form-label-input'
                placeholder={t("country-placeholder")}
                value={formData.country}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.country, 'country')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.country, 'country')?.message}</div> : null}
            </label>
            <label htmlFor="sevices" className='modal__form-label'>
              <span>{t('service-label')}</span>
              <input 
                id='sevices' 
                name='sevices' 
                type="text" 
                className='modal__form-label-input'
                placeholder={t("service-placeholder")}
                value={formData.sevices}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.sevices, 'sevices')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.sevices, 'sevices')?.message}</div> : null}
            </label>
            <label htmlFor="text" className='modal__form-label'>
              <span>{t("message-label")}</span>
              <textarea 
                id='text' 
                name='message' 
                placeholder={t("message-placeholder")}
                className='modal__form-label-input'
                value={formData.message}
                onChange={(e) => changeInput(e)}/>

                {validationForm(formData.message, 'message')?.errorStatus ? <div className="modal__form-label-error">{validationForm(formData.message, 'message')?.message}</div> : null}
            </label>
          </div>
          <button className='modal__form-submit' type='submit' disabled={disabled}>{t("button")}</button>
        </form>
      </div>
    </>
  )
}

export default WriteUsComponent;