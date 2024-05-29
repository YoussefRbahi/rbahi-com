export async function fetchUserIP() {
  try {
    const response = await fetch("https://api.ipify.org/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const ipAddress = await response.text();
    return ipAddress;
  } catch (error) {
    console.error(error);
  }
}
