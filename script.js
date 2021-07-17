var quotes = [
  "If I have seen further, it is by standing upon the shoulders of giants. - Issac Newton",
  "Discipline equals freedom. - Jocko Willink",
  "Don't expect to be motivated every day to get out there and make things happen. You won't be. Don’t count on motivation. Count on Discipline. - Jocko Willink",
  "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it. - Jordan Peterson",
  "If you are not willing to be a fool, you can't become a master. - Jordan Peterson",
  "Stop researching every aspect of it and reading all about it and debating the pros and cons of it … Start doing it. - Jocko Willink",
  "The more you practice, the better you get, the more freedom you have to create. - Jocko Willink",
  "Most of us aren't defeated in one decisive battle. We are defeated one tiny, seemingly insignificant surrender at a time that chips away at who we should really be. - Jocko Willink",
];

$("#button").click(function () {
  $("#quotes").text(quotes[Math.floor(Math.random() * 8)]);
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