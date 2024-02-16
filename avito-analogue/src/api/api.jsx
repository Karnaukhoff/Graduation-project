const baseURL = " http://localhost:8090";

export async function getAllAds(){
    const response = await fetch(
        `${baseURL}/ads`
    );
    if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
      const data = await response.json();
      return data;
}