class Songs {
  constructor(image ,title, duration, album, artist, category) {
    this.id = Date.now();
    this.image = image;
    this.title = title;
    this.duration = duration;
    this.album = album;
    this.artist = artist;
    this.category = category;
  }
}

class UI {
  static displaySongs() {
    const storedSongs = Store.getSongs();
    storedSongs.forEach((song) => UI.addSongsToList(song)); //Recorre el array de canciones y las muestra en la pagina
  }

  static addSongsToList(song) {
    const SONGLIST_SELECTOR = document.querySelector("#songList");
    const row = document.createElement("tr");
    row.id = song.id;
    row.innerHTML = `
    <td class="border-top-0">${song.id}</td>
    <td><img src="${song.image}" width="40px" height="40px"></td>
    <td>${song.title}</td>
    <td>${song.duration}</td>
    <td>${song.album}</td>
    <td>${song.artist}</td>
    <td>${song.category}</td>
    `;
    SONGLIST_SELECTOR.append(row);
    //Añadir después de <td>${song.category}</td> botones para eliminar, destacar y editar canción
  }
}

class Store {
  static getSongs() {
    //Método estatico para que const storedSongs = Store.getSongs pueda acceder
    let songs;
    if (localStorage.getItem("songs") === null) {
      songs = [];
    } else {
      songs = JSON.parse(localStorage.getItem("songs"));
    }
    return songs;
  }

  static addSongToLS(song) {
    const songs = Store.getSongs();
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
  }
}

  document.addEventListener("DOMContentLoaded", UI.displaySongs);

const FORM_SELECTOR = document.querySelector("#song-form");
FORM_SELECTOR.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = document.querySelector("#songImage").value;
  const title = document.querySelector("#songTtile").value;
  const duration = document.querySelector("#songDuration").value;
  const album = document.querySelector("#songAlbum").value;
  const artist = document.querySelector("#songArtist").value;
  const category = document.querySelector("#songCategory").value;

  const song = new Songs(image, title, duration, album, artist, category);

  UI.addSongsToList(song);

  Store.addSongToLS(song);
});
