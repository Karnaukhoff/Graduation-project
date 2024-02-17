const baseURL = "http://localhost:8090";

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
export async function signUp({ email, password, name, surname, city }) {
    const response = await fetch(
        `${baseURL}/auth/register`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          surname: surname,
          city: city,
          role: "user",
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.status === 500) {
      throw new Error("Сервер не отвечает");
    }
    const user = await response.json();
    return user;
  }
  export async function getAllUsers(){
    const response = await fetch(
        `${baseURL}/user/all`
    );
    if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
      const data = await response.json();
      return data;
}