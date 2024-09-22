import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl, FormLabel } from "react-bootstrap";

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: true, // Supongamos que está inicialmente en un estado válido
    passwordState: true, // Supongamos que está inicialmente en un estado válido
  });

  // Estado para controlar si se debe mostrar el mensaje de error del mail
  const [showError, setShowError] = useState(false);

  // Estado para controlar si se debe mostrar el mensaje de error del mail
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Función para validar la contraseña
  const validatePassword = (password) => {
    // Expresión regular que valida que tenga al menos una letra, un número, y 9 caracteres o más
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/.test(password);
  };

  const clickSubmit = () => {
    //Se verifica el email y la contraseña
    let newEmail = formValues.email;
    let newPassword = formValues.password;

    const isValidEmail = validateEmail(newEmail);
    const isValidPassword = validatePassword(newPassword);

    console.log(isValidEmail);
    console.log(setValidationStates.passwordState);

    if (!isValidEmail) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    if (!isValidPassword) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            className={`form-control ${
              showError ? "border border-danger" : ""
            }`}
            isInvalid={showError}
          />
          {showError && (
            <FormControl.Feedback type="invalid">
              <div className="fieldError">
                Your email should follow an established format.
              </div>
            </FormControl.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            className={`form-control ${
              showPasswordError ? "border border-danger" : ""
            }`}
            isInvalid={showPasswordError}
          />
          {setShowPasswordError && (
            <Form.Text className="invalid-feedback">
              Your password should be have numbers and letters and should be at
              least 9 char long
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
