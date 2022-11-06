import apiInstance from "../apiInstance";

const saveProduct = async (product) => {
  try {
    const response = await apiInstance.post(`/api/product/`, product);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteProduct = async (productID) => {
  try {
    const response = await apiInstance.delete(`/api/product/${productID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateProduct = async (product, productID) => {
  try {
    const response = await apiInstance.put(
      `/api/product/${productID}`,
      product,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getProducts = async () => {
  try {
    const response = await apiInstance.get(`/api/product/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getProductsForSupplier = async () => {
  try {
    const response = await apiInstance.get(`/api/product/supplier`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const productRequest = {
  saveProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getProductsForSupplier,
};

export default productRequest;
