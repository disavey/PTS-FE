import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCake = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCakeById();
  }, []);

  const getCakeById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cake/find?id=${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCake = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/cake/update?id=${id}`, {
        name,
        price: parseInt(price), // Convert price to integer
        description,
        imageUrl,
      });
      navigate("/cake"); // Redirect ke halaman daftar kue
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="w-full max-w-md bg-yellow-400 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Edit Kue</h2>
        <form onSubmit={updateCake}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Nama Kue</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan Nama Kue"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Harga</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Masukkan Harga"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Deskripsi</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkan Deskripsi"
              required
              rows="4"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">URL Gambar</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Masukkan URL Gambar"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Update Kue
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCake;
