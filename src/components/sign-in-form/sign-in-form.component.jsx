import {
    signInwithGooglePopup,
    signInAuthUserWithEmailandPassword,
} from '../../utils/firebase/firebase.utils'
import { useState } from 'react'

import FormImput from '../form-input/form-input.component'
import Button,{buttonTypeClasses } from '../button/button.component'

import './sign-in-form.styles.scss'

const defaultFormFields = { 
    email: '',
    password: '',
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailandPassword( email, password )
            alert('login sucessfull')
            resetFormFields()
        } catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log('user login encountered an error'+ error)
            }
        }
    }

    const logGoogleUser = async () => {
        await signInwithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    return <div className='sign-in-container'>
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password</h2>
        <form onSubmit={handleSubmit}>
            <FormImput
                required
                label='Email'
                type='email'
                name='email' 
                onChange={handleChange}
                value={email}
            />
            <FormImput
                required
                label='Password'
                type='password'
                name='password' 
                onChange={handleChange}
                value={password}
            />
            <div className='buttons-container'>
                <Button type='submit'> Sign In </Button>
                <Button type='button' buttonType={buttonTypeClasses.google} onClick={logGoogleUser}> 
                    Google Sign In
                </Button>
            </div>
        </form>
    </div>
}

export default SignInForm