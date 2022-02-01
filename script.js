const firstNames = ["scout", "heavy", "pyro", "enginner", "demoman", "medic", "sniper", "spy", "dustbowl", "2fort", "turbine", "goldrush", "upward", "borneo", "gorge", "dust2", "freespace", "bigcity", "atomic", "css", "tf2", "gmod", "portal", "hydro", "saxton", "saxtonhale", "misspauling", "odessa", "barney", "adrian", "gordon", "demoknight"];

const secondNames = ["pro", "videos", "reuploads", "fan", "guy"];

const thirdNames = ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];

const getRandomName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}${secondNames[Math.floor(Math.random() * secondNames.length)]}${thirdNames[Math.floor(Math.random() * thirdNames.length)]};`

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

console.log(getRandomName);