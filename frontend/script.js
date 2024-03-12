let container=document.querySelector(".cards");
let search=document.querySelector(".form-control");
console.log(search);
let cards=container.querySelectorAll(".card-text");
function data(){
    fetch("http://localhost:3000/user/courses").then(async(res)=>{
        let json=await res.json();
        courses=json.courses;
        for(let i=0;i<cards.length;i++){
           
            cards[i].innerText=courses[i].title +" By "+courses[i].tutorname +"\n"+courses[i].description+"\n Price "+ courses[i].price;
        }
    })
}
data();


search.addEventListener("change",()=>{
    alert("changed")
})
















// async function addUser(){
//     try{
//     const response= await fetch("http://localhost:3000/user/signup",{
//             method:"POST",
//             headers:{ 
//                 "content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 username:"sarmistha behera",
//                 password:"123444",
//                 contact:"123456"
//             }),
//         });
//         if(!response.ok){
//             throw new Error("network response was not ok");
//         }
//        alert("user added")
//           }catch(err){
//             alert("user already exist")
//         throw new Error (" error occured");
//           }
// }

// console.log(btn);
// btn.addEventListener("click",()=>{
//     addUser();
// })