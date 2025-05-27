import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Poc1 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_BASE_URL}/use/update/${editId}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/use/insert`, formData);
      }
      setFormData({ name: "", email: "" });
      setEditId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/use/delete/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          User Management
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className={`w-full py-2 text-white font-semibold rounded-lg transition duration-300 ${
                editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {editId ? "Update User" : "Add User"}
            </button>
          </div>
        </form>

        {/* User List */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">User List</h3>
          {users.length === 0 ? (
            <p className="text-gray-500 text-sm">No users found.</p>
          ) : (
            <ul className="space-y-3">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-4 rounded-lg shadow-sm gap-2"
                >
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex justify-center sm:justify-end gap-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Poc1;
