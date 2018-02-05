function fetch_Repo(){
  var gitUserName = document.getElementById("gitUserName").value;
  var xhttp = new XMLHttpRequest();
  var url = "https://api.github.com/users/"+gitUserName+"/repos";
  xhttp.open("GET", url , false);
  xhttp.send();

  if(xhttp.status == 200)
  {
    var response = JSON.parse(xhttp.response);
    if(response.length == 0)
    {
      alert("Sorry..!!! There are no repositories for this user!");
      window.location.reload();
    }
    else {
      var result= "";
      for (var i=0; i < response.length; i++){
         result = result + response[i].name+"\n";
      }
      //alert("The user repositories are: "+result.substring(0, result.length-1));
      var resultElement=document.getElementById("result");
      resultElement.innerHTML=result.substring(0, result.length-1);
      resultElement.style.display = "block";
    }
  }
  else {
   alert("Ooops...!! The git user name is not found!");
   window.location.reload();
  }

}
