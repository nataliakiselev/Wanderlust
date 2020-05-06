import { useState, useCallback, useEffect } from "react";

const useAsync = (url, immediate = true) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // Safety
  const callsLimit = 10;
  const [callsMade, setCallsMade] = useState(0);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(async () => {
    if (callsMade > callsLimit) {
      setError("Too many calls made");
      return;
    }
    if (pending) {
      console.log("Was pending. Bailing...");
      return;
    }
    setPending(true);
    // setValue(null);
    setError(null);
    try {
      console.log(
        "%c%s",
        "color: green; background: yellow; font-size: 24px;",
        "Calling API"
      );
      const response = await fetch(url);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log("weather data", data);
        setValue(data);
        setCallsMade(0);
      } else {
        throw response;
      }
    } catch (err) {
      console.log(err);
      setCallsMade((cl) => cl + 1);
      setError(err);
    } finally {
      setPending(false);
    }
  }, [callsLimit, callsMade, url, pending]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    
    if (immediate) {
      execute(url);
    }
  }, [ execute, url, immediate]);

  return { execute, pending, value, error };
};

export default useAsync;
