type ExtError = Error & { status: number };

const createError = (status: number, info?: string) => {
  const error = new Error(info) as ExtError;
  error.status = status;
  return error;
};

export { createError };
