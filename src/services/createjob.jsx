import axios from 'axios';

const baseUrl = "https://64c12368fa35860baea00c4d.mockapi.io";

export const fetchJob = async () => {
    const { data } = await axios.get(baseUrl + "/createJob");
    return data;
};

export const fetchJobByID = async (id) => {
    const { data } = await axios.get(baseUrl + "/createJob/" + id);
    return data;
};

export const postJob = async (payload) => {
    const { data } = await axios.post(baseUrl + "/createJob", payload);
    return data;
};

export const deleteJob = async (payload) => {
    const { data } = await axios.delete(baseUrl + "/createJob/" + payload);
    return data;
};

export const updateJob = async (id, payload) => {
    const { data } = await axios.put(baseUrl + "/createJob/" + id, payload);
    return data;
};