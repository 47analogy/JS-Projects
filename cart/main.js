const cardsData = [
    {
      name: 'Item 1',
      desc: 'Description for Item 1',
      price: '$10'
    },
    {
      name: 'Item 2',
      desc: 'Description for Item 2',
      price: '$17'
    },
    {
      name: 'Item 3',
      desc: 'Description for Item 3',
      price: '$20'
    },
    {
      name: 'Item 4',
      desc: 'Description for Item 4',
      price: '$55'
    }
  ]
  
  const cardItems = cardsData.map(data => {
    return (`
      <li class="cards-grid-item">
        <h2>${data.name}</h2>
        <p>${data.desc}</p>
        <p>${data.price}</p>
        <button type="button" class="add-btn">Add to cart</button>
      </li>
    `)
  }).join('')
  
  const cardsGrid = document.querySelector('.cards-grid')
  const cartList = document.querySelector('.cart-list')
  
  cardsGrid.insertAdjacentHTML('beforeend', cardItems)
  
  const allButtons = document.querySelectorAll('.add-btn')
  
  allButtons.forEach(button => {
    button.addEventListener('click', e => {
      const listItem = e.target.parentNode.cloneNode(true)
      cartList.appendChild(listItem)
    })
  })
  