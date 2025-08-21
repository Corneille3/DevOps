// jQuery 
$(document).ready(function () {

    // Class Selector, This selector
    const home_service = $('.home-services');
    const home_category = $('.home-category');
    const search_box = $('.search-box-area');
    const thumb = $('.product-section .list-box > .item > .thumb');

    // Single Click 
    $(".mobile-menu").on("click", function () {
        $("body").toggleClass("sidebar-open");
    });

    // Double Click
    home_service.find('.item').on("dblclick", function () {
        $(this).toggleClass("active");
    });

    // Mouse enter & Mouse leave
    home_category.find('.item').on('mouseenter', function () {
        $(this).addClass('active');
    }).on("mouseleave", function () {
        $(this).removeClass('active');
    })

    // Focus, Blur
    search_box.find("input").on("blur", function () {
        let inp = $(this);
        if (inp && inp.val() !== '') {
            inp.removeClass("error");
        } else {
            inp.addClass("error");
        }
        $(this).removeClass('focused');
    }).on("focus", function () {
        $(this).addClass('focused');
    });

    //   Slide toggle, Animate
    $('.toggle-button').on('click', function () {
        let click = $(this), icon = click.find('i'), parent = click.closest('.container'), ibox = parent.find('.ibox');
        ibox.slideToggle();
        if (icon.hasClass("fa-angle-down")) {
            icon.removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            icon.removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });

    // Fade in, Fade out
    // Those effect has been used at the modal 

    // Animate
    thumb.on('mouseenter', function () {
        $(this).find('img').css("transform", "scale(1.1)");
    }).on('mouseleave', function () {
        $(this).find('img').removeAttr("style");
    });

});




// JAVASCRIPT VARIABLES
const body = document.querySelector("body");
const modal = document.getElementById("modal");
const modal_body = document.querySelector(".modal-body");
const modal_header = document.querySelector(".modal-header>h2");
const iframe = document.createElement("iframe");
const heading_one = document.querySelectorAll(".section-title");
const cart_button = document.querySelectorAll(".add-to-cart");
const paragraph = document.querySelector(".about-paragraph");
const dropdown_select = document.querySelector("#getMileage");

// Headings, Paragraphs
heading_one && heading_one.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        this.style.color = "var(--primary)";
    });
    elem.addEventListener("mouseleave", function () {
        this.style.color = "var(--light)";
    });
});

paragraph && paragraph.addEventListener("click", function () {
    this.classList.toggle('highlight-text');
});

// SELECT 
dropdown_select && dropdown_select.addEventListener("change", function () {
    document.getElementById("previewMileage").innerText = this.value !== '' ? ` (${this.value})` : '';
});


// SHOPPING CART
cart_button && cart_button.forEach(function (elem) {
    elem.addEventListener("click", function () {
        alert("Item has been added to the shopping cart.");
    });
});

// USE OF POPUP
var openModal = function (obj) {
    const title = obj.getAttribute("data-title");
    const content = obj.getAttribute("data-content");

    body.classList.add("modal-open");
    modal_header.innerHTML = title;
    iframe.setAttribute("src", `popup-page/${content}`);
    modal_body.append(iframe);

    // document.getElementById("modal").style.display = "block";
    $("#modal").fadeIn(500);

}, closeModal = function () {

    // document.getElementById("modal").style.display = "none";
    $("#modal").fadeOut(300);

    body.classList.remove("modal-open");
    modal_header.innerHTML = '';
    modal_body.innerHTML = '';

}

window.addEventListener("resize", function () {
    let w = document.body.clientWidth;
    if (w > 991) {
        body.classList.remove("sidebar-open");
    }
});

window.addEventListener("load", function () {
    // load data from server
});

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}