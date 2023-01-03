function Record(img) {
    this.img = img;
}

const img1 = new Record('assets/images/gallery1.png')
const img2 = new Record('assets/images/gallery8.png')
const img3 = new Record('assets/images/gallery3.png')
const img4 = new Record('assets/images/gallery4.png')
const img5 = new Record('assets/images/gallery5.png')
const img6 = new Record('assets/images/gallery6.png')
const img7 = new Record('assets/images/gallery7.png')
const img8 = new Record('assets/images/gallery8.png')
console.log(img1)

let tableGallery = `
    <table>
    <body>
        <tr>
            <td>
                <img src=${img1.img} alt="gallery1" />
            </td>
            <td>
                <img src=${img2.img} alt="gallery2" />
            </td>
            <td>
                <img src=${img3.img} alt="gallery3" />
            </td>
            <td>
                <img src=${img4.img} alt="gallery4" />
            </td>
        </tr>
        <tr>
            <td>
                <img src=${img5.img} alt="gallery5" />
            </td>
            <td>
                <img src=${img6.img} alt="gallery6" />
            </td>
            <td>
                <img src=${img7.img} alt="gallery7" />
            </td>
            <td>
                <img src=${img8.img} alt="gallery9" />
            </td>
        </tr>
    </body>
    </table>
`

document.querySelector('.gallery-photos').innerHTML = tableGallery;
