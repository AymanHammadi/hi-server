const express = require("express");
const router = express.Router();

/*
 * 1. POST api/profile
 * 2. GET api/profile/me
 * 3. GET api/profiles
 * 4. GET api/profile/user/:user_id
 * 5. DELETE api/profile
 * 6. POST api/profile/upload
 * 7. PUT api/profile/experience
 * 8. DELETE api/profile/experience/:exp_id
 * 9. PUT api/profile/education
 * 10. DELETE api/profile/education/:edu_id
 */

router.get("/", (req, res) => {
  res.json({ message: "Profile is working" });
});

module.exports = router;
