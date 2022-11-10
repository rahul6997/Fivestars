const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.post("/", (req, res, next) => {
  Doctor.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authorization Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authorization Failed",
          });
        }
        if (result) {
          const access_token = jwt.sign(
            {
              email: user[0].email,
              doctorId: user[0]._id,
            },
            process.env.JWT_ACCESS_KEY,
            {
              expiresIn: "1h",
            }
          );
          const refresh_token = jwt.sign(
            {
              email: user[0].email,
              doctorId: user[0]._id,
            },
            process.env.JWT_REFRESH_KEY,
            {
              expiresIn: "1d",
            }
          );
          res.cookie("jwt", refresh_token, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          return res.status(200).json({
            message: "Authorization Successful",
            access_token: access_token,
          });
        }
        res.status(401).json({
          message: "Authorization Failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/patient", (req, res, next) => {
  Patient.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authorization Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authorization Failed",
          });
        }
        if (result) {
          const access_token = jwt.sign(
            {
              email: user[0].email,
              patientId: user[0]._id,
            },
            process.env.JWT_ACCESS_KEY,
            {
              expiresIn: "1h",
            }
          );
          const refresh_token = jwt.sign(
            {
              email: user[0].email,
              patientId: user[0]._id,
            },
            process.env.JWT_REFRESH_KEY,
            {
              expiresIn: "1d",
            }
          );
          res.cookie("jwt", refresh_token, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          return res.status(200).json({
            message: "Authorization Successful",
            access_token: access_token,
          });
        }
        res.status(401).json({
          message: "Authorization Failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
