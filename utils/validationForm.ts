import {Dispatch, SetStateAction} from 'react';

export type TValidatinForm = {
  errorStatus: boolean;
  message: string;
  class: string;
  statusInput: boolean;
}

// type TStatusFormData = {
//   name: boolean,
//   company: boolean,
//   email: boolean,
//   number: boolean,
//   country: boolean,
//   sevices: boolean,
//   message: boolean
// }


const validationForm = (value: string, name: string): TValidatinForm | null => {

  switch(name) {
    case 'name':
      if (value.length > 0 && value.length <= 2) {        
        return {
          errorStatus: true,
          message: 'Please enter more than 2 characters',
          class: 'error',
          statusInput: false
        }
      } else if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
          
          
        }
      }
    case 'company':
      if (value.length > 0 && value.length <= 2) {
        return {
          errorStatus: true,
          message: 'Please enter more than 2 characters',
          class: 'error',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    case 'email':
      const validValueEmail = value.match(/^[\w\.-]+@[\w\.-]+\.\w+$/);
      const onlyLatiOrNumnEmail = value.match(/^[a-zA-Z0-9]+$/)
      
      if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else if (validValueEmail === null) {
        return {
          errorStatus: true,
          message: 'Mail format examplemail@mail.com',
          class: 'error',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    case 'number':
      const regForNumber = value.match(/^(?:\+\d{1,4}\s?)?0\d{2}\s?(\d{3}\s?\d{2}\s?\d{2})$/);
      const regForOnlyNum = value.match(/^[+0-9()\-]*$/);

      if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else if (regForOnlyNum === null) {
        return {
          errorStatus: true,
          message: 'The phone number can be entered in numbers',
          class: 'error',
          statusInput: false
        }
      } else if (regForNumber === null) {
        return {
          errorStatus: true,
          message: 'The correct phone number is +380999999999',
          class: 'error',
          statusInput: false
        }
      } else if (value.length > 16) {
        return {
          errorStatus: true,
          message: 'The phone number is no more than 16 characters',
          class: 'error',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    case 'country':
      if (value.length > 0 && value.length < 2) {
        return {
          errorStatus: true,
          message: 'The country name must contain at least 2 characters',
          class: '',
          statusInput: false
        }
      } else if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    case 'sevices':
      if (value.length > 0 && value.length < 2) {
        return {
          errorStatus: true,
          message: 'The service name must contain at least 2 characters',
          class: '',
          statusInput: false
        }
      } else if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    case 'message':
      if (value.length > 0 && value.length < 10) {
        return {
          errorStatus: true,
          message: 'The message must contain more than 10 characters',
          class: '',
          statusInput: false
        }
      } else if (value.length === 0) {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: false
        }
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
          statusInput: true
        }
      }
    default:
      return null;
  }

  
}

export default validationForm;