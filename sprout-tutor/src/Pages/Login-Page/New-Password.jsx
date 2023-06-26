import { useState } from "react";
import './NewPassword.scss';
import boy1 from '../../assets/boy1.png';
import logo from '../../assets/Logo-sprout.png';
import NavigateButton from '../../Components/NavigateButton/NavigateButton';
import ToggleButton from "../../Components/ToggleButton/ToggleButton";

function Forget() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState(false);

  function handleToggleVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  function handleConfirmPasswordVisibility() {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <div id="new-password">
      <img src={boy1} alt="" id='boy1' />

      <aside>
        <NavigateButton image={logo} link={'/'} className={'pw-logo'} />

        <h1>New Password?</h1>
        <p>Create a password different from the previously used password</p>

        <form action="" onSubmit={handleSubmit}>
          <span>
            <label htmlFor="new-pword">New Password</label>
            <ToggleButton onClick={handleToggleVisibility}>
              <i className={`fa-solid fa-${passwordVisible ? 'eye' : 'eye-slash'} eyes`}></i>
            </ToggleButton>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="new-pword"
              id="new-pword"
              placeholder="Your Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="confirm-password">Confirm New Password</label>
            <ToggleButton onClick={handleConfirmPasswordVisibility}>
              <i className={`fa-solid fa-${confirmPasswordVisible ? 'eye' : 'eye-slash'} eyes`}></i>
            </ToggleButton>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <small className="error-message">Passwords do not match</small>}
          </span>

          <NavigateButton link={'/New-Password'} className={'password-submit'} title={'Change Password'} />
        </form>
      </aside>
    </div>
  );
}

export default Forget;
