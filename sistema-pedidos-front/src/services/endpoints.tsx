import { get, post, put, remove } from "./api";

export const supplierEndpoints = {
    suppliers: () => get<any>("/Fornecedor"),
    supplier: (id: string) => get<any>(`/Fornecedor/${id}`),
    create: (params: any) => post("/Fornecedor/", params),
    update: (id: string, params: any) => put(`/Fornecedor/${id}`, params),
    remove: (id: string) => remove(`/Fornecedor/${id}`),
};

export const productEndpoints = {
    products: () => get<any>("/Produto"), 
    product: (id: string) => get<any>(`/Produto/${id}`), 
    create: (params: any) => post("/Produto/", params),
    update: (id: string, params: any) => put(`/Produto/${id}`, params),
    remove: (id: string) => remove(`/Produto/${id}`), 
    productsBySupplie: (id: string) => get(`/Produto/fornecedor/${id}`)
};

export const orderEndpoints = {
    orders: () => get<any>("/Pedido"), 
    create: (params: any) => post("/Pedido/", params),
    update: (id: string, params: any) => put(`/Pedido/${id}`, params),
    remove: (id: string) => remove(`/Pedido/${id}`),
    ordersBySupplier: (id: string) => get(`/Pedido/fornecedor/${id}`)
};