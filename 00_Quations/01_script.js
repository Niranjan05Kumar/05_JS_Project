// Quation 01
// var button = document.querySelector('button');
// var p = document.querySelector('p');

// button.addEventListener('click', function(){
//     p.textContent = "Nmaste, Main hu Neeraj"
// })



// Quation 02
// var img1 = document.getElementById('img1');
// var img2 = document.getElementById('img2');
// var button = document.querySelector('button');
// let src1 = img1.src;
// let src2 = img2.src;
// button.addEventListener('click', function(){
//     // 1. only once time (only for first click)
//     // img1.src = src2;
//     // img2.src = src1;

//     // 2. for every click
//     if(img1.src === src1){
//         img1.src = src2;
//         img2.src = src1;
//     }
//     else{
//         img1.src = src1;
//         img2.src = src2;
//     }
// })


// Quation 03
// var form = document.querySelector("form")
// var inputs = document.querySelectorAll('input[type="text"]');
// var p = document.querySelector("p");

// form.addEventListener("submit", function(event){
//     event.preventDefault();  // form ke sath deal karte time preventDefault jarur lagaye page ko refresh hone se bachne ke liye.

//     for(var i=0; i<inputs.length; i++ ){
//         if(inputs[i].value.trim() === ""){
//             p.textContent = 'Error, something fields are empty.';
//             p.style.color = "red"; 
//             break;
//         }
//         else{
//             p.textContent = "";
//         }
//     }
// })



// Quation 04
// var inp = document.querySelector('input');
// var add = document.querySelector('#addBtn');
// var remove = document.querySelector('#remove');
// var ul = document.querySelector('ul');

// var Li;

// add.addEventListener('click', function(){

//     if(inp.value.trim() === ''){}
//     else{
//         Li = document.createElement("li");
//         Li.textContent = inp.value;
//         ul.appendChild(Li);
//         inp.value = "";
//     }
// })

// remove.addEventListener('click',function(){
//     ul.removeChild(Li);
// })



// Quation 05
// var h2 = document.querySelector("h2");
// var start = document.querySelector("#start")
// var stop = document.querySelector("#stop")
// var reset = document.querySelector("#reset")

// var count;
// start.addEventListener('click', function(){
//     let i = 0;
//     count = setInterval(function(){
//         h2.textContent = i;
//         i++;
//     }, 1000)
// })
// stop.addEventListener('click', function(){
//     clearInterval(count);
// })
// reset.addEventListener('click', function(){
//     h2.textContent = "0"
// })



// Quation 06
// var tabs = document.querySelectorAll('.tab');
// var contents = document.querySelectorAll('.content');

// contents[0].style.display = 'block';

// tabs.forEach(function(tab, index) {
//     tab.addEventListener('click', function() {
//         removeOtherContent();
//         contents[index].style.display = 'block';
//     });
// });

// function removeOtherContent() {
//     contents.forEach(function(elem) {
//         elem.style.display = 'none';
//     });
// }



// Quation 07
// var progress = document.querySelector(".progress");
// var span = document.querySelector("span");

// let prgCount = 0;

// var inerval = setInterval(function(){
//     if(prgCount === 100){
//         clearInterval(inerval);
//         span.style.display = "block"
//     }
//     prgCount++;
//     progress.style.width = prgCount + "%";
// }, 50)




// Quation 08
// var search = document.querySelector("input");
// var peoples = document.querySelector(".peoples");

// var data = [
//     { name: "Harsh", src:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
//     { name: "Neeraj", src:"https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Harshita", src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
//     { name: "Kaniskq", src:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Ashu", src:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Abhishek", src:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Harshika", src:"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Ashok", src:"https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Harshu singh", src:"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
//     { name: "Neeraj Kumar", src:"https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
// ]

// var pers = "";

// data.forEach(function(elem){
//     pers += `
//         <div class="person">
//             <div class="image">
//                 <img src="${elem.src}">
//             </div>
//             <h3>${elem.name}</h3>
//         </div>
//     `;
// })

// peoples.innerHTML = pers;

// search.addEventListener("input", function(){
    
//     var matching = data.filter(function(e){
//         return e.name.startsWith(search.value)
//     })

//     var searchUser = "";
//     matching.forEach(function (elem) {
//         searchUser += `
//             <div class="person">
//                 <div class="image">
//                     <img src="${elem.src}">
//                 </div>
//                 <h3>${elem.name}</h3>
//             </div>
//         `;
//     })

//     peoples.innerHTML = searchUser;
// })




// Quation 09
// var textArea = document.querySelector("textarea");
// var counter = document.querySelector("#counter");

// textArea.addEventListener("input", function(){
//     counter.textContent = textArea.value.length;
// })




// Quation 10
var progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function(){
    // const scrolledHeight = document.documentElement.scrollTop;
    // OR
    const scrolledHeight = window.scrollY;

    // const TotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // OR 
    const TotalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const widthPercentage = (scrolledHeight/TotalHeight) * 100;

    progressBar.style.width = widthPercentage + "%";
})