import { PostRequest } from "@typings/usePost";
import { useState, useEffect } from "react";

// NOTE:
// Due to react.strictMode being enabled on development version
// post requests with this hook **FIRE TWICE**
// This does not happen in production.
// Please see: https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
const usePost = (initialRequest: PostRequest) => {
  const [response, setResponse] = useState<JSON | undefined>();
  const [request, setRequest] = useState<PostRequest>(initialRequest);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const postData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(request.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request.body),
        }).then((res) => res.json());
        setResponse(res);
      } catch (error) {
        // Currently an erroneus response is not treated as a error by this.
        // It is instead passed as the response to ui.
        // TODO: is this the wanted behaviour?
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (Object.keys(request.body).length !== 0 && request.url) {
      postData();
    }
  }, [request]);

  return { response, isLoading, isError, setRequest };
};

export default usePost;
