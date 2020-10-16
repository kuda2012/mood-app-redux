const store = Redux.createStore(moodChanger);
const h1 = document.querySelector("h1");
const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const confused = document.getElementById("confused");
const angry = document.getElementById("angry");

happy.addEventListener("click", () => {
  store.dispatch({ type: "HAPPY", payload: "😃" });
  h1.innerText = store.getState().mood;
  document.querySelector("body").style.backgroundColor = "yellow";
});

sad.addEventListener("click", () => {
  store.dispatch({ type: "SAD", payload: "😞" });
  h1.innerText = store.getState().mood;
  document.querySelector("body").style.backgroundColor = "grey";
});

confused.addEventListener("click", () => {
  store.dispatch({ type: "CONFUSED", payload: "😵" });
  h1.innerText = store.getState().mood;
  document.querySelector("body").style.backgroundColor = "green";
});

angry.addEventListener("click", () => {
  store.dispatch({ type: "ANGRY", payload: "😡" });
  h1.innerText = store.getState().mood;
  document.querySelector("body").style.backgroundColor = "orangered";
});

function initialMood() {
  h1.innerHTML = store.getState().mood;
}

initialMood();
