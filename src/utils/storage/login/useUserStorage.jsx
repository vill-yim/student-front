import { create } from "zustand";
import { Logined } from "../../providers/logined";
import { createJSONStorage, persist } from "zustand/middleware";
import { useFetch } from "../../hooks/useFetch";
import { authenticateStudent } from "./simulateLogin";

//login=Logined() ? Logined().login :
//res: Logined() ? Logined().res :


export const useUserStorage = create()(
  persist(
    (set) => ({
      login: Logined() ? Logined().login : false,
      res: Logined() ? Logined().res : null,

      setLogin: async (state) => {
        const port = 3000;
        const url = `http://${window.location.hostname}:${port}/student/login`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        set({ res: data, login: data?.active });
      },

      setCreateUser: async (state) => {
        const port = 3000;
        const url = `http://${window.location.hostname}:${port}/student/create`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        set({ res: data, login: data?.active });
      },
      setLogout: (hideNav) => {
        sessionStorage.removeItem("login");
        sessionStorage.clear();
        hideNav(false);
        set({ login: false, res: [] });
      },

      setSimulated: (state) => {
        const student = authenticateStudent(
          state.number_identify,
          state.password
        );
        if (student) {
          set({
            res: student,
            login: true,
          });
        }
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
