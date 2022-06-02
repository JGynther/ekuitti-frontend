import { PostRequest } from "@typings/usePost";
import { useState, useEffect } from "react";

// NOTE:
// Due to react.strictMode being enabled on development version
// post requests with this hook **FIRE TWICE**
// This does not happen in production.
// Please see: https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
const usePost = ({
  initialRequest,
  callback,
}: {
  // NOTE: typing here as will most likely change to avoid hard typing returns
  initialRequest?: PostRequest;
  callback?: (params: any) => void;
} = {}) => {
  const [response, setResponse] = useState<{} | undefined>();
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
          credentials: "include",
          body: JSON.stringify(request.body),
        });

        if (!res.ok) {
          throw new Error(); // TODO: better define error
        }

        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    postData();
  }, [request]);

  // Log response to console if in development mode
  useEffect(() => {
    response &&
      process.env.NODE_ENV === "development" &&
      console.log("[debug] (usePost response)", response);
  }, [response]);

  useEffect(() => {
    response && callback && callback(response);
  }, [callback, response]);

  return { response, isLoading, isError, setRequest };
};

export default usePost;
