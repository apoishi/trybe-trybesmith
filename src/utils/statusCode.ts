const statusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const mapStatusCode = (errorMessage: string): number => {
  if (errorMessage.includes('required')) return statusCodes.BAD_REQUEST;
  return statusCodes.UNAUTHORIZED;
};

export { statusCodes, mapStatusCode };