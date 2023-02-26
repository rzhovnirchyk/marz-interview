import React, { useEffect, useState } from "react";
import { Product } from "../../components/interfaces";
import PageError from "../../components/PageError.tsx/PageError";
import PageSpinner from "../../components/PageSpinner/PageSpinner";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { DATA_STATES, getProductsData } from "../ApiHelper";
import PageWrapper from "../PageWrapper";

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productsData, errorOccured } = await getProductsData();
    setData(productsData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting) {
    content = <PageSpinner />;
  } else if (loadingState === DATA_STATES.loaded) {
    content = <ProductList products={data} />;
  } else {
    content = <PageError message="An error occured fetching the data!" />;
  }

  return <PageWrapper>{content}</PageWrapper>;
};

export default ProductsPage;
