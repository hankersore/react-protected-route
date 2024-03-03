import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const { auth, login } = useAuth();

  const handleLoginClick = () => {
    login(); 
  }

  return (
    <div>
      {auth ? <div>
            <p>You are logged in</p>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </div> : 'Please log in'}
      {!auth && <button onClick={handleLoginClick}>Login</button>}
    </div>
  );
}

export default Login;

