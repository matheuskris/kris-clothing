import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
    auth,
    signInwithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}> 
                Sign in with google pop up
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn