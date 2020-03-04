export class User {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;

  constructor(user: {
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: string;
  }) {
    this.name = user.name || "";
    this.email = user.email || "";
    this.phone = user.phone || "";
    this.position = user.position || "";
    this.photo = user.phone || "";
  }
}
