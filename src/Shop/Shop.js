import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
            ],
        }
        this.shopAdd = this.shopAdd.bind(this)
        this.shopDel = this.shopDel.bind(this)
    }

    shopAdd(userId) {
        let productIndex = [...this.state.products].findIndex(product => {
            return product.id === userId
        })
        console.log('userId shop', userId);

        let { id, title, price, img } = { ...this.state.products[userId - 1] }
        let newItem = { id, title, price, img }
        console.log('newItem', newItem);
        this.setState({
            shoppingCart: [...this.state.shoppingCart, newItem]
        })
        console.log('shoppingCart', this.state.shoppingCart);
    }

    shopDel(itemId) {
        let items = [...this.state.shoppingCart]
        let mainItemIndex = items.findIndex(item => {
            return item.id === itemId
        })

        items.splice(mainItemIndex, 1)
        this.setState({
            shoppingCart: items
        })
        console.log(items);
    }

    EmptyHandler(event) {
        this.setState({
            shoppingCart: []
        })
    }
    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                        {this.state.products.map(product => (
                            <Product key={product.id}{...product}
                                addShopHandler={this.shopAdd}
                            />
                        ))}
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                        {this.state.shoppingCart.map(product => (
                            <CartProduct key={product.id} {...product} onRemove={this.shopDel} />
                        ))}
                    </div>
                    <button
                        class="btn btn-primary btn-purchase"
                        type="button"
                        //value={ }
                        onClick={(event) => this.EmptyHandler(event)}
                    >
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {this.state.socials.map(social => (
                                <Social key={social.id} {...social} />
                            ))}
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}