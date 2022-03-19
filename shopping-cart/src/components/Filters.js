import { Button, Form } from "react-bootstrap"
import Rating from "./Rating"
import { CartState } from "../Context/Context";

const Filter = ()=>{

    const {productState: {byStock, byFastDelivery,sort,byRating}, 
    productDispatch,} = CartState();

    console.log(byStock,byFastDelivery,sort,byRating)

    return (
        <div className="filters">
            <span className="title">Filters Products</span>
            <span>
                <Form.Check
                    inline label="Ascending" name="group1" type="radio" id={`inline-1`}
                    onChange={()=>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload: "lowToHigh"
                    })}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline label="Descending" name="group1" type="radio" id={`inline-2`}
                    onChange={()=>
                        productDispatch({
                            type:"SORT_BY_PRICE",
                            payload: "highToLow"
                        })}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            
            <span>
                <Form.Check
                    inline label="Include Out of Stock" name="group1" type="checkbox" id={`inline-3`}
                    onChange={()=>
                        productDispatch({
                            type: "FILTER_BY_STOCK"
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline label="Fast Delivery Only" name="group1" type="checkbox" id={`inline-4`}
                    onChange={()=>
                        productDispatch({
                            type:"FILTER_BY_DELIVERY"
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{paddingRight: 10}}>Rating: </label>
                <Rating 
                rating={byRating} 
                style={{cursor:"pointer"}}
                onClick={(i)=>
                    productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i+1,
                    })
                }
                />
            </span>
            <Button variant="light"
            onClick={()=>
            productDispatch({
                type:"CLEAR_FILTERS"
            })
            }
            >Clear Filter</Button>
        </div>
    )
}

export default Filter