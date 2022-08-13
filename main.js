// let SwappingCases = "elZERo";
// let ans = SwappingCases.split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(ans);
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });
// console.log(inv);
// let friends =["Ahmed" ,"Sameh","Sayed","Asmaa","Amgad","Israa"];
// let frindsfilter = friends.filter(function(ele){
//     return ele.startsWith("I") ? true : false ;
// })
// console.log(frindsfilter);
// let number = [11, 20, 2, 5, 17, 10];
// let numberFilter = number.filter(function (ele) {
//   return ele % 2 == 0 ? true : false;
// });
// console.log(numberFilter);
// let sentenceFilter = sentence.split(" ").filter(function (ele, index) {
//   return ele.length<=4;
// }).join(" ");
// console.log(sentenceFilter);
// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele :"";
//   })
//   .join("");
// console.log(ign);
// let mix = "A13BS2ZX";
// let mixFilter = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   }).join("");
// console.log(mixFilter);
// let theBiggest = [
//   "Bla",
//   "Propaganda",
//   "Other",
//   "AAA",
//   "Battery",
//   "Test",
//   "Propaganda_Two",
// ];
// let check = theBiggest.reduce(function(acc,current){
//     return acc.length>current.length ? acc :current;
// })
// console.log(check);
// let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,z";
// let solution = mystring
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele)) && ele !== "_" && ele !== ",";
//   })
//   .map(function (ele, index) {
//     return index == 0 ? "" : ele;
//   })
//   .reduce(function (prvs, current, indx, arr) {
//     return ++indx === arr.length ? prvs + "" : `${prvs}${current}`;
//   });
// console.log(solution);
// let myelement = document.getElementsByTagName("li");
// console.log(myelement[0].innerHTML);
// let userInput =document.querySelector("[name ='username']")
// let ageInput =document.querySelector("[name ='age']")
// document.forms[0].onsubmit = function (e) {
//   let uservalid = false;
//   let agevalid = false;
//   if(userInput.value !="" && userInput.value.length<=10){
//     uservalid=true;
//   }
//   if(ageInput!=""){
//     agevalid=true;
//   }
//   if(uservalid === false || agevalid ===false){
//     e.preventDefault();
//   }

// };
// document.links[0].onclick = function (event) {
//   event.preventDefault();
// };
// document.body.style.cssText =
//   "margin: 0px; background-color: rgb(236, 236, 236); font-family:Tahoma,Arial;";

// let header = document.createElement("header");
// header.className = "website-head";
// header.style.cssText =
//   "display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";
// document.body.appendChild(header);

// // logo
// let headerText = document.createElement("div");
// headerText.classList.add("logo");
// headerText.title = "website-logo";
// headerText.style.cssText =
//   "font-weight:bold;  color:rgb(35, 169, 110); font- size: 26px; ";
// headerText.innerHTML = "Elzero";
// header.appendChild(headerText);

// let headernav = document.createElement("ul");
// headernav.style.display = "flex";
// let headerlinks = ["Home", "About", "service", "Contact"];
// for (let i = 0; i < headerlinks.length; i++) {
//   let li = document.createElement("li");
//   li.style.margin = "5px";
//   li.style.color = "rgb(234 200 133";
//   li.style.listStyle = "none";
//   li.innerHTML = headerlinks[i];
//   headernav.appendChild(li);
// }
// header.appendChild(headernav);

// let content = document.createElement("div");
// document.body.appendChild(content);
// content.classList.add("content");
// content.style.cssText =
//   "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";
// for (let i = 0; i < 15; i++) {
//   let products = document.createElement("div");
//   products.className = "product";
//   products.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
//   let span = document.createElement("span");
//   span.textContent = i + 1;
//   span.style.display="block";
//   products.appendChild(span);
//   products.append("Product");
//   content.appendChild(products);
// }

// let foot = document.createElement("footer");
// foot.className = "footer";
// foot.style.cssText =
//   "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
// foot.append("Copyright 2021");
// document.body.appendChild(foot);
// let hours = document.getElementById("hour");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");
// let msg = document.querySelector(".msg");
// let myfunc = setInterval(function () {
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();

//   if (h > 12) {
//     h -= 12;
//   }
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;
//   hours.innerText = h;
//   minutes.innerText = m;
//   seconds.innerText = s;
//   if (seconds.innerText == "40" || minutes.innerText === "16") {
// 		clearInterval(myfunc);
// 		msg.style.cssText = "display:block";
//   }
// },1000);
// let hours = document.getElementById("hour");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");
// let msg = document.querySelector(".msg");
// let count;
// function countDown() {
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();

//   if (h > 12) {
//     h -= 12;
//   }
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;
//   hours.innerText = h;
//   minutes.innerText = m;
//   seconds.innerText = s;
//   count = setTimeout( function() {
//     countDown();
// 		if (seconds.innerText == "00" || minutes.innerText === "16") {
// 			clearTimeout(count);
// 			msg.style.cssText = "display:block";
// 		}
//   }, 1000);
// }
// countDown();
// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);
// const question = document.querySelector("#header");
// let congratulations = document.querySelector(".congrtulation");

// question.innerText = `What is ${num1} multiply by ${num2}?`;
// let correctAns = num1 * num2;
// let form = document.querySelector(".container");
// let input = document.getElementById("input");
// let scoreEl = document.getElementById("score");
// var score = JSON.parse(localStorage.getItem("score"));
// let mybtn = document.querySelector(".clear");

// scoreEl.innerHTML = `score: ${score}`;
// form.addEventListener("submit", function (e) {
//   let userAns = parseInt(input.value); //this to convert string to number

//   if (userAns == correctAns) {
//     score++;
//     scoreEl.innerHTML = `score: ${score}`; // this to print the update score to user interface

//     updateLocalStorage();
//   } else {
//     score--;
//     updateLocalStorage();
//   }
// });
// function updateLocalStorage() {
//   localStorage.setItem("score", JSON.stringify(score));
// }

// mybtn.onclick = function () {
//   score = 0;
//   scoreEl.innerHTML = `score: ${score}`;
//   updateLocalStorage();

// };
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });
// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");
// let arrayOfTasks = [];
// if (localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }
// getDataFromLocalStorage();

// submit.onclick = function () {
//   if (input.value !== "") {
//     addTaskToArray(input.value); // Add Task To Array Of Tasks
//     input.value = ""; // Empty Input Field
//   }
// };
// function addElementsToPageFrom(arrayOfTasks) {
//   // Empty Tasks Div
//   tasksDiv.innerHTML = "";
//   // Looping On Array Of Tasks
//   arrayOfTasks.forEach((task) => {
//     // Create Main Div
//     let div = document.createElement("div");
//     div.className = "task";
//     // Check If Task is Done
//     if (task.completed) {
//       div.className = "task done";
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     // Create Delete Button
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("Delete"));
//     // Append Button To Main Div
//     div.appendChild(span);
//     // Add Task Div To Tasks Container
//     tasksDiv.appendChild(div);
//   });
// }
// // Click On Task Element
// tasksDiv.addEventListener("click", (e) => {
//   // Delete Button
//   if (e.target.classList.contains("del")) {
//     // Remove Task From Local Storage
//     deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//     // Remove Element From Page
//     e.target.parentElement.remove();
//   }
//   // Task Element
//   if (e.target.classList.contains("task")) {
//     // Toggle Completed For The Task
//     toggleStatusTaskWith(e.target.getAttribute("data-id"));
//     // Toggle Done Class
//     e.target.classList.toggle("done");
//   }
// });
// function deleteTaskWith(taskId) {
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
// function addTaskToArray(taskText) {
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };
//   arrayOfTasks.push(task);
//   addElementsToPageFrom(arrayOfTasks);
// }
// function deleteTaskWith(taskId) {
//   // For Explain Only
//   // for (let i = 0; i < arrayOfTasks.length; i++) {
//   //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
//   // }
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
// function toggleStatusTaskWith(taskId) {
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskId) {
//       arrayOfTasks[i].completed == false
//         ? (arrayOfTasks[i].completed = true)
//         : (arrayOfTasks[i].completed = false);
//     }
//   }
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }
// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
document.querySelectorAll("ul").forEach(n => n.addEventListener("click" , () =>{
  hamburger.classList.remove("active");
  navmenu.classList.remove("active");
}))