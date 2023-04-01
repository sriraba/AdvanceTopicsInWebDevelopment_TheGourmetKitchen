const Controller = require("../Controllers/feedController");
const FeedBack = require("../Models/FeedBack");
const express = require("express");
const router = express.Router();
const Utils = require("../Utils/Utils");
const UserController = require("../Controllers/usersController")

// const app = express();
// app.use(express.urlencoded({extended: true}));

/**
 * @author Aneri Shah
 * @description Get all feedbacks from the database
 * @params req, res
 * @return feedbacks
 */
router.get("/all", async (req, res) => {
    try {
        const feedbacks = await Controller.getAllFeedBacks();
        console.log("FeedBacks:", feedbacks);
        return res.status(200).json({
            message: "Fetched all feedbacks",
            success: true,
            data: feedbacks,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error. Unable to retrieve feedbacks.",
            success: false,
        });
    }
});

/**
 * @author Aneri Shah
 * @description Create a new feedback
 * @params req, res
 * @return feedback
 */
 router.put("/add", async (req, res) => {
    try {
        const feedback = req.body.feedback;
        console.log("Feedback: ", feedback);
        if(!feedback){
            Utils.requiredRequestBodyNotFound(res, "feedback", {feedback: {
                param: Object.keys(FeedBack.toObject())
            }});
        }
        const newFeedBack = await Controller.createFeedBack(feedback);
        console.log("newFeedback: ", newFeedBack);
        return res.status(200).json({
            message: "Added a new feedback",
            success: true,
            data: newFeedBack,
        });
    } catch (err) {
        console.log("ERRRRRRORRRRRRR:",err);
        return res.status(500).json({
            message: "Internal server error. Unable to register the feedback.",
            success: false,
        });
    }
});

/**
 * @author Aneri Shah
 * @description Get a specific feedback by user id
 * @params req, res
 * @return feedback
 */
 router.get("/user/:id", async (req, res) => {
    try {
        const user_id = req.params.id;
        if(!user_id){
            Utils.requiredRequestBodyNotFound(res, "feedback", {feedback: {
                param: id
            }});
        }
        const feedback = await Controller.getSpecificFeedBackByUserId(user_id);
        return res.status(200).json({
            message: "Obtained the specific user feedback",
            success: true,
            data: feedback,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error. Unable to retrieve the user feedback.",
            success: false,
        });
    }
});

/**
 * @author Aneri Shah
 * @description Get a specific feedback by course id
 * @params req, res
 * @return feedback
 */
 router.get("/course/:id", async (req, res) => {
    try {
        const course_id = req.params.id;
        console.log("Course Id: ", course_id);
        if(!course_id){
            Utils.requiredRequestBodyNotFound(res, "feedback", {feedback: {
                param: id
            }});
        }
        const feedback = await Controller.getSpecificFeedBackByCourseId(course_id);
        console.log("Feedback: ", feedback);
        return res.status(200).json({
            message: "Obtained the specific course feedback",
            success: true,
            data: feedback,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error. Unable to retrieve the course feedback.",
            success: false,
        });
    }
});

/**
 * @author Aneri Shah
 * @description Get a specific feedback by user and course id
 * @params req, res
 * @return feedback
 */
 router.get("/user/course/:id/:id1", async (req, res) => {
    try {
        const user_id = req.params.id;
        const course_id = req.params.id1;
        console.log("Course Id: ", course_id);
        if(!course_id || !user_id){
            Utils.requiredRequestBodyNotFound(res, "feedback", {feedback: {
                param: id
            }});
        }
        const feedback = await Controller.getSpecificFeedBackByUserAndCourseId(user_id,course_id);
        console.log("Final Feedback: ", feedback);
        return res.status(200).json({
            message: "Obtained the specific user and course feedback",
            success: true,
            data: feedback,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error. Unable to retrieve the course feedback.",
            success: false,
        });
    }
});

router.get("/email/:email", async (req, res) => {
  try {
      const emailId = req.params.email;
      console.log("Email in db: " + emailId)
      const user = await UserController.getUserNameFromEmail(emailId);
      
      return res.status(200).json({
          message: "Obtained the specific course feedback",
          success: true,
          data: user,
      });
  } catch (err) {
      console.log(err);
      return res.status(500).json({
          message: "Internal server error. Unable to retrieve the course feedback.",
          success: false,
      });
  }
});

module.exports = router;