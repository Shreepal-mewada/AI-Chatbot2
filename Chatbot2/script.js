let a = document.querySelector(".bottext");
a.innerHTML = `<img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">Hello! How can I help you today?
`;

let btn = document.querySelector("button");
let c = document.querySelector(".container");
let y;
let j;
let v;
let tr
document.querySelector(".usertext").style.display = "none";

let inpute = document.querySelector("#inp");
inpute.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (inpute.value == "") {
    } else {
      shree(inpute.value);
    }
  }
});

btn.addEventListener("click", () => {
  // document.querySelector(".usertext").style.display="block";
  y = document.querySelector("#inp").value;
  // if (y.key == "Enter") {
    if (inpute.value == "") {
    } else {
      shree(inpute.value);
    }
  // }
  // shree(y);
});

// let a=document.querySelector(".bottext")

// a.innerHTML=`<img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">`

// let a=document.querySelector(".shreeai");
// a.innerHTML=`<div>${<img src="images/Graident Ai Robot.jpg" class="shreeai" alt=""></img>}</div>`

// let a=document.querySelector(".aichatarea");
// a.innerHTML="<div>mddkf</div>";

async function calling(l){


// let text=document.querySelector(".bottext")
  let oo=document.querySelector(".ret")



  let sp = document.createElement("span");
        sp.innerHTML='<img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">' +'<img src="images/load-38_256.gif"  width="30px" height="20px" alt="" class="load"></span>'
        sp.classList.add("bottext")
        c.appendChild(sp)


    let requestoption={
        method:"POST",
        header:{'Content-Type': 'application/json'},
        body:JSON.stringify({
      "contents": [
        {"parts":[{"text":l}]
        }
            ]
       })
    }
    
        let g=await fetch(api_url,requestoption)
        let data=await g.json()
        console.log(data);
        
        const tr=data.candidates[0].content.parts[0].text
        console.log(tr);
   
        sp.innerHTML=`<span><img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">${tr}</span>`
        c.scrollTo({top:c.scrollHeight,behavior:"smooth"})
    
}


function cretechatbox(html, classes) {
  let div = document.createElement("div");
  div.innerHTML = html;
  div.classList.add(classes);
  return div;
}

function shree(u) {
    
  // document.querySelector(".usertext").style.display="block";
  let b = document.querySelector(".usertext");

  let html = (b.innerHTML =
    '<img src="images/user.png" class="shreeus" alt="">' + u);
  inpute.value = "";
  let o = cretechatbox(html, "usertext");
  // document.querySelector(".usertext").style.display="block";
  c.appendChild(o);
  c.scrollTo({top:c.scrollHeight,behavior:"smooth"})

  setTimeout(() => {
    document.querySelector(".bottext").style.display = "none";
    document.querySelector(".botxt").style.display = "block";
     





    // a.innerHTML= '<img src="images/load-38_256.gif"  width="30px" height="20px" alt="" class="load">';

    // let ht = a.innerHTML ='<span class="ret"><img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">' + '<img src="images/load-38_256.gif"  width="30px" height="20px" alt="" class="load"></span>';
             

    // let oi = cretechatbox(ht, "bottext");    

    // c.appendChild(oi);
  }, 1);
  calling(u)
}

  const api_url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB656P_SRsENUnSSxAW-kgCCbJJB1rQwxs"