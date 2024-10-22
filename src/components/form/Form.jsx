import { useState } from "react";
import styleForm from "../../styles/login/login.module.css";
import { useUserStorage } from "../../utils/storage/login/useUserStorage";

export const Form = () => {
  const { setLogin, setCreateUser } = useUserStorage();

  const [isSignUp, setIsSignUp] = useState(true);
  const [createUser, setCreate] = useState({
    name: "",
    lastname: "",
    email: "",
    type_identify: "",
    number_identify: "",
    password: "",
    profile_img: "",
  });
  const [loginUser, setLoginUser] = useState({
    number_identify: "",
    password: "",
  });

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_img" && files.length > 0) {
      setCreate((e) => ({ ...e, profile_img: files[0] }));
    } else {
      setCreate((e) => ({ ...e, [name]: value }));
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser((e) => ({ ...e, [name]: value }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
   await setCreateUser(createUser);
    window.location.href = "/";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await setLogin(loginUser);
    window.location.href = "/";
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
                  name={"number_identify"}
                  value={loginUser.number_identify}
                  className={styleForm["input"]}
                  type="text"
                  onChange={handleChangeLogin}
                  placeholder=""
                  required
                />
                <span>Número de documento</span>
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
                  <span>Nombres</span>
                </label>

                <label>
                  <input
                    name={"lastname"}
                    value={createUser.lastname}
                    onChange={handleChange}
                    className={styleForm["input"]}
                    type="text"
                    placeholder=""
                    required
                  />
                  <span>Apellidos</span>
                </label>
              </div>
              <label>
                <input
                  name={"type_identify"}
                  value={createUser.type_identify}
                  onChange={handleChange}
                  className={styleForm["input"]}
                  type="text"
                  placeholder=""
                  required
                />
                <span>Tipo de documento</span>
              </label>

              <label>
                <input
                  name={"number_identify"}
                  value={createUser.number_identify}
                  onChange={handleChange}
                  className={styleForm["input"]}
                  type="text"
                  placeholder=""
                  required
                />
                <span>Número de documento</span>
              </label>
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
