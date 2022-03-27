window.onload=()=>{
        var image=document.querySelector("#images");
function createGrid(){
       let images_array=[
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg",
"images/img5.jpg",
"images/img6.jpg",
"images/img7.jpg",
"images/img8.jpg",
"images/img9.jpg",
"images/img10.jpg",
"images/img11.jpg",
"images/img12.jpg",
"images/img13.jpg",
"images/img14.jpg",
"images/img15.jpg",
"images/img16.jpg"
]; 
var pics=ran(3);
var question_=arrayForVerification[pics];

let container=document.createElement("div");
container.setAttribute("id","question")
let container_=document.createElement("div");
container_.classList.add("answers")
let header=document.createElement("header");
header.innerHTML=`<h1>Who is ${question_.name}</h1>`;
container.appendChild(header);

for(i=0;i<16;i++){
        var img=document.createElement("img");
    img.src=images_array[i];
    img.classList.add("qImg");
    img.id=`img${i}`;
  
    container_.appendChild(img);
    container.appendChild(container_);
    
}
document.body.appendChild(container);
let QImg=document.querySelectorAll(".qImg");
QImg.forEach(q=>{
        q.addEventListener("click",()=>{
                alert("wow");
                validateanswer();
                
        })

function validateanswer(){
           var wol;
       
    //  let imgsrc=q.src.slice(30,len)  
    alert(q.src+" wahala");
       alert(question_.src);  
   if(q.src==question_.src){
          
         wol="Cool,You won";
           alert("yh");
   }
   else{
         wol="Sorry,You lost";
         var losefig=document.createElement("figure");
         losefig.innerHTML=`
        <img src=
        "${question_.src}"
         class="qImg"/>
        <figcaption>This is ${question_.name}</figcaption>
         
         `
        
           alert("nah");
   } 
   
  
        let WOL=document.createElement("div");
        WOL.classList.add("restart")
        WOL.innerHTML=`
        <br>
        <br>
        <div class="inner">
        <h3>${wol}</h3>
        <button id="restart">Restart</button>
        
        </div>
        <br>
        <br>
        `
        if(losefig!==undefined){
                WOL.innerHTML+=losefig.innerHTML
        }
     else{}
   container.appendChild(WOL)  ; document.querySelector("#restart").addEventListener("click",()=>{
           document.querySelector("#question").style.display="none";
           start();
   });
   
}
});
}
function ran(n){
        return Math.floor(Math.random()*n)
}
var a;
var b;

var images_array=[
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg",
"images/img5.jpg",
"images/img6.jpg",
"images/img7.jpg",
"images/img8.jpg",
"images/img9.jpg",
"images/img10.jpg",
"images/img11.jpg",
"images/img12.jpg",
"images/img13.jpg",
"images/img14.jpg",
"images/img15.jpg",
"images/img16.jpg"
];
function ranarr(){
    let len = images_array.length - 1;
    let rand = ran(len);
    a = images_array[rand];
    images_array = images_array.filter((_, I) => I !== rand);
    return images_array;

}
         function ranna(){
    let len = names.length - 1;
    let rand = ran(len);
    b = names[rand];
    names = names.filter((_, I) => I !== rand);
    return names;
}


let names=["Peculiar","Richies","Racheal","Reenie","Chigozie","Richie","Israel","John","Joe","Emmanuel","Rihmeek","Williams","Johnson","Henry","Andrew","ruthless"];


/*alert(ranna());
alert(ranarr());*/
var arrayForVerification=[];
function getImageNWord(){
        ranna();
ranarr();
        let figure=document.createElement("figure");
    let img=document.createElement("img");
    img.src=a;
    img.classList.add("img")
     figure.appendChild(img);
        
       let figCap=document.createElement("figcaption");
       figure.classList.add("fig") 
       figCap.innerHTML=b;
       setTimeout(()=>{
               figure.classList.remove("fig");
    figure.classList.add("active");
        
        },10);
        figure.appendChild(figCap);
    image.appendChild(figure);
    
    var eachfigure={};
    eachfigure.src=a;
    eachfigure.name=b;
    arrayForVerification.push(eachfigure);
     setTimeout(()=>{
            figure.classList.add("fig");
            figure.classList.remove("active");
    figure.innerHTML="";       
     },3012)
}
function callNTimes(func, num, delay) {
    if (!num) return;
    func();
    setTimeout(function() { callNTimes(func, num - 1, delay); }, delay);
}
function start(){
callNTimes(getImageNWord, 3, 3200);


let hh=3200*3.2;
setTimeout(()=>{
        createGrid();
},hh);

}
start();
}