import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const preferenceStore = create()(
  persist(
    (set) => ({
      theme: false,
      aside:true,
      setAside:(state)=>{
        set({aside:state})
      },
      setLight: () => {
        set({ theme: true });
      
      },
      setDark: () => {
        set({ theme: false });
      },
    }),
    {
      name: "theme",
      storage: createJSONStorage(() =>localStorage),
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

/*
.color1 {color: #000c1c;}
.color2 {color: #132f3d;}
.color3 {color: #285267;}
.color4 {color: #46818f;}
.color5 {color: #559e9e;} */