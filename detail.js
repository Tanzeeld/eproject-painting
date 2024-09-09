var detail = [
  {
      id:1,
      Image: 'images/painting/abstract/13',
      title: 'Mix Media Abstract',
      productrating: 'fas fa-star',
      oldprice: '$160',
      newprice:'$175',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',


  },
  {
      id:2,
      Image: 'images/painting/abstract/16.jpg',
      title: 'Colors Of Circles',
      productrating: 'fas fa-star',
      oldprice: '$257.00',
      newprice:'$147',
      heading: 'About This Item:',
      desc: 'Buy Handpainted Art Painting by "Patena Print"',
      button: 'Add to Cart',
      

  },
  {
    id:3,
    Image: 'images/painting/abstract/3.webp',
    title: 'Still Life - Flower Vase',
    productrating: 'fas fa-star',
    oldprice: '$257.00',
    newprice:'$17.55',
    heading: 'About This Item:',
    desc: 'Buy Handpainted Art Painting by "Patena Print"',
    button: 'Add to Cart',
    

},
{
  id:4,
  Image: 'images/painting/abstract/15.jpg',
  title: 'Boats In The Harbor Abstract',
  productrating: 'fas fa-star',
  oldprice: '$257.00',
  newprice:'$13.6',
  heading: 'About This Item:',
  desc: 'Buy Handpainted Art Painting by "Patena Print"',
  button: 'Add to Cart',
  

},
{
id:5,
Image: 'images/painting/abstract/5.jpg',
title: 'Maples Love',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$50.5',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:6,
Image: 'images/painting/abstract/6',
title: 'Dandelions',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$43',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:7,
Image: 'images/painting/abstract/7',
title: 'Mountain Rhapsody',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$30',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:8,
Image: 'images/painting/abstract/8',
title: 'The Pleasure Zone',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$135',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:9,
Image: 'images/painting/abstract/9',
title: 'Abstract Wall',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$47',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:10,
Image: 'images/painting/abstract/10',
title: 'The Beach Breeze',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$60',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:11,
Image: 'images/painting/abstract/11',
title: 'Illuminated Golden Cave',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$150',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
{
id:12,
Image: 'images/painting/abstract/12',
title: 'Abstract Scenery',
productrating: 'fas fa-star',
oldprice: '$257.00',
newprice:'$80',
heading: 'About This Item:',
desc: 'Buy Handpainted Art Painting by "Patena Print"',
button: 'Add to Cart',


},
]
for(i = 0 ;i <= detail.length; i++)
{
  document.getElementById("cards").innerHTML += `
  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <a href="../detail.html?id=${i}">
    <div class="card">
    <img class="card-img-top" src="${detail[i].Image}" alt="">
      <div class="card-body">
        <h2 class="card-title1 text-center">${detail[i].title}</h2>
        <p>${detail[i].desc}</p>
        <h5 class="text-center">${detail[i].newprice}</h5>
          <div class="star text-center">
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
          </div>
        <div class="btn1">
        </div>
      </div>
      </div>
    </a>
  </div>
  `;
}
