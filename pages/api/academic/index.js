import { errorHandler } from "../../../utils/common";
import dbConnect from "../../../database/conn";
import academic from "../../../model/Academic";
export default async function (req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ hasError: true, erroeMessage: "Invalid Request" });
  } else {
    try {
      // create connection
      await dbConnect();

      const academicissue = new academic({ ...req.body });
      const saveissue = await academicissue.save();
      console.log(saveissue);

      if (saveissue) {
        res.status(201).json({ hasError: false, data: saveissue });
      } else {
        res
          .status(400)
          .json({ hasError: true, erroeMessage: "SomeThing went wrong" });
      }
    } catch (error) {
      res.status(400).json({ hasError: true, erroeMessage: error });
    }
  }
}
