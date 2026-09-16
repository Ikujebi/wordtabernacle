import { apiPost } from "./api";

export interface SubscribeToBlogPayload {
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface SubscribeToBlogResponse {
  id: string;
  message?: string;
}

export function subscribeToBlog(payload: SubscribeToBlogPayload) {
  return apiPost<SubscribeToBlogResponse>("/subscribers", payload); // explicit generic — fixes the "unknown" error
}