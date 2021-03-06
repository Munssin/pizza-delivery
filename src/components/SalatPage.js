import React, {Component} from "react";

import { connect } from "react-redux";

import Card from "./UI/Card";

import {fetchSalat} from "../redux/actions/salatActions";

class SalatPage extends Component{

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const {fetchSalat} = this.props;
        fetchSalat();
    }

    renderCard = () => {
        return this.props.salats.map(item => {
            return <Card
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                size={item.size}
                weight={item.weight}
                price={item.price}
            />;
        })
    };


    render() {
        return(
        <div className="pizza-main">
            <div className="main-banner">
                <h1>Salat Title</h1>
            </div>

            <div className="catalog">
                <div className="catalog-container">
                    {this.renderCard()}
                </div>
            </div>
        </div>
     )
    }
}

const mapDispatchToProps = {
    fetchSalat
}

const mapStateToProps = (state) => {
    return {
        salats: state.salat.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalatPage);
