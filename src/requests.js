//New Get Puzzle
const getPuzzleApi = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch the puzzle");
  }
};

//New Country
const getCountry = async (countryCode) => {
  const response = await fetch("//restcountries.com/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    const countryName = await data.find(
      (country) => country.alpha2Code === countryCode
    );
    return countryName.name;
  } else {
    throw new Error("Unable to fetch the country");
  }
};
//Get Location
const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=58449b7b4ad51c");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get the current location");
  }
};

//Get Current Country
const getCurrentCountry = async ()=>{
  const location = await getLocation()
  const country = await getCountry(location.country)
  return country
}

//EXport Functions
export { getPuzzleApi as default}