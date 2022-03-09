module.exports = class UserDto {
  email;
  userId;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.userId =model.id;
    this.isActivated = model.isActivated;
  }

}