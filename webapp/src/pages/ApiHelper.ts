import axios from "axios";
import { Order, OrderData, Product } from "../components/interfaces";

const DATA_STATES = {
  waiting: "WAITING",
  loaded: "LOADED",
  error: "ERROR",
};

const INPIPELINE_URL = "/api/orders/inpipeline";

const getInPipelineData = async () => {
  const orderData: OrderData = {
    Queued: [],
    InProgress: [],
    QA: [],
  };
  let errorOccured = false;
  try {
    const response = await axios.get(INPIPELINE_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((order: Order) => {
        orderData[order.OrderStatus as keyof OrderData].push(order);
      });
    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { orderData, errorOccured };
};

const UPDATE_STATUS_URL = "/api/orders/update_status";

const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
  const updatedOrder = { ...order, OrderStatus: newOrderStatus };
  let orderStatusUpdated = false;
  try {
    const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
    if (response?.status === 200) orderStatusUpdated = true;
    else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
  }
  return orderStatusUpdated;
};

const PRODUCTS_URL = "/api/products/?ProductStatus=Active";

const getProductsData = async () => {
  let productsData: Product[] = [];
  let errorOccured = false;
  try {
    const response = await axios.get(PRODUCTS_URL);
    if (response?.status === 200) {
      const { data } = response;
      productsData = data.data;
    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { productsData, errorOccured };
};

export {
  getInPipelineData,
  INPIPELINE_URL,
  updateOrderStatus,
  UPDATE_STATUS_URL,
  getProductsData,
  PRODUCTS_URL,
  DATA_STATES,
};