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

class AdminUser extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

class CommonUser extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

const userType = new AdminUser("Admin", "administrator", 12345);
const userType2 = new CommonUser("User", "user", 6789);
