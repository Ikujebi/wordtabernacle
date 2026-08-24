export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://api.wordtabernacle.org.ng";



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

export async function submitPrayerRequest(payload: PublicPrayerRequestPayload) {
  const response = await fetch(`${API_URL}/prayer-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit prayer request");
  }

  return data;
}





// CONTACT MESSAGE
export async function submitContactMessage(
  payload: unknown
) {

  const response = await fetch(
    `${API_URL}/contact`,
    {
      method:"POST",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify(payload),
    }
  );


  const data = await response.json();


  if(!response.ok){

    throw new Error(
      data.message ||
      "Failed to submit contact message"
    );

  }


  return data;
}