var addbtn = document.querySelector(".add");
var remove = document.querySelector(".delete");
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");
var e = document.querySelector(".e");
var f = document.querySelector(".f");
var ne = document.querySelector(".ne");
var count=0;

addbtn.addEventListener("click",function(){
if (count<6){
  count++;
  if(count===1){
 a.classList.add("aa");
}else if (count===2) {
  b.classList.add("bb");
}else if (count===3) {
  c.classList.add("cc");
}else if (count===4) {
  d.classList.add("dd");
}else if (count===5) {
  e.classList.add("ee");
}else if (count===6) {
  f.classList.add("ff");
  ne.style.opacity="1";
}

}
});

remove.addEventListener("click",function(){
  if(count===1){
 a.classList.remove("aa");
   count--;
}else if (count===2) {
  b.classList.remove("bb");
    count--;
}else if (count===3) {
  c.classList.remove("cc");
    count--;
}else if (count===4) {
  d.classList.remove("dd");
    count--;
}else if (count===5) {
  e.classList.remove("ee");
    count--;
}else if (count===6) {
  f.classList.remove("ff");
  ne.style.opacity="0";
    count--;
}
});
