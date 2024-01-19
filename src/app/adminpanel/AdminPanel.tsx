import React, { useState } from "react";

body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

h2 {
  color: #007bff;
}

div {
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Kullanıcı listesi stil */
ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #f1f1f1;
}

li:last-child {
  margin-bottom: 0;
}

interface User {
  id: number;
  phone: string;
  password: string;
  name: string;
  department: string;
  faculty: string;
  level: string;
}

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name: "",
    department: "",
    faculty: "",
    level: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    const newUser: User = {
      id: users.length + 1,
      ...formData,
    };

    setUsers([...users, newUser]);
    setFormData({
      phone: "",
      password: "",
      name: "",
      department: "",
      faculty: "",
      level: "",
    });
  };

  return (
    <div>
      <h2>Admin Paneli</h2>
      <div>
        <h3>Yeni Kullanıcı Ekle</h3>
        <form>
          <label>
            Telefon No:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Şifre:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            İsim:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Bölüm:
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Fakülte:
            <input
              type="text"
              name="faculty"
              value={formData.faculty}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Seviye:
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
            >
              <option value="">Seçiniz</option>
              <option value="1">Akademisyen</option>
              <option value="2">Fakülte Kurulu</option>
            </select>
          </label>
          <br />
          <button type="button" onClick={handleAddUser}>
            Yeni Kullanıcı Ekle
          </button>
        </form>
      </div>

      <div>
        <h3>Kullanıcı Listesi</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.phone} - {user.department} - {user.level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
