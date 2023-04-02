import './Product.css'

export default function Product({ title: productTitle, image = '11.png', price, count, children }) {

    //console.log(typeof props.price);

    //let { title, image, price, count } = props
    let title = "Product Card"


    //let image='10.jpg'  WRONG
    return (
        // props.count &&

        <div>
            <h2>{productTitle}</h2>
            <div className="card">
                <img src={image} alt="product"></img>
                <h1>{title}</h1>
                <p className="price">${price}</p>
                <p> It is the best smart phone for 2023. It is the best smart phone for 2023. It is the best smart phone for 2023. It is the best smart phone for 2023</p>
                {children}
                <p><button>Add To Cart</button></p>

            </div>
        </div>
    )

} 