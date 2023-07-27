import { get, post, put, remove } from "./api";

export const supplierEndpoints = {
    suppliers: () => post<any>("/Fornecedor"),
    create: (params: any) => post("/Fornecedor/", params),
    update: (id: string, params: any) => put(`/Fornecedor/${id}`, params),
    remove: (id: string) => remove(`/Fornecedor/${id}`),
};

export const productEndpoints = {
    products: () => post<any>("/Produto"), // MOCKADO
    create: (params: any) => post("/Produto/", params),
    update: (id: string, params: any) => put(`/Produto/${id}`, params),
    remove: (id: string) => remove(`/Produto/${id}`), // MOCKADO
};

export const orderEndpoints = {
    orders: () => post<any>("/Pedido"), // MOCKADO
    create: (params: any) => post("/Pedido/", params),
    update: (id: string, params: any) => put(`/Pedido/${id}`, params),
    remove: (id: string) => remove(`/Pedido/${id}`), // MOCKADO
    ordersBySupplier: (id: string) => get(`/​Pedido​/fornecedor​/${id}`) // MOCKADO
};