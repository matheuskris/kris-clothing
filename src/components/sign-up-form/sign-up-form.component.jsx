import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'


const defaultFormFields = { 
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword){
            alert('passwords do not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword( email, password )
            await createUserDocumentFromAuth( user, { displayName })
            resetFormFields()
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use')
            } else{
                console.log('user creation encountered an error'+ error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    return(
        <div className="sign-up-container">
            <h2>I do not have an account</h2>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    required 
                    type="text"
                    name="displayName" 
                    onChange={handleChange} 
                    value={displayName}
                />
                <FormInput 
                    label='Email'
                    required 
                    type="email"
                    name="email" 
                    onChange={handleChange} 
                    value={email}
                />
                <FormInput 
                    label='Password'
                    required 
                    type="password"
                    name="password" 
                    onChange={handleChange} 
                    value={password}
                />
                <FormInput 
                    label='Confirm Password'
                    required 
                    type="password"
                    name="confirmPassword" 
                    onChange={handleChange} 
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm