import axios from "axios";

export default axios.create({
  baseURL: `https://encuentrosapp.herokuapp.com/api/v1`,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token")
  }
});
