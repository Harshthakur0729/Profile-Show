const data = [
    {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "availability": "Part-time",
        "cost_per_hour": 50,
        "company": "Self-Employed",
        "designation": "Full-Stack Developer",
        "tech_stack": ["JavaScript", "React", "Node.js", "MongoDB", "Docker", "MERN"],
        "address": "San Francisco, CA, USA",
        "bio": "Passionate full-stack developer with 5+ years of experience in web development.",
        "description": "Alice specializes in building scalable web applications using the MERN stack. She has worked with various startups and enterprises, delivering high-performance solutions."
    },
    {
        "name": "David Smith",
        "email": "david.smith@example.com",
        "availability": "Full-time",
        "cost_per_hour": 40,
        "company": "TechSoft Inc.",
        "designation": "Backend Developer",
        "tech_stack": ["Python", "Django", "PostgreSQL", "Redis", "AWS"],
        "address": "Austin, TX, USA",
        "bio": "Experienced backend developer focused on building robust and scalable APIs.",
        "description": "David has worked extensively with Python and Django, creating highly scalable backend systems for SaaS companies."
    },
    {
        "name": "Samantha Green",
        "email": "samantha.green@example.com",
        "availability": "Contract",
        "cost_per_hour": 55,
        "company": "Self-Employed",
        "designation": "UI/UX Designer",
        "tech_stack": ["Figma", "Adobe XD", "HTML", "CSS", "JavaScript"],
        "address": "New York, NY, USA",
        "bio": "Creative UI/UX designer with a passion for user-centric design.",
        "description": "Samantha has designed intuitive and visually appealing user interfaces for multiple e-commerce platforms and SaaS products."
    },
    {
        "name": "Michael Lee",
        "email": "michael.lee@example.com",
        "availability": "Full-time",
        "cost_per_hour": 45,
        "company": "NextGen Tech",
        "designation": "DevOps Engineer",
        "tech_stack": ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD"],
        "address": "Seattle, WA, USA",
        "bio": "DevOps expert with deep knowledge of cloud infrastructure automation.",
        "description": "Michael specializes in cloud-native technologies and has helped organizations optimize their CI/CD pipelines and automate deployments."
    },
    {
        "name": "Priya Sharma",
        "email": "priya.sharma@example.com",
        "availability": "Part-time",
        "cost_per_hour": 35,
        "company": "Freelancer",
        "designation": "Mobile App Developer",
        "tech_stack": ["Flutter", "Dart", "Firebase", "React Native", "GraphQL"],
        "address": "Bangalore, India",
        "bio": "Mobile app developer with expertise in cross-platform app development.",
        "description": "Priya has built several successful mobile applications for startups and businesses, focusing on performance and user experience."
    },
    {
        "name": "John Carter",
        "email": "john.carter@example.com",
        "availability": "Full-time",
        "cost_per_hour": 60,
        "company": "Self-Employed",
        "designation": "Blockchain Developer",
        "tech_stack": ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Node.js"],
        "address": "London, UK",
        "bio": "Blockchain developer with expertise in smart contracts and decentralized applications.",
        "description": "John has developed multiple blockchain-based solutions, including DeFi applications and NFT platforms."
    },
    {
        "name": "Lisa Brown",
        "email": "lisa.brown@example.com",
        "availability": "Contract",
        "cost_per_hour": 50,
        "company": "CreativeSoft",
        "designation": "Frontend Developer",
        "tech_stack": ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript", "TypeScript"],
        "address": "Toronto, Canada",
        "bio": "Frontend developer with a passion for building beautiful and interactive UIs.",
        "description": "Lisa has extensive experience in Vue.js and has contributed to various open-source projects in the frontend ecosystem."
    },
    {
        "name": "Ahmed Khan",
        "email": "ahmed.khan@example.com",
        "availability": "Full-time",
        "cost_per_hour": 30,
        "company": "Self-Employed",
        "designation": "WordPress Developer",
        "tech_stack": ["WordPress", "PHP", "WooCommerce", "MySQL", "Elementor"],
        "address": "Dubai, UAE",
        "bio": "WordPress expert with experience in building custom themes and plugins.",
        "description": "Ahmed has helped businesses create fast and SEO-friendly WordPress websites with customized functionality."
    },
    {
        "name": "Elena Rossi",
        "email": "elena.rossi@example.com",
        "availability": "Part-time",
        "cost_per_hour": 40,
        "company": "DataTech",
        "designation": "Data Scientist",
        "tech_stack": ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
        "address": "Milan, Italy",
        "bio": "Data scientist with expertise in machine learning and data analysis.",
        "description": "Elena specializes in data-driven solutions and predictive analytics for various industries, including finance and healthcare."
    },
    {
        "name": "Tom Williams",
        "email": "tom.williams@example.com",
        "availability": "Full-time",
        "cost_per_hour": 55,
        "company": "CloudWorks",
        "designation": "Cloud Engineer",
        "tech_stack": ["AWS", "Azure", "Terraform", "Kubernetes", "Linux"],
        "address": "Sydney, Australia",
        "bio": "Cloud engineer with experience in deploying scalable cloud solutions.",
        "description": "Tom has worked on designing and managing cloud infrastructures for enterprises, ensuring high availability and security."
    },
    {
        "name": "Yuki Tanaka",
        "email": "yuki.tanaka@example.com",
        "availability": "Contract",
        "cost_per_hour": 45,
        "company": "Self-Employed",
        "designation": "Cybersecurity Specialist",
        "tech_stack": ["Penetration Testing", "Ethical Hacking", "SIEM", "Firewall", "Python"],
        "address": "Tokyo, Japan",
        "bio": "Cybersecurity expert with experience in ethical hacking and vulnerability assessment.",
        "description": "Yuki provides cybersecurity consulting services, helping businesses secure their systems from cyber threats."
    },
    {
        "name": "Carlos Martinez",
        "email": "carlos.martinez@example.com",
        "availability": "Part-time",
        "cost_per_hour": 35,
        "company": "Self-Employed",
        "designation": "Game Developer",
        "tech_stack": ["Unity", "C#", "Unreal Engine", "Blender", "Photon"],
        "address": "Barcelona, Spain",
        "bio": "Game developer with expertise in Unity and Unreal Engine.",
        "description": "Carlos has worked on multiple indie games and AR/VR experiences, bringing creative ideas to life in the gaming industry."
    }
]
function renderCards() {
    let cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = "";

    data.forEach(person => {
 
        let skillsHtml = person.tech_stack.slice(0, 3)
            .map(skill => `<span class="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">${skill}</span>`).join(" ");

        let skillCount = person.tech_stack.length > 3 ?
            `<span class="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">+${person.tech_stack.length - 3}</span>` : "";

        let initials = person.name.split(" ").map(word => word.charAt(0).toUpperCase()).join(" ");

        let availabilityColor = person.availability === "Part-time" ? "bg-red-500" :
            person.availability === "Full-time" ? "bg-blue-500" :
                person.availability === "Contract" ? "bg-green-500" : "bg-gray-500";

        let cardHtml = `
            <div class="w-72 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105">
                
                <!-- Availability & Price -->
                <div class="flex justify-between items-center p-4">
                    <h4 class="px-3 py-1 text-white text-xs font-bold uppercase rounded-full ${availabilityColor}">
                        ${person.availability}
                    </h4>
                    <h4 class="text-lg font-bold text-gray-800">$${person.cost_per_hour}/hr</h4>
                </div>

                <!-- User Info -->
                <div class="text-center flex flex-col items-center p-4">
                    <div class="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold rounded-full">
                        ${initials}
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mt-2">${person.name}</h3>
                    <h5 class="text-sm text-gray-600">${person.designation}</h5>
                    <h5 class="text-sm text-gray-500">${person.company}</h5>
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap justify-center gap-2 my-2 px-4">
                    ${skillsHtml} ${skillCount}
                </div>

                <!-- Bio -->
                <div class="text-center text-gray-700 text-sm p-2 leading-relaxed">
                    <p>${person.bio}</p>
                </div>

                <!-- Button -->
                <div class="px-4 py-3">
                    <button class="w-full px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded hover:bg-blue-700 transition" 
                        onclick="viewProfile('${person.email}')">VIEW PROFILE</button>
                </div>
            </div>
        `;

        cardContainer.innerHTML += cardHtml;
    });
}







document.addEventListener("DOMContentLoaded", renderCards);









//card show when click view button 

function viewProfile(email) {
    let person = data.find(user => user.email === email);
    if (person) {
        let profileContainer = document.getElementById("Profileshow");
        profileContainer.style.display = 'block'
        profileContainer.innerHTML = `
            <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                <div class="bg-white w-1/3 p-6 rounded-lg shadow-lg">
                    <div class="text-center">
                        <div class="w-20 h-20 bg-gray-900 text-white flex items-center justify-center text-3xl font-bold rounded-full mx-auto">
                            ${getInitials(person.name)}
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mt-3">${person.name}</h2>
                        <h4 class="text-gray-600">${person.designation} at ${person.company}</h4>
                        <h5 class="text-gray-500">${person.address}</h5>
                    </div>
                    
                    <div class="flex justify-between items-center mt-4">
                        <span class="px-3 py-1 rounded-full text-white text-sm font-bold ${getAvailabilityColor(person.availability)}">
                            ${person.availability}
                        </span>
                        <span class="text-lg font-bold text-gray-800">$${person.cost_per_hour}/hr</span>
                    </div>

                    <div class="mt-4">
                        <h3 class="font-bold text-gray-700">Tech Stack:</h3>
                        <div class="flex flex-wrap gap-2 mt-2">
                            ${person.tech_stack.map(skill => `<span class="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">${skill}</span>`).join(" ")}
                        </div>
                    </div>

                    <div class="mt-4">
                        <h3 class="font-bold text-gray-700">About:</h3>
                        <p class="text-gray-600">${person.bio}</p>
                    </div>

                    <div class="mt-4">
                        <h3 class="font-bold text-gray-700">Description:</h3>
                        <p class="text-gray-600">${person.description}</p>
                    </div>

                    <div class="text-center mt-6">
                        <button onclick="closeProfile()" class="px-5 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700 transition">Close</button>
                    </div>
                </div>
            </div>
        `;

        profileContainer.classList.remove("hidden");
    }
}
function closeProfile() {
    document.getElementById("Profileshow").classList.add("hidden");
    document.getElementById("Profileshow").style.display = "none"
}

function getInitials(name) {
    return name.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
}

function getAvailabilityColor(status) {
    return status === "Part-time" ? "bg-red-500" :
        status === "Full-time" ? "bg-blue-500" :
            status === "Contract" ? "bg-green-500" : "bg-gray-500";
}

