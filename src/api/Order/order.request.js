import apiInstance from "../apiInstance";

const saveOrderRequest = async (order) => {
  try {
    const response = await apiInstance.post(`/api/orderNew/`, order);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const orderRequest = {
  saveOrderRequest,
};

export default orderRequest;
