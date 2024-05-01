export const checkIfLocal = (hostName: string) => {
  if (hostName === "localhost") {
    return true;
  }
  return false;
};
