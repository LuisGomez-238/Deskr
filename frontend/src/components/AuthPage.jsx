import PropTypes from 'prop-types';
import axios from 'axios';
import "../App.css"

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
            .post("http://localhost:3001/authenticate", { username: value})
            .then((r) => props.onAuth({ ...r.data, secret: value }))
            .catch((e) => console.log("Auth Error", e));
    };

    return (
        <div className="LogInBackground">
          <form onSubmit={onSubmit} className="auth-form-card">
            <div className="auth-form-title">Welcome!</div>
            <div className="auth-form-subtitle">Log in or Sign up</div>
            <div className="auth">
              <div className='username'>
              <div className="auth-label">Username</div>
              <input className="auth-input" name="username" />
              </div>
              <div className="auth-label">Password</div>
              <input className="auth-input" name="secret" />
              <button className="auth-button" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      );
};

AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired
  };
  

export default AuthPage;