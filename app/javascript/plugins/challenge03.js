function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function challenge03() {
  const values = document.querySelectorAll(".controls input");
  values.forEach(value => value.addEventListener("change", handleUpdate));
  values.forEach(value => value.addEventListener("mousemove", handleUpdate));
}

export { challenge03 };
