import axios from 'axios';

export const axiosWithAuth = () => {
  // const token = window.localStorage.getItem('token');
  const email = window.localStorage.getItem('email');
  const password = window.localStorage.getItem('password');
  console.log("axiosWithAuth has this email and password", email, password)
  return axios.create({
    headers: {
      password: password,
      email: email
    },
    baseURL: 'https://med-cabinet2.herokuapp.com'
  });
};
