const list = [
    'Latte',
    'Cacao',
    'Pasta',
    'Passata di pomodoro',
    'Gelato al cioccolato'
];

let listContainer = document.getElementById('list-container');

let l = 0;
while (l < list.length) {
    listContainer.innerHTML += `<li>${list[l]}</li>`;

    l++;
}