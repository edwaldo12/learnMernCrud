import axios from "axios";

import { getUser } from "../getUser/index";
import url from "../../helper/url";

export const updateUser = async (id, body) => {
  try {
    const getUserRes = await getUser(id);
    if (getUserRes.status === 200) {
      await axios({
        method: "PUT",
        url: `${url}/api/update-user/${id}`,
        data: { id: getUserRes.data.user._id, body },
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
