import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Row, Col, Button, Table, Spin, DatePicker } from "antd";

import { getPatient } from "../../actions/patientActions";

class SearchPatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            phonenumber: "",
            city: "",
            loading: false,
            selectedRowKeys: [],
            selectedRow: [],
            dob: ""
        };
    }

    onSearch = () => {
        const { firstname, lastname, phonenumber, city, dob } = this.state;
        const patientData = {
            firstname,
            lastname,
            phonenumber,
            city,
            dob
        };

        this.props.getPatient(patientData);
    };

    onSelectChange = (selectedRowKeys, selections) => {
        this.setState({ selectedRowKeys, selectedRow: selections });
        this.props.populatePatient(selections);
    };

    handleFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onChangeDate = (date, dateString) => {
        this.setState({ dob: dateString });
    };

    renderTable = () => {
        const { patient, loading } = this.props.patient;
        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            selections: "text",
            onChange: this.onSelectChange,
            type: "radio"
        };
        const columns = [
            {
                title: "First Name",
                dataIndex: "FirstName",
                key: "FirstName"
            },
            {
                title: "Lastname",
                dataIndex: "LastName",
                key: "LastName"
            },
            {
                title: "DOB",
                dataIndex: "StrPatientDOB",
                key: "StrPatientDOB"
            },
            {
                title: "Phone Number",
                dataIndex: "PhoneInfo",
                key: "PhoneInfo"
            },
            {
                title: "City",
                dataIndex: "City",
                key: "City"
            }
        ];

        if (loading) {
            return (
                <Spin
                    size="large"
                    style={{
                        margin: "auto",
                        width: "100%"
                    }}
                />
            );
        } else {
            return (
                <Table
                    columns={columns}
                    dataSource={patient}
                    size="small"
                    rowKey="Id"
                    pagination={{ pageSize: 5 }}
                    bordered
                    rowSelection={rowSelection}
                />
            );
        }
    };

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <TextInput
                            placeholder="First Name"
                            onChange={this.handleFormChange}
                            name="firstname"
                            value={this.state.firstname}
                        />
                    </Col>
                    <Col span={8}>
                        <TextInput
                            placeholder="Last Name"
                            onChange={this.handleFormChange}
                            name="lastname"
                            value={this.state.lastname}
                        />
                    </Col>
                    <Col span={8}>
                        <DatePicker
                            onChange={this.onChangeDate}
                            format="YYYY/MM/DD"
                        />
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <TextInput
                            placeholder="Phone Number"
                            onChange={this.handleFormChange}
                            name="phonenumber"
                            value={this.state.phonenumber}
                        />
                    </Col>
                    <Col span={6}>
                        <TextInput
                            placeholder="City"
                            onChange={this.handleFormChange}
                            name="city"
                            value={this.state.city}
                        />
                    </Col>
                    <Col span={6} offset={6}>
                        <Button
                            style={{
                                borderColor: "#2592FC",
                                backgroundColor: "#2592FC",
                                color: "white",
                                float: "right"
                            }}
                            onClick={this.onSearch}
                        >
                            Search Patient
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>{this.renderTable()}</Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    patient: state.patient
});

SearchPatient.propTypes = {
    getPatient: PropTypes.func.isRequired,
    populatePatient: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getPatient })(SearchPatient);
