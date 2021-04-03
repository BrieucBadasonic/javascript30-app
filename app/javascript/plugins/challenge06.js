const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = []
  fetch(endpoint)
    .then(blob => blob.json())
    .then((data) => cities.push(...data))

function findMatches(wordToMatch) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function callback(search, cities) {
  const suggestions = document.querySelector(".suggestions")
  const matchArray = findMatches(this.value)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityname = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const statename = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
      <span class="name">${cityname}, ${statename}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join('')
  suggestions.innerHTML = html
}

function challenge06() {
  const search = document.querySelector(".search")
  if (search) {
    search.addEventListener("keyup", callback)
    search.addEventListener("change", callback)
  }
}

export { challenge06 };
