import { jwtDecode } from "jwt-decode";
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
    const res = await req.json();
    if (res.status !== 202) {
      alert(res.error);
    }else{
      const payload = jwtDecode(res.token);
    return payload.token;
    }
  } catch (error) {
    alert(`Upps!! Ocurrió un error, ${error}`);
  }

  // const verifiedRole = VerifiedRole(role);
  // if (!verifiedRole) return false;
  // const user = { name: untokenUser?.name };
  // console.log(user);
};
