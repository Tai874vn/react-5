import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../store/reducer';
import { useEffect, useState } from 'react';

export default function Form() {
  const dispatch = useDispatch();
  const editingUser = useSelector(state => state.user.editingUser);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();



    if (editingUser) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now().toString() }));
    }

    setFormData({ id: '', name: '', phone: '', email: '' });
  };

  return (
    <div className="border border-black mb-4">
      <div className="bg-gray-800 text-white px-4 py-2 font-semibold">
        Thông tin sinh viên
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4">
        <div>
          <label className="block">Mã SV</label>
          <input
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-black p-1"
            placeholder="Mã SV"
          />
        </div>
        <div>
          <label className="block">Họ tên</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black p-1"
            placeholder="Họ tên"
          />
        </div>
        <div>
          <label className="block">Số điện thoại</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-black p-1"
            placeholder="SĐT"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black p-1"
            placeholder="Email"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 border border-black"
          >
            {editingUser ? 'Cập nhật' : 'Thêm sinh viên'}
          </button>
        </div>
      </form>
    </div>
  );
}
