type PostRequest = {
  url: string;
  // NOTE: currently allows for an empty object
  // which is probably not correct.
  // Could not find a way to define a non empty object with
  // unknown properties.
  body: {};
};

export type { PostRequest };
