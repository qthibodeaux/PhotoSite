import { useAuth0 } from '@auth0/auth0-react'
import "./AuthButton.css"

function LoginButton (props) {
    const { customer } = props
    const { loginWithRedirect } = useAuth0()
  return (
    <button
        className='logButton'
        onClick={() =>
        {
            customer()
            loginWithRedirect()
        }
      }
    >
      Log in
    </button>
  )
}

function LogoutButton () {
    const { logout } = useAuth0()
    return (
      <button
        className='logButton'
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </button>
    );
  };

function AuthButton (props) {
    const { customer } = props
    const { isAuthenticated } = useAuth0()
  
    return isAuthenticated ? <LogoutButton /> : <LoginButton customer={customer}/>
}

export default AuthButton