import React, { Component } from 'react';
import { commonApi } from '../actions';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: "",
            imgClick: false, id: '', colorChange: false, index: ''
        }

    }

    async componentDidMount() {
        try {

            const response = await this.props.commonApi('products', '', 'get', 'PRODUCT-LIST');
            console.log(response)
            if (response.status === 200) {
                this.setState({ productList: response.data });
            }
        }
        catch (err) {
            throw (err);
        }
    }

    buttonShow = (id) => {
        this.setState({ id: id });
        if (this.state.imgClick)
            this.setState({ imgClick: !this.state.imgClick })
    }
    sizeShow = (id) => {
        this.setState({ imgClick: !this.state.imgClick, id: id,colorChange:false });
    }
    changeColorFunc(index) {
        this.setState({ colorChange: true, index: index });
    }

    render() {
        let { productList, id } = this.state;
        return (
            <div className="container">
                <div className="root-1">
                    <div className="row" id="scroll-container-1">
                        {
                            productList && productList.map((product, key) => {
                                return (
                                    <div className="col-md-2" id="scroll-1" key={key}>
                                        {/* <div className="scroll-view-container"> */}
                                        <img alt="" src={product.imgUrl} className="product-img" onMouseEnter={() => this.buttonShow(product.id)} />
                                        {
                                            product.id === id ?
                                                <div id="button">
                                                    <button type="button" className="btn addto-btn" onClick={() => this.sizeShow(product.id)}>ADD TO BAG</button>
                                                    <button className="btn wishlist-btn" type="button" onClick={() => this.sizeShow(product.id)}> WISHLIST</button>
                                                    {
                                                        product.id === id && this.state.imgClick ?
                                                            <div className="size">
                                                                <h5 className="header-title">Select Size</h5>
                                                                <div className="col-md-12">
                                                                    {
                                                                        product.size.map((sizes, index) => {
                                                                            return (

                                                                                <button key={index} className="size-btn" style={this.state.colorChange && index === this.state.index ? { backgroundColor: "pink",borderColor:'pink' } : null} onClick={() => this.changeColorFunc(index)}>{sizes} </button>)
                                                                        })}

                                                                </div>
                                                            </div>

                                                            : null
                                                    }
                                                </div>

                                                : null
                                        }
                                        <h2 className="product-title">{product.name}</h2>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>
                                    // </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>


        );
    }
}

export default connect(null, { commonApi })(ProductList);