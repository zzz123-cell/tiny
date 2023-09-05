import { useEffect } from "react";

const useInit = action => {
  useEffect(() => {
    action.init({});
  }, []);
};

export { useInit };
