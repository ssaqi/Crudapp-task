import axios from 'axios';

// For emulator use 10.0.2.2 instead of localhost 
// const BASE_URL = 'http://192.168.0.105/api/items.php';
const BASE_URL = 'http://192.168.10.9/api/items.php';  


export const getItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addItem = async (name, description) => {
  const formData = new FormData();
  formData.append("action", "add");
  formData.append("name", name);
  formData.append("description", description);
  await axios.post(BASE_URL, formData);
};

export const updateItem = async (id, name, description) => {
  const formData = new FormData();
  formData.append("action", "update");
  formData.append("id", id);
  formData.append("name", name);
  formData.append("description", description);
  await axios.post(BASE_URL, formData);
};

export const deleteItem = async (id) => {
  const formData = new FormData();
  formData.append("action", "delete");
  formData.append("id", id);
  await axios.post(BASE_URL, formData);
};
