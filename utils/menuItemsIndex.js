function Item(name, label, price) {
    this.name = name;
    this.label = label;
    this.price = price;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkPrice(price) {
        if (price === NaN || price > Number.MAX_VALUE) 
            return 0.00.toExponential();
        else
            return price.toString() + ".00" 
}

const item1 = new Item('soft-Boiled Organic Egg', 'with "soldiers"', 5.00)
const item2 = new Item('egg in Puff Pastry', 'with wild mushrooms', 9.00)
const item3 = new Item('eggs Any Style', 'with homefries & toast', 6.00)
const item4 = new Item('eggs Norwegian', 'with homefries', 5.00)
const item5 = new Item('egss Benedict', 'with homefries', 2.00)
const item6 = new Item('soft Organic Egg', 'with "soldiers"', 6.00)
const item7 = new Item('soft-Boiled Organic Egg', 'with "soldiers"', 5.00)
const item8 = new Item('egg in Puff Pastry', 'with wild mushrooms', 9.00)
const item9 = new Item('eggs Any Style', 'with homefries & toast', 6.00)
const item10 = new Item('eggs Norwegian', 'with homefries', 5.00)
const item11 = new Item('egss Benedict', 'with homefries', 2.00)
const item12 = new Item('soft Organic Egg', 'with "soldiers"', 6.00)

const content = `
    <div class="starters-menu">
    <ul class="starters">
        <li><strong>${item1.name.replace(item1.name, capitalizeFirstLetter(item1.name))}</strong><span> ${item1.label}</span><span
                id="price">${checkPrice(item1.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item2.name.replace(item2.name, capitalizeFirstLetter(item2.name))}</strong><span> ${item2.label}</span><span
                id="price">${checkPrice(item2.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item3.name.replace(item3.name, capitalizeFirstLetter(item3.name))}</strong><span> ${item3.label}</span><span
                id="price">${checkPrice(item3.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item4.name.replace(item4.name, capitalizeFirstLetter(item4.name))}</strong><span> ${item4.label}</span><span id="price">${checkPrice(item4.price)}</span>
        </li>
        <div class="price-separator"></div>
        <li><strong>${item5.name.replace(item5.name, capitalizeFirstLetter(item5.name))}</strong><span> ${item5.label}</span><span id="price">${checkPrice(item5.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item6.name.replace(item6.name, capitalizeFirstLetter(item6.name))}</strong><span> ${item6.label}</span><span id="price">${checkPrice(item6.price)}</span>
        </li>
        <div class="price-separator"></div>
    </ul>
    </div>
    <div class="starters-menu">
    <ul class="starters">
        <li><strong>${item1.name.replace(item1.name, capitalizeFirstLetter(item1.name))}</strong><span> ${item1.label}</span><span
                id="price">${checkPrice(item1.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item2.name.replace(item2.name, capitalizeFirstLetter(item2.name))}</strong><span> ${item2.label}</span><span
                id="price">${checkPrice(item2.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item3.name.replace(item3.name, capitalizeFirstLetter(item3.name))}</strong><span> ${item3.label}</span><span
                id="price">${checkPrice(item3.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item4.name.replace(item4.name, capitalizeFirstLetter(item4.name))}</strong><span> ${item4.label}</span><span id="price">${checkPrice(item4.price)}</span>
        </li>
        <div class="price-separator"></div>
        <li><strong>${item5.name.replace(item5.name, capitalizeFirstLetter(item5.name))}</strong><span> ${item5.label}</span><span id="price">${checkPrice(item5.price)}</span></li>
        <div class="price-separator"></div>
        <li><strong>${item6.name.replace(item6.name, capitalizeFirstLetter(item6.name))}</strong><span> ${item6.label}</span><span id="price">${checkPrice(item6.price)}</span>
        </li>
        <div class="price-separator"></div>
    </ul>
    </div>
`

document.getElementById('menu-container').innerHTML = content;