import axios from "axios";

import { getTodo } from "../getUser/index";
import url from "../../helper/url";

export const updateTitle = async (id,body) => {
  try {
    const getUserRes = await getTodo(id);

    if (getUserRes.status === 200) {
      axios({
        method: "PUT",
        url: `${url}/api/udpate-user/${id}`,
        data: { id: getUserRes.id, body: body },
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
