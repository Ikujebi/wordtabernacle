import { useCallback } from "react";

const useSetField = (setfield: React.Dispatch<React.SetStateAction<any>>) => {
  const setRequest = useCallback(
    (key: string, value: any) => {
      setfield((prev:any) => ({
        ...prev,
        [key]: value,
      }));
    },
    [setfield]
  );

  return { setRequest };
};

export default useSetField;
