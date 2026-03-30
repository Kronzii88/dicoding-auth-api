class PasswordHash {
  async hash(password) {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }

  // Biasanya Anda juga akan butuh method ini nantinya untuk login
  async comparePassword(plain, encrypted) {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = PasswordHash;
