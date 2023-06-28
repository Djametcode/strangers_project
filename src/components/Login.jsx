const Login = () => {
  return (
    <form className=" bg-slate-100 flex flex-col gap-2 justify-center basis-[500px] h-[400px] pl-10 pr-10 rounded-xl shadow-md">
      <input
        className=" p-3 rounded-lg focus:outline-none"
        type="text"
        placeholder="Email"
      />
      <input
        className=" p-3 rounded-lg focus:outline-none"
        type="password"
        placeholder="Password"
      />
      <div className=" flex justify-center">
        <button className=" bg-white p-3 rounded-lg shadow-md">Login</button>
      </div>
    </form>
  );
};

export default Login;
