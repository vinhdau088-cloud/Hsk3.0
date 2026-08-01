export function getFavorites() {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("favorites");

  return data ? JSON.parse(data) : [];
}

export function saveFavorite(word) {
  const list = getFavorites();

  const exists = list.find((item) => item.id === word.id);

  if (!exists) {
    list.push(word);
    localStorage.setItem("favorites", JSON.stringify(list));
  }
}

export function removeFavorite(id) {
  const list = getFavorites().filter((item) => item.id !== id);

  localStorage.setItem("favorites", JSON.stringify(list));
}
