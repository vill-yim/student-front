import { useState } from "react";
import styleForm from "../../styles/login/login.module.css";
import { userStorage } from "../../utils/storage/login/loginStorage";

export const Form = () => {
  const { setLogin, setCretaeUser } = userStorage();

  const [isSignUp, setIsSignUp] = useState(true);
  const [createUser, setCreateUser] = useState({
    name: "",
    legal_identify: "",
    email: "",
    password: "",
    profile_img: "",
  });
  const [loginUser] = useState({
    legal_identify: "",
    password: "",
  });

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_img" && files.length > 0) {
      setCreateUser((e) => ({ ...e, profile_img: files[0] }));
    } else {
      setCreateUser((e) => ({ ...e, [name]: value }));
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin((e) => ({ ...e, [name]: value }));
  };

  const handleCreateUser = () => {
    setCretaeUser(createUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(loginUser);
  };
  return (
    <div className={styleForm["container-form"]}>
      {isSignUp ? (
        <div className={styleForm["logup"]}>
          <div className={styleForm["content-overlay-logup"]}>
            <div className={styleForm["overlay-logup"]}>
              <h4>Hola Bienvenido</h4>
              <p>
                Crea una cuenta para que obtengas acceso a los privilegios de
                usuarios.
              </p>
              <span onClick={toggleForm} className={styleForm["btn-form"]}>
                Registrarse
              </span>
            </div>
          </div>
          <div className={styleForm["content-form-logup"]}>
            <div className={styleForm["text-form"]}>
              <h3>Iniciar Sesión</h3>
            </div>

            <form className={styleForm["form"]}>
              <label>
                <input
                  name={"legal_identify"}
                  value={loginUser.legal_identify}
                  className={styleForm["input"]}
                  type="text"
                  onChange={handleChangeLogin}
                  placeholder=""
                  required
                />
                <span>Documento de Identidad</span>
              </label>

              <label>
                <input
                  name={"password"}
                  value={loginUser.password}
                  onChange={handleChangeLogin}
                  className={styleForm["input"]}
                  type="password"
                  required
                />
                <span>Contraseña</span>
              </label>

              <div className={styleForm["button-form"]}>
                <button className={styleForm["submit"]} onClick={handleLogin}>
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={styleForm["login"]}>
          <div className={styleForm["content-form-login"]}>
            <div className={styleForm["text-form"]}>
              <h3>Registrarse</h3>
            </div>

            <form className={styleForm["form"]}>
              <div className={styleForm["flex"]}>
                <label>
                  <input
                    name={"name"}
                    value={createUser.name}
                    onChange={handleChange}
                    className={styleForm["input"]}
                    type="text"
                    placeholder=""
                    required
                  />
                  <span>Nombre de Usuario</span>
                </label>

                <label>
                  <input
                    name={"legal_identify"}
                    value={createUser.legal_identify}
                    onChange={handleChange}
                    className={styleForm["input"]}
                    type="text"
                    placeholder=""
                    required
                  />
                  <span>Documento de Identidad</span>
                </label>
              </div>

              <label>
                <input
                  name={"email"}
                  value={createUser.email}
                  onChange={handleChange}
                  className={styleForm["input"]}
                  type="email"
                  placeholder=""
                  required
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  name={"password"}
                  value={createUser.password}
                  onChange={handleChange}
                  className={styleForm["input"]}
                  type="password"
                  placeholder=""
                  required
                />
                <span>Contraseña</span>
              </label>

              <label>
                <input
                  name={"confirm_password"}
                  onChange={handleChange}
                  className={styleForm["input"]}
                  type="password"
                  placeholder=""
                  required
                />
                <span>Confirmar contraseña</span>
              </label>

              <label htmlFor="file" className={styleForm["custum-file-upload"]}>
                <div className={styleForm["icon"]}>
                  <img
                    width="50px"
                    height="50px"
                    src="https://img.icons8.com/arcade/64/download.png"
                    alt="download"
                  />
                </div>
                <div className={styleForm["text-input"]}>
                  <span>Agrega una foto de perfil</span>
                </div>
                <input
                  onChange={handleChange}
                  name={"profile_img"}
                  id="file"
                  type="file"
                />
              </label>

              <div className={styleForm["button-form"]}>
                <button
                  className={styleForm["submit"]}
                  onClick={handleCreateUser}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
          <div className={styleForm["content-overlay-login"]}>
            <div className={styleForm["overlay-logup"]}>
              <h4>Hola de nuevo!</h4>
              <p>
                Sí ya tienes una cuenta puedes iniciar sesión con tus datos.
              </p>
              <span onClick={toggleForm} className={styleForm["btn-form"]}>
                Ingresar
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/*


*/

/**/
