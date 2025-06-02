import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignUpFormModal.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword:
        "Confirm Password field must be the same as the Password field",
    });
  };

  const completedForm =
    !email ||
    !username ||
    !firstName ||
    !lastName ||
    !password ||
    !confirmPassword;

  const passwordIsTooShort = password.length < 6;
  const usernameIsTooShort = username.length < 3;

  return (
    <>
      <form onSubmit={handleSubmit} className="signUpForm">
      <button className="signup-back-btn close-modal-btn" onClick={closeModal}>
          <img src="https://img.icons8.com/ios-filled/50/back.png" alt="back" className="exit-modal"/>
          </button>
        <h1>Sign Up</h1>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
          {errors.email && <p className="errors">{errors.email}</p>}
        </label>
       
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /> 
          {errors.username && <p>{errors.username}</p>}
        </label>
       
        <label> 
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </label>
        
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
        <button
        className="signup-btn"
          type="submit"
          disabled={completedForm || passwordIsTooShort || usernameIsTooShort}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupFormModal;
