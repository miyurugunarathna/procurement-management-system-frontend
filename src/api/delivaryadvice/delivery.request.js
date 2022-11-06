import apiInstance from "../apiInstance";

const savedelivery = async (order) => {
  try {
    const response = await apiInstance.post(`/api/deliveryAdvice/`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deletedelivery = async (orderID) => {
  try {
    const response = await apiInstance.delete(`/api/orderNew/${orderID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updatedelivery = async (order, orderID) => {
  try {
    const response = await apiInstance.put(`/api/orderNew/${orderID}`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getdelivery = async () => {
  try {
    const response = await apiInstance.get(`/api/deliveryAdvice/supplier/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const getdeliveryforManager = async () => {
  try {
    const response = await apiInstance.get(`/api/deliveryAdvice/manager`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const deletedeliveryAdvice = async (deliveryID) => {
  try {
    const response = await apiInstance.delete(
      `/api/deliveryAdvice/${deliveryID}`,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updatedeliveryAdvice = async (delivery, deliveryID) => {
  try {
    const response = await apiInstance.put(
      `/api/deliveryAdvice/${deliveryID}`,
      delivery,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getAlldeliveryAdvice = async () => {
  try {
    const response = await apiInstance.get(`/api/deliveryAdvice/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deliveryRequest = {
  savedelivery,
  deletedelivery,
  updatedelivery,
  getdelivery,
  getdeliveryforManager,
  deletedeliveryAdvice,
  updatedeliveryAdvice,
  getAlldeliveryAdvice,
};

export default deliveryRequest;
