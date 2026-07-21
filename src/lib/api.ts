export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://api.wordtabernacle.org.ng/api";


export async function submitPrayerRequest(
  payload: unknown
) {

  const response = await fetch(
    `${API_URL}/prayer-requests`,
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
      "Failed to submit prayer request"
    );
  }


  return data;
}