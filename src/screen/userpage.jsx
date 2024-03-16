import React, { useState } from "react";
import axios from "axios";
import UserNav from "../Component/UserNav";

export const Userpage = () => {
  const [formData, setFormData] = useState({
    StaffName: "",
    Department: "",
    NumOfStu: "",
    Reason: "",
    From: "",
    To: "",
    Days: "",
    StartDate: "",
    EndDate: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:4040/postdata/create", formData);
      setLoading(false);
      setError("");
      alert("Post data created successfully");
      setFormData({
        StaffName: "",
        Department: "",
        NumOfStu: "",
        Reason: "",
        From: "",
        To: "",
        Days: "",
        StartDate: "",
        EndDate: "",
      });
    } catch (error) {
      setLoading(false);
      setError("Error creating post data");
    }
  };
  return (
    <div>
      <UserNav />
      <div className="flex justify-center items-center h-[90vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded shadow-lg"
        >
          <h2 className="text-2xl mb-4">Create Post Data</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-4 gap-4">
            <div className="mb-4">
              <label htmlFor="StaffName" className="block text-gray-700">
                Staff Name:
              </label>
              <input
                type="text"
                id="StaffName"
                name="StaffName"
                placeholder="<- Staff Name ->"
                value={formData.StaffName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Department" className="block text-gray-700">
                Department:
              </label>
              <input
                type="text"
                id="Department"
                name="Department"
                placeholder="<- Department ->"
                value={formData.Department}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="NumOfStu" className="block text-gray-700">
                Number of Students:
              </label>
              <input
                type="text"
                id="NumOfStu"
                name="NumOfStu"
                placeholder="<- No.of Student ->"
                value={formData.NumOfStu}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Reason" className="block text-gray-700">
                Reason:
              </label>
              <input
                type="text"
                id="Reason"
                name="Reason"
                placeholder="<- Reason ->"
                value={formData.Reason}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="From" className="block text-gray-700">
                From:
              </label>
              <input
                type="text"
                id="From"
                name="From"
                placeholder="<- From place ->"
                value={formData.From}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="To" className="block text-gray-700">
                To:
              </label>
              <input
                type="text"
                id="To"
                name="To"
                placeholder="<- To place ->"
                value={formData.To}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Days" className="block text-gray-700">
                Number of Days:
              </label>
              <input
                type="text"
                id="Days"
                name="Days"
                placeholder="<- Days ->"
                value={formData.Days}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="StartDate" className="block text-gray-700">
                Start Date:
              </label>
              <input
                type="text"
                id="StartDate"
                name="StartDate"
                placeholder="<- Date ->"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={formData.StartDate}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="EndDate" className="block text-gray-700">
                End Date:
              </label>
              <input
                type="text"
                id="EndDate"
                name="EndDate"
                placeholder="<- Date ->"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={formData.EndDate}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-52"
            >
              {loading ? (
                <div className="border-t-4 border-b-4 border-red-300 rounded-full w-8 h-8 animate-spin mx-auto"></div>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
