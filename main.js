const section = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1661565882777-5c132e11167f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80 ",
  },
  {
    title: "Section 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1661630803143-de2704595708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
  {
    title: "Section 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1653579636217-0a062a1390ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Section 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1661637051124-15a46f74f30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Section 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1661654758820-5198c5d118de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Section 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1661630804560-4d87c2f6735a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Section 7",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const container = document.querySelector(".container");

container.innerHTML = section
  .map(({ title, content, img }) => {
    return `
        <div class="card">
            <div class="card-image">
                <img src="${img}" alt="${title}" width="100%" height="100%">
            </div>
            <div class="card-content">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        </div>
    `;
  })
  .join("");

const cards = document.querySelectorAll(".card");

const checkCards = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  cards.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll", checkCards);
checkCards();
