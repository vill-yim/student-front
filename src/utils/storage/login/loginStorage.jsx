import { create } from "zustand";
import { Logined } from "../../providers/logined";
import { createJSONStorage, persist } from "zustand/middleware";
import { useFetch } from "../../hooks/useFetch";

export const userStorage = create()(
  persist(
    (set) => ({
      roll: true,
      res: Logined(),
      setLogin: async (state) => {
        const url = `http://localhost:3000/user/login`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        set({ res: data });
        if (typeof data !== "object") return data;
        set({ roll: true });
        window.location.to = `/profile/${data?.id}`;
      },

      setCreateUser: async (state) => {
        const url = `http://localhost:3000/user/create`;
        const method = "POST";
        const data = await useFetch(state, url, method);
        set({ res: data });
        if (typeof data !== "object") return data;
        set({ roll: true });
        window.location.to = `/profile/${data?.id}`;
      },
      setLogout: (hideNav) => {
        sessionStorage.removeItem("roll");
        sessionStorage.clear();
        hideNav(false);
        set({ roll: false, res: [] });
        window.location.reload();
      },
    }),
    {
      name: "roll",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        profile: state.res,
        roll: state.roll,
      }),
    }
  )
);
