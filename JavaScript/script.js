//Select menu
let select = function () {

    let selectHeader = document.querySelectorAll(".select__header");
    let selectItem = document.querySelectorAll(".select__item");

    selectHeader.forEach(function (item) {

        item.addEventListener("click", selectToggle);

    });

    selectItem.forEach(function (item) {

        item.addEventListener("click", selectChoose);

    });

    function selectToggle() {
        this.parentElement.classList.toggle("active");
    }

    function selectChoose() {
        let text = this.innerText
        select = this.closest(".select"),
            currentText = select.querySelector('.select__current');

        currentText.innerText = text;

        select.classList.remove('active');
    }

};

select();

// Select menu//