import axios from "axios";

// const TOKEN = `Bearer ${localStorage.getItem("token")}`;
const TOKEN = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdiNWEwOWM0Y2NmNzAwMTUzOTk5ZDUiLCJpYXQiOjE2NDU5MTQ2OTYsImV4cCI6MTY0NjAwMTA5Nn0.5TnhTS4aRLrv2aUeitIMASPgMKGHhxzxUQQv4TfWksc`;

export default axios.create({
  baseURL: `https://encuentrosapp.herokuapp.com`,
  headers: {
    "Content-type": "application/json",
    Authorization: TOKEN
  }
});
