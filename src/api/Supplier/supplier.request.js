import apiInstance from "../apiInstance";

const saveSupplier = async (supplier) => {
  try {
    const response = await apiInstance.post(`/api/supplier/`, supplier);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getSuppliers = async () => {
  try {
    const response = await apiInstance.get(`/api/supplier/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const supplierRequest = {
  saveSupplier,
  getSuppliers,
};

export default supplierRequest;
