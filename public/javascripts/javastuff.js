function toggleDark() {
  let body = document.body;

  if (body.classList.contains("darkmode")){
    body.classList.remove("darkmode");
  } else {
    body.classList.add("darkmode");
  }
}
