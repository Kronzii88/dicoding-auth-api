import RegisterUser from "../../Domains/users/entities/RegisterUser.js";

class AddUserUseCase {
  constructor({ userRepository, passwordHash }) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload) {
    // 1. Validasi payload/input dari request body dengan Entity RegisterUser
    const registerUser = new RegisterUser(useCasePayload);

    // 2. Cek ketersediaan username di database
    await this._userRepository.verifyAvailableUsername(registerUser.username);

    // 3. Lakukan proses hashing pada password
    registerUser.password = await this._passwordHash.hash(
      registerUser.password,
    );

    // 4. Simpan user ke database dan kembalikan hasilnya (biasanya Entity RegisteredUser)
    return this._userRepository.addUser(registerUser);
  }
}

export default AddUserUseCase;
