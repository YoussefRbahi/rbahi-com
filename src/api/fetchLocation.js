export async function fetchLocation(setLocationData) {
  try {
    const response = await fetch("https://rbahiapi.netlify.app/location.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setLocationData(data);
  } catch (error) {
    console.error(error);
  }
}
