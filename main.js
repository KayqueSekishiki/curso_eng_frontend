$(document).ready(function () {
  const name = document.querySelector(".profile-name");
  const username = document.querySelector(".profile-username");
  const avatar = document.querySelector(".profile-avatar");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const link = document.querySelector(".profile-link");

  const endpoint = "https://api.github.com/users/kayquesekishiki";

  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      name.innerText = json.name;
      username.innerText = "@" + json.login;
      avatar.src = json.avatar_url;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
      link.href = json.html_url;
    })
    .catch((error) => {
      alert(
        "Ocorreu um erro ao buscar este perfil no github, por favor, tente novamente mais tarde."
      );
    });
});
