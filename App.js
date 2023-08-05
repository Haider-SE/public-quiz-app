// //create an array of correct answers
// const correctAnswers = ["A", "B", "B", "A"];

// //query the DOM where needed
// const form = document.querySelector(".quiz-form");
// const result = document.querySelector(".result");

// //add event listener to the queried selector
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let score = 0;
//   const userAnswers = [
//     form.Q1.value,
//     form.Q2.value,
//     form.Q3.value,
//     form.Q4.value,
//   ];
//   userAnswers.forEach((answer, index) => {
//     answer === correctAnswers[index] ? (score += 25) : null;
//   });
//   //window -> it listens to everything you are doing on the browser
//   //it captures everything
//   //it is a global object
//   //every activity is stored in it
//   window.scrollTo(0, 0);
//   result.classList.remove("d-none");
//   let output = 0;
//   const timer = setInterval(() => {
//     if (output === score) {
//       clearInterval(timer);
//     } else {
//       output++;
//     }
//     result.querySelector("span").textContent = `${output}%`;
//   }, 10);

//   fetch("http://localhost:3000/api/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ answers: userAnswers }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Process the data and show the result on the front-end
//       const score = data.score;
//       // Your code to display the result goes here
//       console.log(`You scored ${score}%`);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
// // setTimeout(() => {
// //     console.log("Hello after sometime")
// // }, 3000)
// // let i = 0;
// // const timer = setInterval(() => {
// //     console.log("Hello interval");
// //     i++;
// //     if(i == 100){
// //         clearInterval(timer);
// //     }
// // },10)
