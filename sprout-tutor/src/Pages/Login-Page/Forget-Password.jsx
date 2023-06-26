import { useState } from 'react';
import './ForgotPassword.scss'
import boy1 from '../../assets/boy1.png';
import logo from '../../assets/Logo-sprout.png';
import NavigateButton from '../../Components/NavigateButton/NavigateButton';


function NewP() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setEmail('');
  }

  return (
    <div id="forget-password">
      <img src={boy1} alt="" id='boy1' />

      <aside>
        <NavigateButton image={logo} link={'/'} className={'fg-logo'} />

        <h1>Forgot Password?</h1>
        <p>Enter your email and we’ll send you a link to reset your password</p>

        <form action="" onSubmit={handleSubmit} id='fg-form'>
        <span>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. sprout.tutor@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <NavigateButton link={'/New-Password'} className={'forgot-submit'} title={'Submit'} />

        </form>

        <NavigateButton link={'/login'} title={'< Back to Login Page'} className={'fg-login'}/>
      </aside>

    </div>
  );
}

export default NewP;
