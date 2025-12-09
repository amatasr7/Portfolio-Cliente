const input = document.getElementById("inputTarea");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.innerText = input.value;

  li.addEventListener("click", () => {
    li.remove();
  });

  lista.appendChild(li);
  input.value = "";
});
