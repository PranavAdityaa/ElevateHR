import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Header } from '../components';
import { clientsData } from '../data/dummy';

const Customers = () => {
  const { currentMode } = useStateContext();
  const [clients, setClients] = useState(clientsData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    CustomerName: '',
    CustomerEmail: '',
    ProjectName: '',
    Status: 'Active',
    Weeks: '',
    Budget: '',
    Location: '',
  });

  const handleAddClient = () => {
    const newClientWithId = {
      ...newClient,
      CustomerID: clients.length + 1001,
      CustomerImage: clients[0].CustomerImage, // Using default image
      StatusBg: '#8BE78B',
    };
    setClients([...clients, newClientWithId]);
    setIsAddModalOpen(false);
    setNewClient({
      CustomerName: '',
      CustomerEmail: '',
      ProjectName: '',
      Status: 'Active',
      Weeks: '',
      Budget: '',
      Location: '',
    });
  };

  const handleDeleteClient = (customerId) => {
    setClients(clients.filter(client => client.CustomerID !== customerId));
  };

  return (
    <div className={`m-2 md:m-10 mt-4 p-2 md:p-10 ${currentMode === 'Dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-3xl`}>
      <Header title="Customers" />
      
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FiPlus /> Add New Customer
        </button>
      </div>

      {/* Customers Table */}
      <div className={`overflow-x-auto rounded-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <table className="w-full">
          <thead>
            <tr className={`${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Weeks</th>
              <th className="p-4 text-left">Budget</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.CustomerID} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={client.CustomerImage}
                      alt={client.CustomerName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{client.CustomerName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{client.CustomerEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">{client.ProjectName}</td>
                <td className="p-4">
                  <span
                    className="px-2 py-1 rounded-full text-sm"
                    style={{ background: client.StatusBg }}
                  >
                    {client.Status}
                  </span>
                </td>
                <td className="p-4">{client.Weeks}</td>
                <td className="p-4">{client.Budget}</td>
                <td className="p-4">{client.Location}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg">
                      <FiEdit2 />
                    </button>
                    <button 
                      onClick={() => handleDeleteClient(client.CustomerID)}
                      className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-gray-700 rounded-lg"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Customer Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg w-96 ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newClient.CustomerName}
                  onChange={(e) => setNewClient({ ...newClient, CustomerName: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newClient.CustomerEmail}
                  onChange={(e) => setNewClient({ ...newClient, CustomerEmail: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project</label>
                <input
                  type="text"
                  value={newClient.ProjectName}
                  onChange={(e) => setNewClient({ ...newClient, ProjectName: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weeks</label>
                <input
                  type="text"
                  value={newClient.Weeks}
                  onChange={(e) => setNewClient({ ...newClient, Weeks: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget</label>
                <input
                  type="text"
                  value={newClient.Budget}
                  onChange={(e) => setNewClient({ ...newClient, Budget: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  value={newClient.Location}
                  onChange={(e) => setNewClient({ ...newClient, Location: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddClient}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
