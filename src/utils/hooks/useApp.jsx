import { useState, useEffect } from "react";

//componente perzonalizado ts para manejo de persist
export const useApp = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const [data, setData] = useState<F>();
  const result = store(callback) as F;

  useEffect(() => {
    (async () => {
      setData(result);
    })();
  }, [store]);

  return data;
};
