import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.message) {
          setErrors(data);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
       <button className="login-back-btn close-modal-btn" onClick={closeModal}>
    <img
      src="https://img.icons8.com/ios-filled/50/back.png"
      alt="back"
      className="exit-modal"
    />
    </button>
      <h1>Log In</h1>

      {errors && <p className="errors">{errors.message}</p>}

      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      {errors.credential && <p className="errors">{errors.credential}</p>}

      <button
        type="submit"
        className="login-btn"
        disabled={password.length < 6 || credential.length < 4}
      >
        Log In
      </button>
    </form>
  );
}

export default LoginFormModal;
