window.onload = () => {
  var image = elem("#images");
  var level = elem("#level");
  var l = parseInt(level.value);
  elem("#level").addEventListener("change", () => {

    start();
  });
  function createGrid() {
    let images_array = [
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
      "images/img16.jpg",
      "images/img17.jpg",
      "images/img18.jpg",
      "images/img19.jpg",
      "images/img20.jpg"
    ];
    var pics = random(0,l);
    let question_ = arrayForVerification[pics];

    let container = document.createElement("div");
    container.setAttribute("id", "question");
    let container_ = document.createElement("div");
    container_.classList.add("answers");
    let header = document.createElement("header");
    header.innerHTML = `<h1>Who is ${question_.name}</h1>`;
    container.appendChild(header);

    for (i = 0; i < 16; i++) {
      var img = document.createElement("img");
      img.src = images_array[i];
      img.classList.add("qImg");
      img.id = `img${i}`;

      container_.appendChild(img);
      container.appendChild(container_);
    }
    document.body.appendChild(container);
    let QImg = pick(".qImg");
    QImg.forEach((q) => {
      q.addEventListener("click", () => {
        validateanswer();
      });

      function validateanswer() {
        var wol;
        //  let imgsrc=q.src.slice(30,len)
        var qsrc = "https://rememberfaces.netlify.app/" + question_.src;
        if (q.src == qsrc) {
          wol = "Cool,You won";
          alert("yh");
        } else {
          wol = "Sorry,You lost";
          var losefig = document.createElement("figure");
          losefig.innerHTML = `
        <img src=
        "${question_.src}"
         class="qImg"/>
        <figcaption>This is ${question_.name}</figcaption>
         
         `;

          alert("nah");
        }

        let WOL = document.createElement("div");
        WOL.classList.add("restart");
        WOL.innerHTML = `
        <br>
        <br>
        <div class="inner">
        <h3>${wol}</h3>
        <button id="restart" onclick="location.reload()">Restart</button>
        
        </div>
        <br>
        <br>
        `;
        if (losefig !== undefined) {
          WOL.innerHTML += losefig.innerHTML;
        } else {
            alert("good");
        }
 
        container.appendChild(WOL);
       
       /* elem("#restart").addEventListener("click", () => {
            
          elem("#question").style.display = "none";
          start();
        });*/
      }
    });
  }
  var a;
  var b;

  var images_array = [
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
    "images/img16.jpg",
    "images/img17.jpg",
    "images/img18.jpg",
    "images/img19.jpg",
    "images/img20.jpg"
  ];
  function randomarr() {
    let len = images_array.length - 1;
    let randomd = random(0,len);
    a = images_array[randomd];
    images_array = images_array.filter((_, I) => I !== randomd);
    return images_array;
  }
  function randomna() {
    let len = names.length - 1;
    let randomd = random(0,len);
    b = names[randomd];
    names = names.filter((_, I) => I !== randomd);
    return names;
  }

  let names = [
    "Peculiar",
    "Addison",
    "Adrian",
    "Aiden",
    "Alex",
    "Bailey",
    "Dane",
    "Dallas",
    "Bergen",
    "Dale",
    "Bellamy",
    "Williams",
    "Johnson",
    "Carson",
    "Carter",
    "Ruthless",
    "Ellis",
    "Eden",
    "Casey",
    "Elijah"
  ];

  /*alert(randomna());
alert(randomarr());*/

  var arrayForVerification = [];
  function getImageNWord() {
    randomna();
    randomarr();
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = a;
    img.classList.add("img");
    figure.appendChild(img);

    let figCap = document.createElement("figcaption");
    figure.classList.add("fig");
    figCap.innerHTML = b;
    setTimeout(() => {
      figure.classList.remove("fig");
      figure.classList.add("active");
    }, 10);
    figure.appendChild(figCap);
    image.appendChild(figure);

    var eachfigure = {};
    eachfigure.src = a;
    eachfigure.name = b;
    arrayForVerification.push(eachfigure);
    setTimeout(() => {
      figure.classList.add("fig");
      figure.classList.remove("active");
      figure.innerHTML = "";
      console.log(eachfigure.src);
    }, 3012);
  }
  function callNTimes(func, num, delay) {
    //     if (!num) return;
    //     func();
    //     setTimeout(function () {
    //       callNTimes(func, num, delay);
    //     }, delay);

    let count = 0;

    const clear = () => {
      if (count >= num) {
        clearInterval(myInterval);
        console.log("done");
      }
    };

    const myInterval = setInterval(() => {
      func();
      count++;
      console.log([count, num, count === num]);
      clear();
    }, delay);
  }

  function start() {
      elem("#level").disabled=true;
    
    callNTimes(getImageNWord, l, 3200);
    let hh = 3200 * l +4200;
    setTimeout(() => {
        let load=new Loader();
        load.start();
        load.remove(4000);
        load.addText("Loading");
        load.animateText();
    setTimeout(()=>{createGrid();},1000);
    }, hh);
  }
  setTimeout(()=>{
      elem("#loader").style.display="none";
  
},3000);

}
alert(`Hello👋 
This is a simple game created by peculiar-codes 
Faces are shown with their names as a caption 
Depending on the level you choose at least three images is displayed 
At the end of it a grid of 20 images is shown and you will have to pick which one of them is a.....
😁😄😃😀
choose the level of your choice`)