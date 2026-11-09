// Turns an axios error into a message that is never empty.
const getErrorMessage = (error) => {
  const data = error?.response?.data;

  if (data?.msg) return data.msg;
  if (typeof data === "string" && data.trim()) return data;
  if (error?.response?.status === 429) {
    return "Too many requests, please try again later.";
  }
  if (!error?.response) {
    return "Cannot reach the server. Check your connection and try again.";
  }
  return "Something went wrong, please try again.";
};

export default getErrorMessage;
