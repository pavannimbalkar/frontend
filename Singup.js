// ==========================
// Singup.js
// ==========================

// Your dataset
const students = [
  {id:1, name:"Aarav Joshi", class:"1", school:"Sunrise Public School", points:320, score:8, topic:"Nature", badges:["Nature Novice","Purifier Pro","Data Designer"], profilePic:"👦"},
  {id:2, name:"Pari Singh", class:"1", school:"Greenwood International", points:155, score:4, topic:"Water", badges:["Water Watcher","Eco Maker"], profilePic:"👧"},
  {id:3, name:"Vihaan Patel", class:"1", school:"Eco Innovators Academy", points:480, score:10, topic:"Soil", badges:["Soil Scout","Eco-Restorer","Field Investigator","Climate Diplomat"], profilePic:"🧑‍🌾"},
  {id:4, name:"Myra Reddy", class:"1", school:"Sunrise Public School", points:210, score:6, topic:"Nature", badges:["Nature Novice","Tree Scout","Bio-Scout"], profilePic:"👧"},
  {id:5, name:"Sai Gupta", class:"1", school:"Valley View High", points:80, score:2, topic:"Energy", badges:["Energy Artist"], profilePic:"👦"},
  {id:6, name:"Anika Sharma", class:"2", school:"Greenwood International", points:495, score:10, topic:"Environment", badges:["Waste Warrior","Upcycler","Zero-Waste Champion","Climate Diplomat"], profilePic:"👩‍🔬"},
  {id:7, name:"Kabir Mehta", class:"2", school:"Eco Innovators Academy", points:240, score:6, topic:"Water", badges:["Water Watcher","Water Harvester","Purifier Pro"], profilePic:"👦"},
  {id:8, name:"Kiara Verma", class:"2", school:"Sunrise Public School", points:90, score:3, topic:"Environment", badges:["Eco Maker","Tree Scout"], profilePic:"👧"},
  {id:9, name:"Reyansh Kumar", class:"2", school:"Valley View High", points:330, score:9, topic:"Soil", badges:["Soil Scout","Nature Novice","Soil Scientist","Agri-Visionary"], profilePic:"🧑‍🌾"},
  {id:10, name:"Diya Shah", class:"3", school:"Greenwood International", points:110, score:3, topic:"Climate", badges:["Weather Explorer","Energy Artist"], profilePic:"👧"},
  {id:11, name:"Advik Singh", class:"3", school:"Eco Innovators Academy", points:410, score:10, topic:"Air", badges:["Air Aware","Nature Novice","Policy Analyst","Tech Futurist"], profilePic:"👦"},
  {id:12, name:"Avni Joshi", class:"3", school:"Sunrise Public School", points:265, score:7, topic:"Water", badges:["Water Saver","Water Watcher","Eco Maker","Water Planner"], profilePic:"👩‍🎓"},
  {id:13, name:"Rohan Gupta", class:"3", school:"Greenwood International", points:180, score:5, topic:"Soil", badges:["Soil Sorter","Soil Scout"], profilePic:"🧑‍🌾"},
  {id:14, name:"Ananya Patel", class:"3", school:"Valley View High", points:390, score:10, topic:"Energy", badges:["Energy Saver","Energy Artist","Energy Auditor","Green Financier"], profilePic:"👧"},
  {id:15, name:"Vivaan Sharma", class:"4", school:"Eco Innovators Academy", points:75, score:2, topic:"Nature", badges:["Nature Reporter"], profilePic:"🧑‍🎓"},
  {id:16, name:"Saanvi Verma", class:"4", school:"Sunrise Public School", points:290, score:8, topic:"Environment", badges:["Bottle Buddy","Upcycler","Waste Warrior","Recycle Racer"], profilePic:"👧"},
  {id:17, name:"Arjun Reddy", class:"4", school:"Valley View High", points:505, score:10, topic:"Climate", badges:["Weather Collector","Climate Detective","Climate Critic","Climate Diplomat","Tech Futurist"], profilePic:"👦"},
  {id:18, name:"Ishita Kumar", class:"4", school:"Greenwood International", points:140, score:4, topic:"Water", badges:["Drop Saver","Water Artist"], profilePic:"👩‍🔬"},
  {id:19, name:"Ayaan Mehta", class:"5", school:"Sunrise Public School", points:360, score:9, topic:"Environment", badges:["Forest Kid","E-waste Rookie","Compost Champ","Circular Pioneer"], profilePic:"🧑‍🏫"},
  {id:20, name:"Aadhya Singh", class:"5", school:"Eco Innovators Academy", points:200, score:5, topic:"Energy", badges:["Energy Expert","Solar Scout","Solar Chef"], profilePic:"👩‍🎓"},
  {id:21, name:"Krishna Patel", class:"5", school:"Valley View High", points:125, score:4, topic:"Water", badges:["Audit Angel","Water Saver"], profilePic:"👦"},
  {id:22, name:"Zara Shah", class:"5", school:"Greenwood International", points:440, score:10, topic:"Climate", badges:["Climate Detective","Ring Explainer","Forest Kid","Policy Analyst","Debate Champion"], profilePic:"👧"},
  {id:23, name:"Ishaan Joshi", class:"5", school:"Sunrise Public School", points:280, score:7, topic:"Soil", badges:["Soil Analyst","Compost Champ","Soil Scientist"], profilePic:"🧑‍🌾"},
  {id:24, name:"Riya Gupta", class:"6", school:"Eco Innovators Academy", points:310, score:8, topic:"Energy", badges:["Solar Chef","Footprint Finder","Energy Planner"], profilePic:"👩‍🔬"},
  {id:25, name:"Arnav Sharma", class:"6", school:"Valley View High", points:195, score:5, topic:"Water", badges:["Water Harvester","Bio-Scout","Purifier Pro"], profilePic:"👦"},
  {id:26, name:"Mira Singh", class:"6", school:"Greenwood International", points:460, score:10, topic:"Environment", badges:["Recycle Racer","Tech Thinker","Upcycler","Zero-Waste Champion","Eco-Preneur"], profilePic:"👧"},
  {id:27, name:"Dev Kumar", class:"6", school:"Sunrise Public School", points:60, score:2, topic:"Soil", badges:["Soil Analyst"], profilePic:"🧑‍🎓"},
  {id:28, name:"Aditi Patel", class:"7", school:"Valley View High", points:255, score:7, topic:"Climate", badges:["Climate Artist","Green Innovator","Ecosystem Explorer"], profilePic:"👩‍🎓"},
  {id:29, name:"Yash Mehta", class:"7", school:"Greenwood International", points:380, score:10, topic:"Water", badges:["Water Planner","Ecosystem Explorer","Hydro-Thinker","Field Investigator"], profilePic:"👦"},
  {id:30, name:"Sia Reddy", class:"7", school:"Eco Innovators Academy", points:170, score:5, topic:"Environment", badges:["Waste Inspector","Green Innovator"], profilePic:"👩‍🔬"},
  {id:31, name:"Aryan Verma", class:"7", school:"Sunrise Public School", points:475, score:10, topic:"Energy", badges:["Wind Expert","Agri-Reporter","Energy Planner","Tech Futurist","Green Financier"], profilePic:"🧑‍🏫"},
  {id:32, name:"Khushi Shah", class:"7", school:"Valley View High", points:220, score:6, topic:"Nature", badges:["Ecosystem Explorer","Water Planner","Climate Artist"], profilePic:"👧"},
  {id:33, name:"Neel Joshi", class:"8", school:"Greenwood International", points:300, score:8, topic:"Water", badges:["Purifier Pro","Field Naturalist","Conservationist"], profilePic:"👦"},
  {id:34, name:"Navya Singh", class:"8", school:"Sunrise Public School", points:130, score:4, topic:"Environment", badges:["Upcycle Champion","Data Designer"], profilePic:"👩‍🎓"},
  {id:35, name:"Parth Patel", class:"8", school:"Eco Innovators Academy", points:490, score:10, topic:"Soil", badges:["Agri-Visionary","Soil Scientist","IoT Thinker","Future Food Visionary"], profilePic:"🧑‍🌾"},
  {id:36, name:"Anvi Gupta", class:"8", school:"Valley View High", points:235, score:6, topic:"Climate", badges:["Data Designer","Conservationist","Climate Critic"], profilePic:"👧"},
  {id:37, name:"Samarth Kumar", class:"9", school:"Sunrise Public School", points:510, score:10, topic:"Environment", badges:["Eco-Preneur","Threat Analyst","Campus Hydro-Manager","Zero-Waste Champion","Eco-Restorer"], profilePic:"🧑‍🎓"},
  {id:38, name:"Shanaya Sharma", class:"9", school:"Eco Innovators Academy", points:275, score:7, topic:"Water", badges:["Campus Hydro-Manager","Audit Ace","Hydro-Thinker"], profilePic:"👩‍🔬"},
  {id:39, name:"Veer Mehta", class:"9", school:"Greenwood International", points:400, score:10, topic:"Climate", badges:["Debate Champion","Tech Critic","Eco-Preneur","Policy Analyst"], profilePic:"🧑‍🏫"},
  {id:40, name:"Priya Shah", class:"9", school:"Valley View High", points:115, score:3, topic:"Energy", badges:["Tech Critic","Soil Scientist"], profilePic:"👧"},
  {id:41, name:"Dhruv Reddy", class:"9", school:"Sunrise Public School", points:340, score:9, topic:"Environment", badges:["Audit Ace","Eco-Preneur","Threat Analyst","Circular Pioneer"], profilePic:"👦"},
  {id:42, name:"Kavya Verma", class:"10", school:"Eco Innovators Academy", points:295, score:8, topic:"Nature", badges:["Wildlife Filmmaker","Circular Pioneer","Carbon Counter"], profilePic:"👩‍🎓"},
  {id:43, name:"Ritvik Joshi", class:"10", school:"Valley View High", points:190, score:5, topic:"Climate", badges:["Policy Analyst","Water Investigator"], profilePic:"🧑‍🎓"},
  {id:44, name:"Siya Singh", class:"10", school:"Greenwood International", points:425, score:10, topic:"Water", badges:["Water Investigator","App Architect","Circular Pioneer","Field Investigator"], profilePic:"👧"},
  {id:45, name:"Atharv Patel", class:"10", school:"Sunrise Public School", points:85, score:3, topic:"Energy", badges:["Energy Auditor"], profilePic:"👦"},
  {id:46, name:"Ira Gupta", class:"11", school:"Valley View High", points:455, score:10, topic:"Nature", badges:["Conservation Strategist","Hydro-Thinker","Climate Critic","Wildlife Filmmaker"], profilePic:"👩‍🔬"},
  {id:47, name:"Shaurya Kumar", class:"11", school:"Greenwood International", points:370, score:10, topic:"Energy", badges:["Agri-Technologist","Green Financier","Energy Planner"], profilePic:"🧑‍🏫"},
  {id:48, name:"Nyra Sharma", class:"11", school:"Eco Innovators Academy", points:250, score:7, topic:"Energy", badges:["Energy Planner","Recycling Researcher","Green Financier"], profilePic:"👩‍🎓"},
  {id:49, name:"Ryan Mehta", class:"11", school:"Sunrise Public School", points:100, score:3, topic:"Climate", badges:["Climate Critic"], profilePic:"👦"},
  {id:50, name:"Zoya Shah", class:"12", school:"Greenwood International", points:355, score:9, topic:"Climate", badges:["Climate Diplomat","Zero-Waste Champion","Eco-Restorer"], profilePic:"👩‍🎓"},
  {id:51, name:"Kabir Singh", class:"12", school:"Eco Innovators Academy", points:285, score:8, topic:"Environment", badges:["Zero-Waste Champion","Field Investigator","Audit Ace"], profilePic:"🧑‍🎓"},
  {id:52, name:"Meera Joshi", class:"12", school:"Valley View High", points:185, score:5, topic:"Energy", badges:["Tech Futurist","Future Food Visionary"], profilePic:"👩‍🔬"},
  {id:53, name:"Arnav Reddy", class:"12", school:"Sunrise Public School", points:435, score:10, topic:"Water", badges:["Field Investigator","Eco-Restorer","Campus Hydro-Manager","Hydro-Thinker"], profilePic:"👦"},
  {id:54, name:"Anika Patel", class:"12", school:"Greenwood International", points:500, score:10, topic:"Environment", badges:["Climate Diplomat","Tech Futurist","Field Investigator","Eco-Restorer"], profilePic:"👧"}
];

// Generate captcha
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").innerText = captcha;
    return captcha;
}

let currentCaptcha = generateCaptcha();

// Refresh captcha
document.getElementById("refreshCaptcha").addEventListener("click", () => {
    currentCaptcha = generateCaptcha();
});

// Handle signup / login
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const school = document.getElementById("school").value.trim();
    const classSelected = document.getElementById("class").value;
    const role = document.getElementById("role").value;
    const captchaInput = document.getElementById("captchaInput").value.trim();

    // Validate captcha
    if (captchaInput !== currentCaptcha) {
        alert("❌ Incorrect captcha. Try again!");
        currentCaptcha = generateCaptcha();
        return;
    }

    // Validate required fields
    if (!name || !email || !mobile || !school || !classSelected || !role) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    // Demo password check
    if (password !== "123456789") {
        alert("❌ Wrong password! Use demo password: 123456789");
        return;
    }

    // Student login check
    if (role == "student") {
        const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
        if (!student) {
            alert("❌ Student not found in dataset!");
            return;
        }

        // Save student data
        localStorage.setItem("loggedInUser", JSON.stringify(student));

        alert("✅ Student Login Successful!");
        window.location.href = "Profile.html";
        return;
    }

    // Teacher/Admin login
    const user = { name, email, mobile, school, class: classSelected, role };
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("✅ Login Successful!");
    redirectUser(role);
});

// Redirect helper
function redirectUser(role) {
    switch(role.toLowerCase()) {
        case "Teacher":
            window.location.href = "TeacherDashboard.html";
            break;
        case "Admin":
            window.location.href = "AdminDashboard.html";
            break;
        default:
            alert("Unknown role!");
    }
}
