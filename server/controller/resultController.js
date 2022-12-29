const results = require("../model/resultsModel");

const getResults = async (req, res) => {
  const foundResults = await results.find({});

  if (foundResults) {
    if (foundResults.length === 0) {
      res.status(400).json({ message: "Results are yet to be announced !!!" });
    } else {
      res.status(200).json(foundResults);
    }
  } else {
    res.status(400).json({ message: "Results are yet to be announced !!!" });
  }
};

module.exports = getResults;
