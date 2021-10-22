export const authService = {
  logout,
};

function logout() {
  localStorage.removeItem("user");
}
