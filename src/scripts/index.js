window.onload = function () {
    const bt = document.querySelectorAll("button");

    bt.forEach((btn) =>
        btn.addEventListener("click", function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            const ripple = document.createElement("span");
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            this.appendChild(ripple);

            setTimeout(function (e) {
                ripple.remove();
            }, 600);
        })
    );
};