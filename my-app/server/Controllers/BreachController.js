const axios = require("axios");

const checkBreachedAccount = async (req, res) => {
  const email = req.body.email;

  try {
    const response = await axios.get(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`,
      {
        headers: {
          "hibp-api-key": process.env.REACT_APP_API_KEY,
          "user-agent": "PwnedChecker/1.0 (contact@yourdomain.com)",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json([]);
    } else {
      console.error("Error fetching breach data:", error);
      res
        .status(500)
        .json({ message: "An error occurred while checking breaches." });
    }
  }
};




module.exports = { checkBreachedAccount }
