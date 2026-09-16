import { apiPost } from "./api";

export interface SubmitContactPayload {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

export interface SubmitContactResponse {
  id: string;
  message?: string;
}

export function submitContactMessage(payload: SubmitContactPayload) {
  return apiPost<SubmitContactResponse>("/contact", payload);
}