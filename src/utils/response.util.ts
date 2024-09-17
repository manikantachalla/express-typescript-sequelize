export const sendResponse = (res: any, data: any, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({ message, data });
  };  