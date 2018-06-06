import React from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const SearchInput = ({
    name,
    placeholder,
    onClick,
    validateStatus,
    label,
    value
}) => {
    return (
        <FormItem label={label}>
            <Input.Search
                placeholder={placeholder}
                onClick={onClick}
                name={name}
                value={value}
            />
        </FormItem>
    );
};

SearchInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchInput;
