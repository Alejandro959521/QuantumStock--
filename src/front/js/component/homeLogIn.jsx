import React, { useContext, useState } from "react";
import "../../styles/homeForm.css"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

export const Login = ({ onCloseForm, onChangeClick }) => {

  const { actions, store } = useContext(Context)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const loginIn = async (event) => {
    event.preventDefault()
    actions.create_token(event, email, password)


    let isLogged = await actions.create_token(event, email, password)

    if (isLogged == true) {
      navigate("/Dashboard")
    }

    return toast.error("Los datos ingresados no son correctos")
  }
  return (
    <div className="form-logIn">
      <Toaster position="top-right" richColors />
      <div className="container for-2 animate__animated animate__fadeInDown">
        <div className="row main-row-login">
          <div className="col SingUp-form">
            <form onSubmit={loginIn} action="#" className="formSignUp needs-validation">
              <div className="row">
                <div className="col-10 d-flex gap-2">
                  <div><i className="fa-solid fa-users fa-bounce ico"></i></div>
                  <div className="newUser">
                    <h2 className="fs-4">Iniciar sesion</h2>
                    <p className="font-monospace text-center">QuantumStock</p>
                  </div>
                </div>
                <div className="col-2 text-end">
                  <button onClick={onCloseForm} type="button" className="btn exit"><i className="fa-solid fa-arrow-right-from-bracket ico-exit"></i></button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col position-relative">
                  <label htmlFor="validationTooltip04" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" id="validationTooltip04" placeholder="enzo-ferrari@gmail.com" required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col position-relative">
                  <label htmlFor="validationTooltip05" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="validationTooltip05" required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-center">
                  <button className="btn button" type="submit">Iniciar</button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-center">
                  <button onClick={onChangeClick} className="btn button">Registrarse</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
