// Script To Create a Cliente Env For My Data Retrieving
function LoadJS(target){
  var script = document.createElement("script");
  script.src = target;
  try{
    document.body.addChild(script);
  }catch(Exception e){
    console.log(e);
  }
}
