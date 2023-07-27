import React from "react";
import { toast, ToastContainer as ReactToastContainer } from "react-toastify";
import styled from "styled-components";

export const CustomToastContainer: React.FC = ({ children }: any) => (
  <ReactToastContainer
    position={toast.POSITION.BOTTOM_RIGHT}
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss={true}
    draggable={true}
    pauseOnHover={true}
  />
);
