var quotes = [
  "If I have seen further, it is by standing upon the shoulders of giants. - Issac Newton",
  "Discipline equals freedom. - Jocko Willink",
  "Don't expect to be motivated every day to get out there and make things happen. You won't be. Don’t count on motivation. Count on Discipline. - Jocko Willink",
  "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it. - Jordan Peterson",
  "If you are not willing to be a fool, you can't become a master. - Jordan Peterson",
  "Stop researching every aspect of it and reading all about it and debating the pros and cons of it … Start doing it. - Jocko Willink",
  "The more you practice, the better you get, the more freedom you have to create. - Jocko Willink",
  "Most of us aren't defeated in one decisive battle. We are defeated one tiny, seemingly insignificant surrender at a time that chips away at who we should really be. - Jocko Willink",
  "Thought prisons are the best prisons to get into, because you have the key and you can get out. - Duncan Trussell",
  "True healing is realizing you were never sick in the first place. - Duncan Trussell"
];

var funnyquotes = [
  "Why does crust on pizzas exist and why does everyone pretend it's good - Grant // because its good - Joey & Connor // No it doesn't - Grant",
  "You can actually launder money and make a social critque simultaneously that's what art is. - Duncan Trussell",
  "Crustless gang rise up, crustless gang rise up. Gentlemen I have a dream, that one day you will not be judged for your prefernce of food but for your love of cooking itself. I HAVE A DREAM, that one day the Crustless Gang and the Crust Gang and even the only Crust Gang can sit on the same table in peace. Thank you very much. Crustless Gang Rise Up. - Grant"
]

$("#button").click(function () {
  $("#quotes").text(quotes[Math.floor(Math.random() * 9)]);
});

$("#funnybutton").click(function () {
  $("#quotes").text(funnyquotes[Math.floor(Math.random() * 3)]);
});

var getWallpaper = function () {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 8a4fad9f70ab2c2baf42415ee4ac88e1ebbbd653"
  );
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("https://api.imgur.com/3/album/jvXwfOy/images/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      var wallpaper = result.data[Math.floor(Math.random() * 25)].link;
      document.body.style.backgroundImage = `url(${wallpaper})`;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

getWallpaper();


const logo = document.querySelectorAll('#logo path') 

// console.log(logo)

for(let i = 0; i<logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

// for(let i = 0; i<logo.length; i++) {
//   console.log(`Letter ${1} is ${logo[1].getTotalLength()}`);
// }