async function getUser() {
  try {
    const response = await fetch("/api/user");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Could not load user:", error.message);
    throw error; // Preserve failure for the caller.
  }
}