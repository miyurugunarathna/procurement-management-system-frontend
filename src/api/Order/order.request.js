import apiInstance from "../apiInstance";

const saveOrderRequest = async (order) => {
  try {
    const response = await apiInstance.post(`/api/orderNew/`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getOrdersforManager = async () => {
  try {
    const response = await apiInstance.get(`/api/orderNew/manager/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteOrderRequest = async (orderID) => {
  try {
    const response = await apiInstance.delete(`/api/orderNew/${orderID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateOrderRequest = async (order, orderID) => {
  try {
    const response = await apiInstance.put(`/api/orderNew/${orderID}`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const orderRequest = {
  saveOrderRequest,
  getOrdersforManager,
  updateOrderRequest,
  deleteOrderRequest,
};

export default orderRequest;
