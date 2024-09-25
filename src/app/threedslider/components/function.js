export default function ChangeImage() {
  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll("#container div");
    document.querySelector("#container").appendChild(items[0]);
  });
  prev.addEventListener("click", function () {
    let items = document.querySelectorAll("#container div");
    document.querySelector("#container").prepend(items[items.length - 1]);
  });

  return;
}
