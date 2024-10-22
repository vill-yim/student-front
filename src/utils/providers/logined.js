//deberia importar dotenv
export const Logined = () => {
  if (sessionStorage.length > 0) {
    const login = sessionStorage?.getItem("login") ;
    const itemParsed = login && JSON.parse(login);
    const inlog =  itemParsed?.state.login
    const res = itemParsed && itemParsed?.state.profile
    return  {inlog,res};
  }
  return null
};
