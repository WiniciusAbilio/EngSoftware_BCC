import aaIMG from './assets/aa.png'

import './styles.css'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src={aaIMG} alt="hihi"/>
            </span>

            <div className='wrap-input'>
              <input className='input' type='email'/>
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input className='input' type='password'/>
              <span className='focus-input' data-placeholder='Password'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='logon-forn-btn'>
                LOGIN
              </button>

            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
