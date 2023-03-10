const data = [
  {
    author: 'Susan Smith',
    jobTitle: 'Web Developer',
    description: "I'm baby meggings twee heigh goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoddie, cold-pressed four dollar toast everyday carry",
    avatar: '../images/person-1.jpeg',
  },
  {
    author: 'Anna Johnson',
    jobTitle: 'Web Designer',
    description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    avatar: '../images/person-2.jpeg',
  },
  {
    author: 'Peter Jones',
    jobTitle: 'Intern',
    description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    avatar: '../images/person-3.jpeg',
  },
  {
    author: 'Bill Anderson',
    jobTitle: 'The Boss',
    description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    avatar: '../images/person-4.jpeg',
  },
]

let currPos = 0;

function changeAuthor(pos) {
  document.getElementById("author").innerHTML = data[pos].author;
  document.getElementById("job-title").innerHTML = data[pos].jobTitle;
  document.getElementById("description").innerHTML = data[pos].description;
  document.getElementById("avatar").setAttribute('src', data[pos].avatar);
}

function addEventListener(id, f){
  document.getElementById(id)
    .addEventListener("click", () => {
      currPos = f(currPos);
      changeAuthor(currPos);
    });
}

addEventListener('previous', (pos) => pos - 1 < 0? data.length - 1: pos - 1);
addEventListener('next', (pos) => pos + 1 >= data.length? 0: pos + 1);
addEventListener('surprise', () => Math.floor(Math.random() * data.length));

changeAuthor(currPos);
