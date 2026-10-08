function Register() {
  return (
    <div className="container py-5">

      <h2>Register</h2>

      <div className="col-md-6 mx-auto">

        <input
          className="form-control mb-3"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-dark w-100">
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;