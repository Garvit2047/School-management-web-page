
function showSection(sectionId) {
   
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }

 
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
   
    event.currentTarget.classList.add('active');
}

document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const name = document.getElementById('studentName').value;
    const sClass = document.getElementById('studentClass').value;

    console.log(`Registering: ${name} for ${sClass}`);

   
    document.getElementById('admissionForm').style.display = 'none';
    document.getElementById('successMessage').classList.remove('hidden');
});



// Database of books
const books = [
    { title: "Science: Physics Vol 1", author: "H.C. Verma" },
    { title: "Mathematics R.D. Sharma", author: "R.D. Sharma" },
    { title: "History of India", author: "NCERT" },
    { title: "English Grammar", author: "Wren & Martin" },
    { title: "Computer Science", author: "Sumita Arora" }
];

function libraryLogin() {
    const user = document.getElementById('libUser').value;
    const pass = document.getElementById('libPass').value;
    const errorMsg = document.getElementById('loginError');

    
    if (user === "student" && pass === "123") {
        // Success
        document.getElementById('libraryLogin').classList.add('hidden');
        document.getElementById('libraryDashboard').classList.remove('hidden');
        loadBooks(); 
        errorMsg.classList.add('hidden');
    } else {
        
        errorMsg.classList.remove('hidden');
    }
}

function libraryLogout() {

    document.getElementById('libraryLogin').classList.remove('hidden');
    document.getElementById('libraryDashboard').classList.add('hidden');
   
    document.getElementById('libUser').value = "";
    document.getElementById('libPass').value = "";
}

function loadBooks() {
    const list = document.getElementById('bookList');
    list.innerHTML = ""; 

    
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-card';
        bookDiv.innerHTML = `
            <div style="font-size:40px;">📚</div>
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p class="book-status">● Available</p>
        `;
        list.appendChild(bookDiv);
    });
}