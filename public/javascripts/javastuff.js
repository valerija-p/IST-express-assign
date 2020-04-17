$.ajax({
  type: "post",
  url:"/api",
  headers:{
    "some-Header":"Some-Header-Value"
  },
  success: function(data){
    console.log(data);
  }
})





function toggleDark() {
  let body = document.body;

  if (body.classList.contains("darkmode")){
    body.classList.remove("darkmode");
  } else {
    body.classList.add("darkmode");
  }
}
