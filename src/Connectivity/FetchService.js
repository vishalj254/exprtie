export const BaseURL = 'http://192.168.1.16:3001';
export const ClientURL = 'http://www.campusshala.com';

export const getData = async (url) => {
  try {
    const response = await fetch(`${BaseURL}/${url}`);
    const result = await response.json();
    return result;
  } catch (e) {
    return {status: false, message: 'Server Error!'};
  }
};
