import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            SignUp
            <span className="text-blue-500 ml-3">ChatApp</span>
          </h1>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">FullName</span>
              </label>
              <input
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Enter FullName"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Enter Password"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Confirm Password"
              />
            </div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mb-2 mt-2 inline-block"
            >
              already have an account?
            </a>
            <GenderCheckBox />
            <div>
              <button className="btn btn-block btn-sm mt-2">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
