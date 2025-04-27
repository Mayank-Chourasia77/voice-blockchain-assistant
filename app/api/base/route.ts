async function fetchBaseBlockNumber() {
  try {
      const response = await fetch('/api/base');
      const data = await response.json();

      if (data.message) {
          console.log(data.message);  // This should print something like "Current Block - 123456"
      } else {
          console.error("Error:", data);
      }
  } catch (error) {
      console.error('Error fetching Base block number:', error);
  }
}
