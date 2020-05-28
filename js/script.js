const form = document.getElementsByTagName("form");

form.addEventListenert("submit", (e) => {
  e.preventDefault();
  console.log("aaa");
});
