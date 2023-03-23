import Api from "../helpers/Api/axios-config";

export const ComicsService = {
  getAllComics: async () => {
    try {
      const res = await Api.get("/comics");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}