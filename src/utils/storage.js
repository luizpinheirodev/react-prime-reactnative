import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getMovieSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

export async function saveMovie(key, newMovie) {
  let moviesStorage = await getMovieSave(key);

  const hasMovie = moviesStorage.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log("Filme ja existe na lista");
    return;
  }

  moviesStorage.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStorage));
  console.log("FILME SALVO COM SUCESSO");
}

export async function deleteMovie(id) {
  let moviesStorage = await getMovieSave("@primereact");

  let myMovies = moviesStorage.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@primereact", JSON.stringify(myMovies));
  console.log("FILME DELETADO COM SUCESSO");
  return myMovies;
}

export async function hasMovie(movie) {
  let moviesStorage = await getMovieSave("@primereact");

  let hasMovie = moviesStorage.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }
  return false;
}
