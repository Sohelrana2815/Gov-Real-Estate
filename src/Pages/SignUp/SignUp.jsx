import { useForm } from "react-hook-form";
import signUpBackgroundImg from "../../assets/Banner/banner1.jpg";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoURL, email, password } = data;
    createNewUser(email, password).then((result) => {
      console.log(result.user);

      updateUserProfile(name, photoURL).then(() => {
        console.log("UpdateProfile successfully");
        alert("UpdateProfile successfully");
      });
    });
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${signUpBackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>{" "}
        {/* Optional overlay for better contrast */}
        <div className="hero-content flex-col w-full justify-center items-center">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Sign up
                  </span>
                </label>
              </div>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Full Name"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              {/* photoURL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL")}
                  placeholder="PhotoURL"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#1563DF] text-white text-base rounded-full"
                >
                  Sign up
                </button>
              </div>
              <p className="text-center mt-3">
                Do not have have an account?{" "}
                <Link to="/login" className="underline text-[#1563DF] ">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
