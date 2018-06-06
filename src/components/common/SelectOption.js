import React from "react";
import { Form, Select } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const SelectOption = ({
    name,
    placeholder,
    value,
    onSelect,
    validateStatus,
    help,
    extra,
    type,
    options,
    label,
    optionFilterProp
}) => {
    const optionList = options.map(option => (
        <Select.Option value={option.Id} key={option.Id} name={name}>
            {option.Name}
        </Select.Option>
    ));

    return (
        <FormItem
            validateStatus={validateStatus ? "error" : ""}
            help={help}
            extra={extra}
            hasFeedback
            label={label}
        >
            <Select
                onSelect={onSelect}
                name={name}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
            >
                {optionList}
            </Select>
        </FormItem>
    );
};

SelectOption.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    value: PropTypes.string,
    validateStatus: PropTypes.string,
    help: PropTypes.string,
    extra: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array.isRequired
};

export default SelectOption;
