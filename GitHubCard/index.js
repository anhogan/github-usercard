/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardHeader = document.querySelector('.cards');
console.log(cardHeader);

axios.get('https://api.github.com/users/anhogan')
  .then(user => {
      let newUser = createUser(user);
      cardHeader.append(newUser);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const friendsArray = ["tetondan", "dustinmyers", "bigknell", "agyin3", "nathandrewts"];

friendsArray.forEach(friend => {
  axios.get(`https://api.github.com/users/${friend}`)
    .then(username => {
      let newFriend = createUser(username);
      cardHeader.append(newFriend);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createUser(user) {
  const cardDiv = document.createElement('div');
  const image = document.createElement('img');
  const infoDiv = document.createElement('div');
  const header = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  cardDiv.classList.add("card");
  infoDiv.classList.add("card-info");
  header.classList.add("name");
  username.classList.add("username");

  image.src = user.avatar_url;
  link.href = user.html_url;

  header.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  profile.textContent = `Profile: ${link}`;
  link.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  infoDiv.append(header);
  infoDiv.append(username);
  infoDiv.append(location);
  infoDiv.append(profile);
  infoDiv.append(followers);
  infoDiv.append(following);
  infoDiv.append(bio);

  cardDiv.append(image);
  cardDiv.append(infoDiv);

  return cardDiv;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
