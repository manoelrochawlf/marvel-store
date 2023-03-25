import Api from "../helpers/Api/axios-config";

export const ComicsService = {
  getAllComics: async () => {
    try {
      const res = await Api.get("/comics?limit=50");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  ComicById: async (id) => {
    try {
      const res = await Api.get(`/comics/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

}