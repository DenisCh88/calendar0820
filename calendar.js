const monthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];




function createCalendar() {
    const currentDay = new Date(),
        currentYear = currentDay.getFullYear(),
        currentMonth = currentDay.getMonth(),
        calendarState = {
            month: currentMonth,
            year: currentYear

        };

}

function createCalendar() {
    const currentDay = new Date(),
        currentYear = currentDay.getFullYear(),
        currentMonth = currentDay.getMonth(),
        currentDate = currentDay.getDate(),
        firstDayOfMonth = new Date(currentYear, currentMonth, 1),
        lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0),
        firstDayShift = (firstDayOfMonth.getDay() + 6) % 7,
        firstDisplayDay = new Date(currentYear, currentMonth, 1 - firstDayShift),
        lastDayShift = (7 - lastDayOfMonth.getDay()) % 7,
        lastDisplayDay = new Date(currentYear, currentMonth + 1, lastDayShift),
        daysForDisplay = [],
        daysContainer = document.querySelector('.calendar__days'),
        headerContainer = document.querySelector('.calendar__header');

    for (let day = new Date(firstDisplayDay); day <= lastDisplayDay; day.setDate(day.getDate() + 1)) {
        const cDay = new Date(day),
            cMonth = cDay.getMonth();

        daysForDisplay.push(
            renderDay({
                day: cDay,
                notInMonth: cMonth !== currentMonth,
                isCurrentDay: currentMonth === cMonth && currentDate === cDay.getDate()
            })
        );
    }
    headerContainer.innerText = `${monthes[currentMonth]} ${currentYear}`
    daysContainer.append(...daysForDisplay);

    console.log(daysForDisplay);

}

function renderDay(dayObj) {
    const { day, notInMonth, isCurrentDay } = dayObj,
        dayContainer = document.createElement('li');

    dayContainer.innerText = day.getDate();

    dayContainer.classList.add('calendar__day');

    if (notInMonth) {
        dayContainer.classList.add('calendar__day--not-in-month');
    }

    if (isCurrentDay) {
        dayContainer.classList.add('calendar__day--current');
    }

    return dayContainer;

}


createCalendar();