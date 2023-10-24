document.addEventListener('DOM', () => {
    function addProductToast
    function addProductFunc(btnName) {
        btnName.forEach(function (el) {
            el.addEventListener("click", function () {
            let productId = el.getAttribute("data-productId");

            fetch(URL + "basket/add/?count=1&product=" + parseInt(productId), {
                headers: {
                Authorization: "Token " + getCookie("token"),
                },
            }).then(function () {
                const dataCounter = document.querySelectorAll(".data-counter");
                const addProductToast = document.querySelector(".add-product-toast");

                dataCounter.forEach(function (el) {
                if (el.getAttribute("data-count") == "") {
                    el.setAttribute("data-count", 0);
                } else {
                    counter = parseInt(el.getAttribute("data-count")) + 1;
                }
                });

                dataCounter.forEach(function (el) {
                el.setAttribute("data-count", counter);
                });
                addProductToast.classList.add("activeProduct");

                setTimeout(function () {
                addProductToast.classList.remove("activeProduct");
                }, 3000);
            });
            });
        });
        }
})