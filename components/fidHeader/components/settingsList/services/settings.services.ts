import apiClient from "~utils/apiClient";

export const logout = () => {
    return apiClient.post("/authentication/logout");
};
export const deleteClient = () => {
    return apiClient.delete("/clients");
}