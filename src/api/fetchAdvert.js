import axios from "axios";

export const fetchAdvert = async () => {
  const { data } = await axios(
    `https://650804ab56db83a34d9b96a3.mockapi.io/api/advert`
  );
  return data;
};

export const fetchMakes = async () => {
  try {
    const { data } = await axios(
      "https://650804ab56db83a34d9b96a3.mockapi.io/api/makes"
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
