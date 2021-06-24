class User {
  constructor(userName, role, password) {
    this.userName = userName;
    this.role = role;
    this.password = password;
  }

  static redirectUser() {
    if (this.role === "administrator") {
      window.location.href = "#";
    } else {
      window.location.href = "#";
    }
  }
}

class Admin extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

class CommonUser extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

const userType = new Admin("Admin", "administrator", 12345);
const userType2 = new CommonUser("User", "user", 6789);



  const TITLE_SELECTOR = document.querySelector("#songTtile");
  const DURATION_SELECTOR = document.querySelector("#songDuration");
  const ALBUM_SELECTOR = document.querySelector("#songAlbum");
  const ARTIST_SELECTOR = document.querySelector("#songArtist");
  const CATEGORY_SELECTOR = document.querySelector("#songCategory");
  const BTN_FORM_SELECTOR = document.querySelector("#btn-form-properties");
  const HIGHLIGHT_SONG_SELECTOR = document.querySelector("#songHighlighted");
  BTN_FORM_SELECTOR.disabled = true;

  TITLE_SELECTOR.addEventListener("change", formSongValidations);
  DURATION_SELECTOR.addEventListener("change", formSongValidations);
  ALBUM_SELECTOR.addEventListener("change", formSongValidations);
  ARTIST_SELECTOR.addEventListener("change", formSongValidations);
  CATEGORY_SELECTOR.addEventListener("change", formSongValidations);
  HIGHLIGHT_SONG_SELECTOR.addEventListener("change", formSongValidations);

  function formSongValidations() {
    if (
      document.querySelector("#songTtile").value === "" ||
      document.querySelector("#songDuration").value === "" ||
      document.querySelector("#songAlbum").value === "" ||
      document.querySelector("#songArtist").value === "" ||
      document.querySelector("#songCategory").value === "" ||
      document.querySelector("#songHighlighted").value === ""
    ) {
      BTN_FORM_SELECTOR.disabled = true;
    } else {
      BTN_FORM_SELECTOR.disabled = false;
    }
  }