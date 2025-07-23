let user = "";
let virtualBalance = 50;
let profit = 2;
let investment = 50;

function login() {
  user = document.getElementById("username").value || "Guest";
  document.getElementById("user-name").innerText = user;
  document.querySelector(".login-box").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  startEarnings();
  generateLiveFeed();
}

function selectVIP() {
  const vip = document.getElementById("vip-level").value;
  switch (vip) {
    case "VIP1":
      investment = 50; profit = 2; break;
    case "VIP2":
      investment = 100; profit = 4; break;
    case "VIP3":
      investment = 150; profit = 8; break;
    case "VIP4":
      investment = 200; profit = 16; break;
  }
  virtualBalance = investment;
  document.getElementById("investment-amount").innerText = investment;
  document.getElementById("virtual-balance").innerText = virtualBalance;
  document.getElementById("hourly-profit").innerText = profit;
}

function startEarnings() {
  setInterval(() => {
    virtualBalance += profit;
    document.getElementById("virtual-balance").innerText = virtualBalance;
  }, 3600000); // every hour
}

function generateLiveFeed() {
  const names = ["Kwame", "Ama", "Yaw", "Afia", "Kojo", "Abena"];
  setInterval(() => {
    const action = Math.random() > 0.5 ? "invested" : "withdrew";
    const amount = Math.floor(Math.random() * 200 + 50);
    const name = names[Math.floor(Math.random() * names.length)];
    const msg = `${name} just ${action} ₵${amount}`;
    const p = document.createElement("p");
    p.innerText = msg;
    document.getElementById("feed").prepend(p);
  }, 5000); // every 5 seconds
  }
