const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

let currentYear = 2025;
let currentMonth = 0; // January

const monthYearDisplay = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');

function generateCalendar(year, month) {
    calendarBody.innerHTML = ''; // Clear previous content
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    for (let date = 1; date <= lastDate; date++) {
        if ((row.children.length + firstDay) % 7 === 0 && date !== 1) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
        const cell = document.createElement('td');
        cell.textContent = date;
        row.appendChild(cell);
    }

    if (row.children.length) {
        calendarBody.appendChild(row);
    }
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

// Initialize calendar
generateCalendar(currentYear, currentMonth);
