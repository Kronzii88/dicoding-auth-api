class PasswordHash {
  async hash(password) {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }

  // Siapkan juga method ini untuk fitur login nantinya
  async comparePassword(plain, encrypted) {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }
}

// Ubah baris ini menggunakan sintaks ES Modules
export default PasswordHash;
