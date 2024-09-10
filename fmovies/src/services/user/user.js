import { url } from "./user.route";

function registerUser(user) {
  return url.post(`/register`, user);
}

function loginUser(user) {
  return url.post(`/login`, user);
}

function authUser(user) {
  return url.post(`/auth`, null, {
    headers: { Authorization: `Bearer ${user}` },
  });
}

export { registerUser, loginUser, authUser };
