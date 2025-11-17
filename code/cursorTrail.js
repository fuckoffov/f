document.addEventListener("mousemove", e => {
    const dot = document.createElement("div");
    dot.className = "cursor-trail";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 700);
});
