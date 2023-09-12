const ForgotPassword = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] p-8 text-[#2F3F50]">
        <div className="my-8 space-y-6">
          <h2 className="text-2xl">My account</h2>
          <h3 className="text-lg">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </h3>
          <form action="" className=" md:w-[60%] lg:w-1/2">
            <label htmlFor="reset-pswd" className="font-semibold">
              Username or email
            </label>
            <br />
            <input
              type="text"
              id="reset-pswd"
              className="w-full border outline-none p-3 my-3"
            />
            <br />
            <button
              type="button"
              className="bg-[#076FB3] rounded-full text-white px-2 py-3 font-medium w-[40%] lg:w-1/3"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
