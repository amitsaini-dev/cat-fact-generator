let dispfact = document.querySelector("#fact");
let btn = document.querySelector("button");
let api = "https://catfact.ninja/fact";
btn.addEventListener("click", async function () {
    let fact = await getCatFact();
    dispfact.innerHTML = fact;
})

async function getCatFact() {
    let fact = await axios.get(api);
    return fact.data.fact;
}