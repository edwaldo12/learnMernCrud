import axios from 'axios'
import url from "../../helper/url";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${url}/api/get-users`)
    return res.data.users;
  } catch (error) {
    throw new Error(error)
  }
}