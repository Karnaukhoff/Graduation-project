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
  export async function logIn({ email, password }) {
    const response = await fetch(
        `${baseURL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
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
export async function getAd(id){
    const response = await fetch(
        `${baseURL}/ads/${id}`
    );
    if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
      const ad = await response.json();
      return ad;
}
export async function getUser(id){
  const response = await fetch(
      `${baseURL}/user/${id}`
  );
  if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const user = await response.json();
    return user;
}