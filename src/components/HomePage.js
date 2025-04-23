function HomePage() {
  const content = document.getElementById("content");

  const homeTitle = document.createElement("h1");
  const descriptionDiv = document.createElement("div");
  const workingHoursDiv = document.createElement("div");
  const locationDiv = document.createElement("div");

  const hours_para = document.createElement("p");
  const hours_para1 = document.createElement("p");
  const hours_para2 = document.createElement("p");
  const hours_para3 = document.createElement("p");

  homeTitle.textContent = "WELCOME";

  descriptionDiv.textContent =
    "Step into a world where your dinner is served by droids, your table glows with galaxy lights, and your taste buds time-travel through interstellar recipes. From molecular burgers to zero-gravity desserts, we’re cooking up the cosmos one plate at a time. It’s not just a meal—it’s a mission. Buckle up, Earthling. Your culinary adventure starts now!";

  hours_para.textContent =
    "🚀 Operating Hours – Synchronized with Galactic Time Protocol (GTP)";

  hours_para1.textContent =
    "🪐 Monday to Friday: 16:00 – 02:00 (Post-Earth Office Hours, for the night voyagers)";

  hours_para2.textContent =
    "🌌 Saturday & Sunday: 12:00 – 03:00 (Full-thrust Weekend Mode) ";

  hours_para3.textContent =
    "✨ Closed during cosmic storms and spaceship maintenance.";

  locationDiv.textContent =
    "📍 Location: Deck 7, Sector Z-42, Orbiting Moon 3 of Planet Lysara, Andromeda Galaxy";

  workingHoursDiv.appendChild(hours_para);
  workingHoursDiv.appendChild(hours_para1);
  workingHoursDiv.appendChild(hours_para2);
  workingHoursDiv.appendChild(hours_para3);

  content.appendChild(homeTitle);
  content.appendChild(descriptionDiv);
  content.appendChild(workingHoursDiv);
  content.appendChild(locationDiv);
}

export default HomePage;
