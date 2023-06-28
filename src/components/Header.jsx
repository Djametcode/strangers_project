import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className=" bg-slate-400 h-20 flex justify-start items-center">
      <h1 className=" text-3xl pl-5">Strangers Project</h1>
      <div className=" absolute right-5">
        <ul className=" flex gap-3 text-2xl">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
