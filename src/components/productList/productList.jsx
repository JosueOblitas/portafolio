import "./productList.css";
import Product from "../product/product";
import {products} from "../../data";
const ProductList = () =>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-tittle">
                    Create & Inspire. It's Lama
                </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quibusdam nobis iste beatae? Doloribus aperiam accusantium harum distinctio obcaecati officia. Dicta modi, dolorum et 
                    voluptatibus accusamus cupiditate nihil sunt placeat.
                </p>
            </div>
            <div className="pl-list">
              {products.map((item) =>(
                  <Product key={item.id} img={item.img} 
                  link={item.link} />
              ))}
            </div>
        </div>
    )

}
export default ProductList;