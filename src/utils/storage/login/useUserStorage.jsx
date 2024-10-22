import { create } from "zustand";
import { Logined } from "../../providers/logined";
import { createJSONStorage, persist } from "zustand/middleware";
import { useFetch } from "../../hooks/useFetch";

export const useUserStorage = create()(
  persist(
    (set) => ({
      login: Logined() ? Logined().inlog : false,
      res: Logined() ? Logined().res : {},
      setLogin: async (state) => {
        const url = `http://${window.location.hostname}:3000/student/login`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        set({ res: data, login: data?.active });
      },

      setCreateUser: async (state) => {
        const url = `http://${window.location.hostname}:3000/student/create`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        console.log(data);
        set({ res: data, login: data?.active });
      },
      setLogout: (hideNav) => {
        sessionStorage.removeItem("login");
        sessionStorage.clear();
        hideNav(false);
        set({ login: false, res: [] });
      },
    }),
    {
      name: "login",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        login: state.login,
        profile: state.res,
      }),
    }
  )
);