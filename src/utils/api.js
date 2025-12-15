const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

/**
 * 공통 API
 * @param {string} endpoint // 하위 주소
 * @param {object} options  // fetch 옵션 (method, headers, body, ...)
 */
export async function fetchApi(endpoint, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    // Authorization
    // "Authorization": `Bearer ${localStorage.getItem("token") || ""}`
  };

  const config = {
    headers: { ...headers, ...(options.headers || {}) },
    ...options,
  };

  /* JSON 타입 확인 */
  if (config.body && typeof config.body === "object") {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(BASE_URL + endpoint, config);

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const err = new Error(errData.message || "API 요청 실패");
      err.status = response.status;
      err.data = errData;
      throw err;
    }

    // JSON 응답 반환
    return await response.json();
  } catch (e) {
    console.error("[API Error]", e);
    throw e;
  }
}
