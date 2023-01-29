import axios from "axios";
import url from "../../helper/url";

export const postTodo = async (body) => {
  try {
    await axios({
      method: "POST",
      url: `${url}/api/add-user`,
      data: body,
    });
  } catch (error) {
    throw new Error(error);
  }
};
