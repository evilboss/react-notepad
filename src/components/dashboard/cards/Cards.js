import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Icon, Button } from "antd";
import "./Cards.css";

const Cards = ({ count, text, icon, onView, onAdd }) => {
    function RenderAdd() {
        if (onAdd) {
            return (
                <Button className="cards-button">
                    <Link to="/createnote">Add</Link>
                </Button>
            );
        }

        return null;
    }

    return (
        <Card className="card-container">
            <div className="detail-container">
                <div>
                    <img src={icon} className="cards-icon" />{" "}
                    <span className="cards-text">{text}</span>
                </div>
                <p className="cards-count">{count}</p>
            </div>

            <div className="button-container">
                <Button className="cards-button" onClick={onView}>
                    View
                </Button>
                <RenderAdd />
            </div>
        </Card>
    );
};

Cards.propTypes = {
    count: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onView: PropTypes.func.isRequired
};

export default Cards;
