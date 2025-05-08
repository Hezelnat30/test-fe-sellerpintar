import endpoint from "@/constants/endpoint.constant";
import apiInstance from "@/libs/axios/instance";
import { ILogin, IRegister } from "@/types/Auth";
import {
  LoginResponse,
  ProfileResponse,
  RegisterResponse,
} from "@/types/interface";
import { AxiosResponse } from "axios";

const { AUTH } = endpoint;

const authService = {
  register: (payload: IRegister): Promise<AxiosResponse<RegisterResponse>> =>
    apiInstance.post(`${AUTH}/register`, payload),
  login: (payload: ILogin): Promise<AxiosResponse<LoginResponse>> =>
    apiInstance.post(`${AUTH}/login`, payload),
  profile: (token: string): Promise<AxiosResponse<ProfileResponse>> =>
    apiInstance.get(`${AUTH}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default authService;
