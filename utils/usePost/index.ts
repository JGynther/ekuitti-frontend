import { PostRequest } from "@typings/usePost";
import { useState, useEffect } from "react";

// NOTE:
// Due to react.strictMode being enabled on development version
// post requests with this hook **FIRE TWICE**
// This does not happen in production.
// Please see: https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
const usePost = (
  initialRequest?: PostRequest,
  callback?: (res?: JSON) => void
) => {
  const [response, setResponse] = useState<JSON | undefined>();
  const [request, setRequest] = useState<undefined | PostRequest>(
    initialRequest
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const postData = async () => {
      if (!request || !request.url) return;

      setIsError(false);
      setIsLoading(true);

      try {
        const res = await fetch(request.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request.body),
        });
        const json = await res.json();

        // Log response to console if in development mode
        if (process.env.NODE_ENV === "development") console.log(json);

        // If a callback function is defined, call it with response data
        if (callback) callback(json);

        setResponse(json);
      } catch (error) {
        // Currently an erroneus response is not treated as a error by this.
        // It is instead passed as the response to ui.
        // TODO: is this the wanted behaviour?
        setIsError(true);
      }

      setIsLoading(false);
    };

    postData();
  }, [request, callback]);

  return { response, isLoading, isError, setRequest };
};

export default usePost;
