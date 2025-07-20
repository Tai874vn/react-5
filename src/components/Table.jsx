import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setEditingUser } from '../store/reducer';

export default function UserTable({ search }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="w-full border border-black">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="border border-black p-2">Mã SV</th>
          <th className="border border-black p-2">Họ tên</th>
          <th className="border border-black p-2">Số điện thoại</th>
          <th className="border border-black p-2">Email</th>
          <th className="border border-black p-2">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map(user => (
          <tr key={user.id}>
            <td className="border border-black p-2">{user.id}</td>
            <td className="border border-black p-2">{user.name}</td>
            <td className="border border-black p-2">{user.phone}</td>
            <td className="border border-black p-2">{user.email}</td>
            <td className="border border-black p-2 space-x-2">
              <button
                onClick={() => dispatch(setEditingUser(user))}
                className="border border-black px-2"
              >
                Sửa
              </button>
              <button
                onClick={() => dispatch(deleteUser(user.id))}
                className="border border-black px-2"
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
