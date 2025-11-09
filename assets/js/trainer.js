const trainers = [
  { name: "Top Prasad Nepal", position: "Principal" },
  { name: "Bholanath Sapkota", position: "Vice Principal" },
  { name: "Kedar Nepal", position: "Accountancy" },
  { name: "Niroj Lamsal", position: "Science" },
  { name: "Dipak Sapkota", position: "Mathematics" },
  { name: "Madhu Neupane", position: "Primary Teacher" },
  { name: "Santosh Chaulagain", position: "Mathematics" },
  { name: "Devaki Nepal", position: "Primary Teacher" },
  { name: "Salina Ghorasaine", position: "School Nurse" },
  { name: "Sunamaya Majhi", position: "ECD" },
  { name: "Goda Neupane", position: "Primary Teacher" },
  { name: "Sarmila Katuwal", position: "Primary Teacher" },
  { name: "Junkiri Majhi", position: "Office Helper" },
  { name: "Putali Majhi", position: "Office Helper" },
  { name: "Binita Thapa", position: "Primary Teacher" },
  { name: "Ishwori Thapa", position: "English" },
  { name: "Yadav Neupane", position: "Primary Teacher" },
  { name: "Pritam Gurung", position: "IT Teacher" },
  { name: "Bikesh Thapa", position: "Primary Teacher" }
];

// Get the container
const container = document.getElementById('trainer-container');

// Loop through all trainers
trainers.forEach((trainer, index) => {
  const i = index + 1; // image number (team-1.jpg, team-2.jpg, etc.)
  const delay = 100 * i;

  const member = document.createElement('div');
  member.className = 'col-lg-4 col-md-6 member';
  member.setAttribute('data-aos', 'fade-up');
  member.setAttribute('data-aos-delay', delay);

  member.innerHTML = `
    <div class="member-img">
      <img src="assets/img/trainers/${i}.jpg" class="img-fluid" alt="${trainer.name}">
      <div class="social">
        <a href="#"><i class="bi bi-twitter-x"></i></a>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
    <div class="member-info text-center">
      <h4>${trainer.name}</h4>
      <span>${trainer.position}</span>
      <p>Short description for ${trainer.name}.</p>
    </div>
  `;

  container.appendChild(member);
});
