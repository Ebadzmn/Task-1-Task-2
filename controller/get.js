const ProducModel = require("../model/model")



// exports.CreateProd =  async (req,res) => {
//     try {
//         const reqBody = req.body;
//        const data =  await ProducModel.create(reqBody);
//         res.status(200).json({Msg : "Done Create", data: data})
//     } catch (error) {
//         res.status(400).json({Msg : "Fail Create" ,data:error})
//     }
// }

exports.insert = async (req, res) => {
    try {
      const Reqbody = req.body;
      const data = await ProducModel.create(Reqbody);
      res.status(200).json({ status: "done", data: data });
    } catch (err) {
      res.status(400).json({ status: "fail", data: err });
    }
  };



  exports.getAllPosts = async (req, res) => {
    try {
      const data = await ProducModel.find({}); // Find all posts in the database
  
      res.json({
        data: data.map((data) => ({
          id: data._id,
          Name: data.Name,
          Price: data.Price,
        })),
        
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };