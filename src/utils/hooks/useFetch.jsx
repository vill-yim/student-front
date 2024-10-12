import { jwtVerify } from "jose";

const VerifiedRole = (role) => {
  return role === role; // Esta comparación siempre devolverá true
};

export const useFetch = async (state, url, method) => {
  const formData = new FormData();

  for (const key in state) {
    formData.append(key, state[key]);
  }

  try {
    const req = await fetch(url, {
      method: method,
      body: formData,
    });

    const token = await req.json();
    const tokenUser = Object.values(token).toString();

    // Clave secreta utilizada para verificar el token
    const secretKey = new TextEncoder().encode("tu_clave_secreta");

    // Verificar y decodificar el token usando jose
    const { payload } = await jwtVerify(tokenUser, secretKey);

    return payload; // Retorna el payload decodificado
  } catch (error) {
    alert(`error: ${error}`);
  }

  // const verifiedRole = VerifiedRole(role);
  // if (!verifiedRole) return false;
  // const user = { name: untokenUser?.name };
  // console.log(user);
};
