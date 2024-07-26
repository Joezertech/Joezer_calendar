// script.js

function createCalendar() {
    const calendarContainer = document.getElementById('calendar');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    for (let i = 0; i < 12; i++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `<h2>${months[i]}</h2>`;
        calendarContainer.appendChild(monthDiv);

        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';
        monthDiv.appendChild(daysDiv);

        // Add day headers
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.innerHTML = day;
            daysDiv.appendChild(dayDiv);
        });

        // Add day numbers
        const daysInMonth = new Date(2024, i + 1, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            const dayDiv = document.createElement('div');
            dayDiv.innerHTML = d;
            daysDiv.appendChild(dayDiv);
        }
    }
}

document.addEventListener('DOMContentLoaded', createCalendar);
