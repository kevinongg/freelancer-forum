/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// write a function that returns a freelancer object with a randomly
// generated name, occupation, and rate
const generateRandom = () => {
  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomOcc = Math.floor(Math.random() * OCCUPATIONS.length);

  //write a function to get a random rate
  const getRandomRate = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomRate = getRandomRate(PRICE_RANGE.min, PRICE_RANGE.max);

  //make an object and return it
  const freelancer = {
    name: NAMES[randomName],
    occupation: OCCUPATIONS[randomOcc],
    rate: randomRate,
  };
  return freelancer;
};

// create an array loop through array of NUM_FREELANCERS and
// push previous function to array
const data = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  data.push(generateRandom());
}

// write a function that loops through all the rates of freelancers
// and returns the average
const getAverageRate = () => {
  const total = data.reduce((sum, data) => sum + data.rate, 0);
  return total / data.length;
};

const freelancerAvgRate = getAverageRate();

// write a component function with name, occupation, rate HTML. append,
// then return it
const singleFreelancer = (freelancer) => {
  const $div = document.createElement(`div`);
  $div.className = `freelancer`;
  const $name = document.createElement(`div`);
  $name.textContent = freelancer.name;
  const $occupation = document.createElement(`div`);
  $occupation.textContent = freelancer.occupation;
  const $rate = document.createElement(`div`);
  $rate.textContent = freelancer.rate;
  $div.appendChild($name);
  $div.appendChild($occupation);
  $div.appendChild($rate);
  return $div;
};

// write a component function for an array of freelancers. create an
// article to place inside, loop it, create a variable to store previous
// function, then append it to article
const allFreelancers = (data) => {
  const $table = document.createElement(`table`);
  $table.className = `freelancers`;

  for (const freelancer of data) {
    const storedFreelancer = singleFreelancer(freelancer);
    $table.appendChild(storedFreelancer);
  }
  return $table;
};

// write a component function to represent the average rate of all
// freelancers and return it
const averageRateAllFreelancers = () => {
  const $p = document.createElement(`p`);
  $p.innerText = `The average rate is ${freelancerAvgRate}.`;
  return $p;
};

// render
const render = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = ``;
  $app.appendChild(averageRateAllFreelancers());
  $app.appendChild(allFreelancers(data));
};
render();

// <tbody id="FreelancerRows"></tbody>
// `;`
// $app.querySelector("#FreelancerRows").replaceWith(allFreelancers(data));
