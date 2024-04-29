import axios from "axios";

const url = "https://hidocdr.com";

export const postService = {
  getDrugs: async () => {
    try {
      const response = await axios.post(
        `${url}/api/hidoc-us/drug/getDrugList`,
        null
      );
      return response.data;
    } catch (e) {
      console.log("error");
    }
  },
};
