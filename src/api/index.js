const KEY = `?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02`;
const URL = `https://api.unsplash.com/photos/`;

let fetchImages = async page => {
  // lay anh tu api per_page = anh / 1 page page = page hien tai
  const res = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(res.errors);
  }

  return data
}

export { fetchImages }