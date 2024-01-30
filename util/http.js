import axios from "axios";
import { API_URL } from "@env";

const BACKEND_URL = API_URL;

export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export async function updateExpenseRequest(id, expenseData) {
  await axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export async function deleteExpenseRequest(id) {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
