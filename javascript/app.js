document
    .querySelectorAll('.top_naivgation li a[href^="#"]')
    .forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });


/*

const links = document.querySelectorAll(".page-header ul a");
console.log(links)

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  console.log(href)
  const offsetTop = document.querySelector(href).offsetTop;
  console.log(offsetTop)

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}*/