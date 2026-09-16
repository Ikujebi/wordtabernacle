import { apiPost } from "./api";

export interface PublicPrayerRequestPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  subject: string;
  message: string;
  category?: "HEALING" | "FINANCIAL_PROVISION" | "FAMILY_MARRIAGE" | "SALVATION" |
             "DELIVERANCE" | "JOB" | "SCHOOL" | "THANKSGIVING" | "OTHER";
  isConfidential?: boolean;
  allowFollowUp?: boolean;
  preferredContactMethod?: string;
}

export function submitPrayerRequest(payload: PublicPrayerRequestPayload) {
  return apiPost<{ id: string }>("/prayer-requests", payload);
}