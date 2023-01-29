import axios from 'axios'
import url from "../../helper/url";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${url}/api/get-users`)

    return res.data
  } catch (error) {
    throw new Error(error)
  }
}