(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var e, t;
    !(function () {
      var e = document.querySelectorAll(".button--burger"),
        t = document.querySelector(".mobile-menu"),
        o = document.querySelector("body");
      function n(e) {
        e.preventDefault(),
          e.stopPropagation(),
          t.classList.toggle("open"),
          (o.style.overflow = t.classList.contains("open") ? "hidden" : "auto");
      }
      e.forEach(function (e) {
        return e.addEventListener("click", n);
      }),
        t.addEventListener("click", function (e) {
          e.currentTarget === e.target &&
            (t.classList.remove("open"), (o.style.overflow = "auto"));
        });
    })(),
      (e = document.querySelectorAll(".video__play-btn")),
      (t = document.querySelectorAll(".video__source-item")),
      e.forEach(function (e) {
        e.addEventListener("click", function (e) {
          var t = e.target.closest(".video"),
            o = t.querySelector(".video__overlay--source");
          (t.querySelector(".video__overlay--play").style.display = "none"),
            (o.style.display = "flex");
        });
      }),
      t.forEach(function (e) {
        return e.addEventListener("click", function (e) {
          var t = e.target.closest(".video"),
            o = t.querySelector(".video__overlay--poster"),
            n = t.querySelector(".video__overlay--source"),
            r = t.querySelector("iframe"),
            i = e.currentTarget.getAttribute("data-url") + "?rel=0&autoplay=1";
          (r.src = i), (o.style.display = "none"), (n.style.display = "none");
        });
      }),
      (function () {
        var e = document.querySelector("#fixed"),
          t = document.querySelector("footer");
        console.log(e);
        var o = "button--fixed";
        new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              t.isIntersecting
                ? (console.log("isIntersecting"), e.classList.remove(o))
                : (console.log("!isIntersecting"), e.classList.add(o));
            });
          },
          { threshold: 0 }
        ).observe(t);
      })(),
      (function () {
        var e = document.querySelector(".restoration-mechanism__content");
        if (e) {
          var t,
            o = function () {
              window.innerWidth > 1220
                ? t && (t.destroy(), (t = null))
                : t ||
                  (t = new Swiper(e, {
                    spaceBetween: 10,
                    loop: !1,
                    slidesPerView: "auto",
                    pagination: { el: ".swiper-pagination" },
                  }));
            };
          o(), window.addEventListener("resize", o);
        }
      })(),
      (function () {
        var e = document.querySelector(".risks-map-calculation__slider");
        if (e) {
          var t,
            o = function () {
              window.innerWidth > 1220
                ? t && (t.destroy(), (t = null))
                : t ||
                  (t = new Swiper(e, {
                    spaceBetween: 10,
                    loop: !1,
                    slidesPerView: "auto",
                    pagination: { el: ".swiper-pagination" },
                  }));
            };
          o(), window.addEventListener("resize", o);
        }
      })(),
      (function () {
        var e = document.querySelector(".blog__slider");
        if (e) {
          var t,
            o = function () {
              window.innerWidth > 1220
                ? t && (t.destroy(), (t = null))
                : t ||
                  (t = new Swiper(e, {
                    spaceBetween: 10,
                    loop: !1,
                    slidesPerView: "auto",
                    pagination: { el: ".swiper-pagination", clickable: !0 },
                  }));
            };
          o(), window.addEventListener("resize", o);
        }
      })(),
      document.querySelectorAll(".faq__item").forEach(function (e) {
        e.addEventListener("click", function () {
          e.classList.toggle("open");
        });
      }),
      (function () {
        var e = document.querySelectorAll(".blog-main__tab"),
          t = document.querySelectorAll(".blog-main__tab-content");
        if (e) {
          var o = window.location.href.split("#")[1] || "article";
          document
            .querySelector("[data-show=".concat(o, "]"))
            .classList.add("active"),
            document
              .querySelector("[data-content=".concat(o))
              .classList.add("active"),
            e.forEach(function (o) {
              o.addEventListener("click", function (o) {
                var n = o.currentTarget.getAttribute("data-show");
                e.forEach(function (e) {
                  return e.classList.remove("active");
                }),
                  o.currentTarget.classList.add("active"),
                  t.forEach(function (e) {
                    e.classList.remove("active"),
                      document
                        .querySelector("[data-content=".concat(n))
                        .classList.add("active");
                  });
              });
            });
        }
        document
          .querySelectorAll(".blog-main__video-item")
          .forEach(function (e) {
            var t = e.querySelectorAll(".blog-main__video-source-item"),
              o = e.querySelector("iframe"),
              n = e.querySelector(".video__overlay--poster"),
              r = e.querySelector(".video__overlay--source"),
              i = e.querySelector(".video__overlay--play");
            t.forEach(function (e) {
              e.addEventListener("click", function (e) {
                (o.src =
                  e.currentTarget.getAttribute("data-url") +
                  "?rel=0&autoplay=1"),
                  (n.style.display = "none"),
                  (r.style.display = "none"),
                  (i.style.display = "none");
              });
            });
          });
      })();
  });
})();
