// An example utility function file. One file can and probably should contain multiple helpers.
// Import syntax:
// import { exampleHelperFunction } from "@utils/example"

// Prefer arrow syntax for defining functions
const exampleHelperFunction = (variable?: boolean): string => {
  if (variable) {
    return "Hello dad!";
  }

  return "Hello mom!";
};

// Export at the end of a file, multiple exports is fine
export { exampleHelperFunction };
