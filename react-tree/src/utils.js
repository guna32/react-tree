import axios from "axios";

export const fetchTreeData = async () => {
  try {
    const result = await axios.get(`https://api.myjson.com/bins/qvdu4`);
    return result.data;
  } catch (error) {}
};
