import { CartState } from '../Context/Context'
import SingleProducts from './SingleProducts';
import './style.css'
import Filter from './Filters';

const Home = () => {
    const { state: {products} } = CartState();
    console.log(products)
    
    return (
        <div className='home'>
            <Filter/>
            <div className='productContainer'>
                {products.map((prod)=>{
                    return <SingleProducts prod={prod} key={prod.id}></SingleProducts>
                })}
            </div>
        </div>
    )
}

export default Home