import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbLockFilled, TbLockOpen2 } from "react-icons/tb";
import { BarChart, Bar, CartesianGrid } from "recharts";

const users = [
  {
    name: "Clare, Alex",
    email: "a_clare42@gmail.com",
    role: "N/A",
    lastSeen: "5 minutes ago",
    active: true,
  },
  {
    name: "Morrison, Jim",
    email: "dmtimer9@dealyaari.com",
    role: "CFO, Meta Platforms, Inc.",
    lastSeen: "less than a minute ago",
    active: true,
  },
  {
    name: "Zappa, Frank",
    email: "zappa_f@citybank.com",
    role: "Architect, Meta Platforms, Inc.",
    lastSeen: "less than a minute ago",
    active: true,
  },
];

const Home = () => {
  const [selected, setSelected] = useState([]);
  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 278 },
    { name: "May", uv: 189 },
    { name: "Jun", uv: 239 },
  ];

  // Toggle single user
  const toggleSelect = (email) => {
    setSelected((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  // Toggle all users
  const toggleSelectAll = () => {
    if (selected.length === users.length) {
      setSelected([]);
    } else {
      setSelected(users.map((u) => u.email));
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl">
      {/* Actions */}
      <div className="flex items-center gap-2 mb-3">
        <button className="font-semibold text-blue-400 border-blue-400 border px-4 py-2 flex items-center gap-1 rounded-md cursor-pointer hover:bg-blue-50 transition">
          <TbLockFilled /> Block
        </button>
        <button className="text-blue-400 border font-semibold border-blue-400 p-[11px] rounded-md cursor-pointer hover:bg-blue-50 transition">
          <TbLockOpen2 />
        </button>
        <button className="text-red-500 border font-semibold border-red-500 p-[11px] rounded-md cursor-pointer hover:bg-red-50 transition">
          <RiDeleteBin5Fill />
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full table-auto text-sm text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="p-2 ">
              <input
                type="checkbox"
                className="accent-blue-500"
                checked={selected.length === users.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold flex items-center gap-2">
              Email <FaArrowDown className="text-gray-400" />
            </th>
            <th className="p-2 font-semibold">Last seen</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-200${
                !user.active ? " text-gray-400 line-through" : ""
              }`}
            >
              <td className="p-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={selected.includes(user.email)}
                  onChange={() => toggleSelect(user.email)}
                />
              </td>
              <td className="p-2">
                <div>{user.name}</div>
                <div className="text-xs text-gray-500">{user.role}</div>
              </td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 relative group">
                {user.lastSeen}
                <BarChart width={70} height={30} data={data}>
                  <CartesianGrid stroke="" strokeDasharray=" " />
                  <Bar dataKey="uv" fill="#8ac8ff" barSize={8} />
                </BarChart>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
