// Github codes Start
let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let secret = document.querySelector(".secret");
  let search = document.querySelector(".search").value;
  let result = search.split(" ").join("");
  if (result != "") {
    secret.innerHTML = "";
    let content = document.querySelector(".content");
    fetch("https://api.github.com/users/" + result)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        content.innerHTML = `
          <div class="content">
          <img src="${data.avatar_url}" alt="user">
          <p class="paragraph paragraph__active">UserName: ${data.name}</p>
          <p class="paragraph">Location: ${data.location}</p>
          <p class="paragraph">Github link: <a target="__blank" class="link" href="https://github.com/${result}">${result}</a></p>
          <div class="active__content">
              <p class="paragraph">Followers: ${data.followers}</p>
              <p class="paragraph">Following: ${data.following}</p>
          </div>
          </div>
      `;
      });
  } else {
    secret.innerHTML = "Ma'lumot kiriting";
  }
});
// Github codes End
