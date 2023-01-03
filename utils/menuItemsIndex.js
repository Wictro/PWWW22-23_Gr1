function Item(name, label, price) {
    this.name = name;
    this.label = label;
    this.price = price;
}

const item1 = new Item('Soft-Boiled Organic Egg', 'with "soldiers"', '5.00')
const item2 = new Item('Egg in Puff Pastry', 'with wild mushrooms', '9.00')
const item3 = new Item('Eggs Any Style', 'with homefries & toast', '6.00')
const item4 = new Item('Eggs Norwegian', 'with homefries', '5.00')
const item5 = new Item('Egss Benedict', 'with homefries', '2.00')
const item6 = new Item('Soft Organic Egg', 'with "soldiers"', '6.00')
const item7 = new Item('Soft-Boiled Organic Egg', 'with "soldiers"', '5.00')
const item8 = new Item('Egg in Puff Pastry', 'with wild mushrooms', '9.00')
const item9 = new Item('Eggs Any Style', 'with homefries & toast', '6.00')
const item10 = new Item('Eggs Norwegian', 'with homefries', '5.00')
const item11 = new Item('Egss Benedict', 'with homefries', '2.00')
const item12 = new Item('Soft Organic Egg', 'with "soldiers"', '6.00')

const content = `
    <div class="starters-menu">
    <ul class="starters">
        <li><strong>${item1.name}</strong><span> ${item1.label}</span><span
                id="price">${item1.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item2.name}</strong><span> ${item2.label}</span><span
                id="price">${item2.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item3.name}</strong><span> ${item3.label}</span><span
                id="price">${item3.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item4.name}</strong><span> ${item4.label}</span><span id="price">${item4.price}</span>
        </li>
        <div class="price-separator"></div>
        <li><strong>${item5.name}</strong><span> ${item5.label}</span><span id="price">${item5.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item6.name}</strong><span> ${item6.label}</span><span id="price">${item6.price}</span>
        </li>
        <div class="price-separator"></div>
    </ul>
    </div>
    <div class="starters-menu">
    <ul class="starters">
        <li><strong>${item7.name}</strong><span> ${item7.label}</span><span
                id="price">${item7.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item8.name}</strong><span> ${item8.label}</span><span
                id="price">${item8.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item9.name}</strong><span> ${item9.label}</span><span
                id="price">${item9.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item10.name}</strong><span> ${item10.label}</span><span id="price">${item10.price}</span>
        </li>
        <div class="price-separator"></div>
        <li><strong>${item11.name}</strong><span> ${item11.label}</span><span id="price">${item11.price}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item12.name}</strong><span> ${item12.label}</span><span id="price">${item12.price}</span>
        </li>
        <div class="price-separator"></div>
    </ul>
    </div>
`

document.getElementById('menu-container').innerHTML = content;