function formatElapsedTime(dateString: string): string {
  const date = new Date(dateString); // Convert the string to a Date object
  const now = new Date();

  // Ensure date subtraction results in a valid number
  const diffInMs = now.getTime() - date.getTime(); // Use getTime() for precise comparison
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);

  // Case 1: Just now or within 12 hours
  if (diffInHours < 1) {
    return diffInMinutes <= 1 ? "Just now" : `${diffInMinutes} min ago`;
  } else if (diffInHours < 12) {
    return `${diffInHours} hrs ago`;
  }

  // Case 2: Same day (today)
  const isSameDay =
    now.getDate() === date.getDate() &&
    now.getMonth() === date.getMonth() &&
    now.getFullYear() === date.getFullYear();

  if (isSameDay) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `Today, ${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  // Case 3: More than 24 hours ago (show the date)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

function getInitials(name: string): string {
  if (!name) return ""; // Return empty string if name is empty

  // Split the name by spaces, filter out any empty parts, and map to the first letter of each part
  const initials = name
    .split(" ")
    .filter((part) => part.length > 0)
    .map((part) => part[0].toUpperCase())
    .join(""); // Join the initials together

  return initials;
}

function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export { formatElapsedTime, getInitials, capitalizeWords };
