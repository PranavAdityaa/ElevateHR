import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { FiPlus } from 'react-icons/fi';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';

import { Header } from '../components';

const Kanban = () => {
  const { currentMode } = useStateContext();
  const [tasks, setTasks] = useState(kanbanData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    Title: '',
    Status: 'Open',
    Summary: '',
    Type: 'Story',
    Priority: 'Low',
    Tags: '',
    Estimate: '',
    Assignee: '',
  });

  const handleAddTask = () => {
    const newTaskWithId = {
      ...newTask,
      Id: tasks.length + 1,
      RankId: 1,
      Color: '#02897B',
      ClassName: `e-${newTask.Type.toLowerCase()}, e-${newTask.Priority.toLowerCase()}, e-${newTask.Assignee.toLowerCase().replace(' ', '-')}`,
    };
    setTasks([...tasks, newTaskWithId]);
    setIsAddModalOpen(false);
    setNewTask({
      Title: '',
      Status: 'Open',
      Summary: '',
      Type: 'Story',
      Priority: 'Low',
      Tags: '',
      Estimate: '',
      Assignee: '',
    });
  };

  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 ${currentMode === 'Dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-3xl`}>
    <Header category="App" title="Kanban" />
      
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FiPlus /> Add New Task
        </button>
      </div>

    <KanbanComponent
      id="kanban"
      keyField="Status"
        dataSource={tasks}
        cardSettings={{ contentField: "Summary", headerField: "Title" }}
    >
      <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
      </ColumnsDirective>
    </KanbanComponent>

      {/* Add Task Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg w-96 ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={newTask.Title}
                  onChange={(e) => setNewTask({ ...newTask, Title: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Summary</label>
                <textarea
                  value={newTask.Summary}
                  onChange={(e) => setNewTask({ ...newTask, Summary: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                  rows="3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={newTask.Type}
                  onChange={(e) => setNewTask({ ...newTask, Type: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <option value="Story">Story</option>
                  <option value="Bug">Bug</option>
                  <option value="Improvement">Improvement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Priority</label>
                <select
                  value={newTask.Priority}
                  onChange={(e) => setNewTask({ ...newTask, Priority: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Release Breaker">Release Breaker</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <input
                  type="text"
                  value={newTask.Tags}
                  onChange={(e) => setNewTask({ ...newTask, Tags: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                  placeholder="Comma separated tags"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Estimate (hours)</label>
                <input
                  type="number"
                  value={newTask.Estimate}
                  onChange={(e) => setNewTask({ ...newTask, Estimate: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    currentMode === 'Dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Assignee</label>
                <input
                  type="text"
                  value={newTask.Assignee}
                  onChange={(e) => setNewTask({ ...newTask, Assignee: e.target.value })}
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
                  onClick={handleAddTask}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
);
};

export default Kanban;
