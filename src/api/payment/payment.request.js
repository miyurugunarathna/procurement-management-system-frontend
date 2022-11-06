import apiInstance from "../apiInstance";

const savePayment = async (order) => {
  try {
    const response = await apiInstance.post(`/api/payment/`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deletePayment = async (paymentId) => {
  try {
    const response = await apiInstance.delete(`/api/payment/${paymentId}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updatePayment = async (payment, paymentId) => {
  try {
    const response = await apiInstance.put(
      `/api/payment/${paymentId}`,
      payment,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getPayment = async () => {
  try {
    const response = await apiInstance.get(`/api/payment/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const getPaymentByManagerId = async () => {
  try {
    const response = await apiInstance.get(`/api/payment/manager`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const paymentRequest = {
  savePayment,
  deletePayment,
  updatePayment,
  getPayment,
  getPaymentByManagerId,
};

export default paymentRequest;
