import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ChefModal from "../modal/ChefModal.jsx";
import { addChef } from "../../api/ChefApi.js";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [post, setPost] = useState({
    name: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    addChef(post)
      .then((response) => {
        console.log("Chef berhasil ditambahkan:", response);
        setChefs((prevChef) => [...prevChef, response]);
        console.log("State chef setelah submit:", chefs);
        setOpenForm(false); 
      })
      .catch((error) => {
        console.error("Error adding chef:", error);
      });
  }

  function handleOpenForm() {
    setOpenForm(!openForm);
  }

  useEffect(() => {
    getChefs();
  }, []);

  const getChefs = async () => {
    const response = await axios.get("http://localhost:3000/chef");
    setChefs(response.data);
  };

  const deleteChef = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/chef/delete?id=${id}`);
      getChefs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Chef List</h1>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            onClick={handleOpenForm}
          >
            Add New Chef
          </button>
          {openForm && (
            <ChefModal
              onClose={() => setOpenForm(false)}
              post={post}
              onChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">No</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Instagram</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {chefs.map((chef, index) => (
                <tr key={chef.id} className="border-b">
                  <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-700">{chef.name}</td>
                  <td className="px-4 py-2 text-blue-500 hover:underline">
                    <a
                      href={`https://instagram.com/${chef.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{chef.instagram}
                    </a>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      to={`edit/${chef.id}`}
                      className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600 transition duration-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteChef(chef.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chef;
