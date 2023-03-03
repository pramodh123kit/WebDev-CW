let elements = [
    {
      image: "images/17.jpg",
      description:
        " 1111ipsum dolor sit amet consectetur adipisicing elit. Quae magnamiusto blanditiis laudantium quaerat deserunt non, commodi, nam tempore aliquam, nemo perferendis harum ex. Facere necessitatibus quibusdamlaudantium ad nemo?",
    },
    {
      image: "images/2.jpg",
      description:
        " 222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnamiusto blanditiis laudantium quaerat deserunt non, commodi, nam tempore aliquam, nemo perferendis harum ex. Facere necessitatibus quibusdamlaudantium ad nemo?",
    },
    {
      image: "images/44.jpg",
      description:
        " 333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnamiusto blanditiis laudantium quaerat deserunt non, commodi, nam tempore aliquam, nemo perferendis harum ex. Facere necessitatibus quibusdamlaudantium ad nemo?",
    },
    {
      image: "images/2.jpg",
      description:
        "44444Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnamiusto blanditiis laudantium quaerat deserunt non, commodi, nam tempore aliquam, nemo perferendis harum ex. Facere necessitatibus quibusdamlaudantium ad nemo?",
    },
  ];
  let current = 0;

  function next() {
    document.getElementById("arrow-prev").style.display = "block";
    current++;
    document.getElementById("imageView").src = elements[current].image;
    document.getElementById("description").innerHTML =
      elements[current].description;

    if (current === elements.length - 1) {
      document.getElementById("arrow-next").style.display = "none";
    }
  }
  function previous() {
    document.getElementById("arrow-next").style.display = "block";
    current--;
    document.getElementById("imageView").src = elements[current].image;
    document.getElementById("description").innerHTML =
      elements[current].description;

    if (current === 0) {
      document.getElementById("arrow-prev").style.display = "none";
    }
  }

  function onLoadFun() {
    document.getElementById("imageView").src = elements[0].image;
    document.getElementById("description").innerHTML =
      elements[0].description;

    document.getElementById("arrow-prev").style.display = "none";
  }