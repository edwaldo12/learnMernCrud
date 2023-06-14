import axios from "axios";
import url from "../../helper/url";

export const deleteUser = async (id) => {
  try {
    await axios({
      method: "DELETE",
      url: `${url}/api/delete-user/${id}`,
    });
  } catch (error) {
    throw new Error(error);
  }
};
