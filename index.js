let d = document;
((d) => {
  const $menubtn = d.querySelector(".buttonHabur"),
    $menu = d.querySelector(".menu");
  $menubtn.addEventListener("click", (e) => {
    $menubtn.classList.toggle("is-active");
    /*     $menubtn.firstElementChild.classList.remove("is-active"); */
    $menu.classList.toggle("menu_active");
  });
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menubtn.classList.remove("is-active");
    $menu.lastElementChild.classList.add("none");
    $menu.classList.remove("menu_active");
  });
})(document);

let iconLeft = d.querySelector("#icon-left"),
  iconRigth = d.querySelector("#icon-right"),
  trabajo1 = d.querySelector("#trabajo-1"),
  trabajo2 = d.querySelector("#trabajo-2"),
  trabajo3 = d.querySelector("#trabajo-3");

function funcionCarrusel(xp) {
  let cont = 0;
  xp.addEventListener("click", (e) => {
    let icons = e.target;
    let ejemplo = icons.closest(".modal-container"),
      iconLeft = ejemplo.querySelector("#icon-left"),
      iconRigth = ejemplo.querySelector("#icon-right");
    if (icons == iconLeft) {
      cont--;
      if (cont == -1) {
        let ejemplo = icons.closest(".cont-img-modal"),
          imgIconNone = ejemplo.querySelector("#imgAng-1ID"),
          imgIconBlock = ejemplo.querySelector("#imgGIt-2");
        imgIconBlock.classList.add("imgAng-classBlock");
        imgIconNone.classList.add("imgAng-class");
      } else if (cont == 0) {
        if (cont == 0) {
          let ejemplo = icons.closest(".cont-img-modal"),
            imgIconNone = ejemplo.querySelector("#imgAng-1ID"),
            imgIconBlock = ejemplo.querySelector("#imgHtm-3");
          imgIconBlock.classList.remove("imgAng-classBlock");
          imgIconNone.classList.remove("imgAng-class");
        }
      }
      if (cont == -2) {
        let ejemplo = icons.closest(".cont-img-modal"),
          imgIconNone = ejemplo.querySelector("#imgGIt-2"),
          imgIconBlock = ejemplo.querySelector("#imgHtm-3");
        imgIconBlock.classList.add("imgAng-classBlock");
        imgIconNone.classList.remove("imgAng-classBlock");

        cont = 1;
      }
    } else if (icons == iconRigth) {
      cont++;
      if (cont == 0) {
        let ejemplo = icons.closest(".cont-img-modal"),
          imgIconNone = ejemplo.querySelector("#imgAng-1ID"),
          imgIconBlock = ejemplo.querySelector("#imgGIt-2");
        imgIconBlock.classList.remove("imgAng-classBlock");
        imgIconNone.classList.remove("imgAng-class");
      } else if (cont == 1) {
        let ejemplo = icons.closest(".cont-img-modal"),
          imgIconNone = ejemplo.querySelector("#imgAng-1ID"),
          imgIconBlock = ejemplo.querySelector("#imgHtm-3");
        imgIconBlock.classList.add("imgAng-classBlock");
        imgIconNone.classList.add("imgAng-class");
      }
      if (cont == 2) {
        cont = -1;
        let ejemplo = icons.closest(".cont-img-modal"),
          imgIconNone = ejemplo.querySelector("#imgHtm-3"),
          imgIconBlock = ejemplo.querySelector("#imgGIt-2");

        imgIconBlock.classList.add("imgAng-classBlock");
        imgIconNone.classList.remove("imgAng-classBlock");
      }
    }
  });
}

/*  */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("imgAng-class");
    fetch("https://formsubmit.co/ajax/ifranluzbelito@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add(".imgAng-classBlock");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
funcionCarrusel(trabajo1);
funcionCarrusel(trabajo2);
funcionCarrusel(trabajo3);
