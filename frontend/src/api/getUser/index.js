import axios from "axios";
import url from "../../helper/url";

export const getUser = async (id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${url}/api/get-user/${id}`,
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
};
