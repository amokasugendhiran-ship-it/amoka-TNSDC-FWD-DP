const portfolio = {
  name: "Your Name",
  role: "Web Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  showInfo() {
    console.log(`Hi, I'm ${this.name}, a ${this.role}.`);
    console.log("Skills:", this.skills.join(", "));
  }
};

portfolio.showInfo();
setInterval(() => console.log("🚀 Building projects..."), 3000);