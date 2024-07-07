import { useState } from 'react';

function App() {
  const [viewPassword, setViewPassword] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setViewPassword(() => !viewPassword);
  };

  return (
    <>
      <div className="box-input">
        <div className="input__wrapper">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input__field"
          />
          <label htmlFor="password" className="input__label">
            Email
          </label>
        </div>
        <br></br>
        <div className="input__wrapper">
          <input
            id="password"
            type={viewPassword ? 'text' : 'password'}
            name="password"
            placeholder="Your Password"
            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            required
            className="input__field"
          />
          <label htmlFor="password" className="input__label">
            Password
          </label>
          <img
            alt="Toggle View"
            title="Eye Icon"
            src={viewPassword ? 'src/assets/eye-off.svg' : 'src/assets/eye.svg'}
            className="input__icon"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
