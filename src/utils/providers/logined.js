//deberia importar dotenv
export const Logined = () => {
  if (sessionStorage.length > 0) {
    const login = sessionStorage?.getItem("roll");
    const itemParsed = login && JSON.parse(login);

    return itemParsed && itemParsed.state.profile;
  }
  return null
};
