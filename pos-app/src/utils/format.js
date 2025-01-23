// 날짜 포맷 모듈
export const formatTotalDate = (dateString) => {
  const date = new Date(dateString)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const week = new Intl.DateTimeFormat("ko-KR", "short").format(new Date(date));

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} (${week}) ${hours}:${minutes}:${seconds}`;
}
export const formatDate = (dateString) => {
  const date = new Date(dateString)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
export const formatHour = (dateString) => {
  const date = new Date(dateString)

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
export const formatDateWithHour = (dateString) => {
  const date = new Date(dateString)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 요일 포맷
export const getDayOfWeek = (date) => {
  const options = {
    weekday: "long"
  }; // 요일을 긴 형식으로
  return new Intl.DateTimeFormat("ko-KR", options).format(new Date(date));
};
// 데이터 용량 단위
export const byteToUnit = (byte) => {
  const unitMultiple = {
    "B": 1,
    "KB": 1024,
    "MB": 1024 * 1024,
    "GB": 1024 * 1024 * 1024,
    "TB": 1024 * 1024 * 1024 * 1024
  }

  let unit = ""
  for (const key in unitMultiple) {
    if (byte >= unitMultiple[key]) {
      unit = key
    }
  }

  // 환산
  // 2048 byte → 2 KB
  return parseFloat(byte / unitMultiple[unit]).toFixed(2) + "" + unit
}