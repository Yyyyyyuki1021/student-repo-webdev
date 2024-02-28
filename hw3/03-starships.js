const fetchData = async (url) => {
  // REtrieve the data from the API

  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      starships = data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData("https://swapi.dev/api/starships/");

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line

  container.classList.add("spaceship");
  container.innerHTML = `
  <div class="spaceship-info">
    <div class="info_left">
      <h3>${spaceship.name}</h3>
      <p>${spaceship.manufacturer}</p>
    </div>
    <div class="info_right">
      <h3>${spaceship.cost_in_credits} credits</h3>
    </div>
  </div>
  
  <div class="spaceship-stats">
    <div class="stat">
      <h3>${spaceship.max_atmosphering_speed}</h3>
      <p>Max atmoshering speed</p>
    </div>
    <div class="divider"></div>
    <div class="stat">
      <h3>${spaceship.cargo_capacity}</h3>
      <p>Cargo capacity</p>
    </div>
  </div>
  `;

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  return input.filter((ship) => {
    const crewNumber = parseInt(ship.crew);

    const passengerNumber = parseInt(ship.passengers);

    return crewNumber > 1 && passengerNumber < 10 && passengerNumber >= 0;
  });
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  var totalCost = 0;

  for (const ship in input) {
    const cost = parseInt(input[ship].cost_in_credits);
    if (!isNaN(cost)) {
      totalCost += cost;
      console.log(cost);
    }
  }

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
