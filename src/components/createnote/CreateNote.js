import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Upload, Icon, message } from "antd";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SearchInput from "../common/SearchInput";
import SelectOption from "../common/SelectOption";
import ModalDialog from "../common/ModalDialog";
import SearchPatient from "./SearchPatient";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreateNote.css";

import { getReason } from "../../actions/reasonActions";
import { getNoteType } from "../../actions/noteTypeActions";
import { addNote, toggleSuccess } from "../../actions/noteActions";
import { decode } from "base64-arraybuffer";

class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reason: [],
            notetype: [],
            visible: false,
            confirmLoading: false,
            patientId: "",
            patientName: "",
            reasonopt: "",
            notetypeopt: "",
            description: EditorState.createEmpty(),
            shortDescription: "",
            fileList: [],
            newFile: [],
            loading: false,
            success: false
        };
    }

    componentDidMount() {
        this.props.getReason();
        this.props.getNoteType();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reason.reason !== this.props.reason.reason) {
            this.setState({
                reason: this.props.reason.reason
            });
        }

        if (prevProps.notetype.notetype !== this.props.notetype.notetype) {
            this.setState({
                notetype: this.props.notetype.notetype
            });
        }

        if (this.props.note.success) {
            message.success("Save successfully", 2.5);
            this.props.toggleSuccess();
        }
    }

    handleFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSelectChange = (value, option) => {
        this.setState({ [option.props.name]: value });
    };

    onEditorStateChange = editorState => {
        this.setState({
            description: editorState
        });
    };

    openSearchModal = e => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 2000);
    };

    populatePatient = patientData => {
        this.setState({
            patientId: patientData[0].Id,
            patientName:
                patientData[0].FirstName + " " + patientData[0].LastName
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
            patientId: " ",
            patientName: " "
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { fileList } = this.state;
        const noteData = {
            NoteTypeId: this.state.notetypeopt,
            NoteText: draftToHtml(
                convertToRaw(this.state.description.getCurrentContent())
            ),
            ShortDescription: this.state.shortDescription,
            PatientId: this.state.patientId,
            PatientName: this.state.patientName,
            ProviderId: 2018,
            CreatedBy: "Terry Lee",
            CreatedById: 2018,
            ReasonCodeId: this.state.reasonopt,
            DocumentList: this.state.newFile,
            Subject: "Jade Redux Test"
        };

        console.log(noteData);
        this.props.addNote(noteData);
    };

    render() {
        const { visible, confirmLoading } = this.state;
        const { loading } = this.props.note;
        //const fileList = [];
        const props = {
            onRemove: file => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList
                    };
                });
            },
            beforeUpload: file => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file]
                }));
                return false;
            },
            onChange: file => {
                var files = {};
                var reader = new FileReader();
                reader.readAsDataURL(file.file);
                var self = this;
                reader.onload = function() {
                    //var bytes = decode(reader.result);
                    var bytefile = reader.result;
                    //var binaryString = String.fromCharCode.apply(null, bytefile);
                    files.Base64Data = bytefile.split(",")[1];
                    files.DocumentName = file.file.name;
                    self.setState(({ newFile }) => ({
                        newFile: [...newFile, files]
                    }));
                };
            },
            fileList: this.state.fileList
        };

        return (
            <div className="createnote-container">
                <Form onSubmit={this.handleSubmit}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <TextInput
                                label="Short Note Description"
                                placeholder="Enter Short Note Description"
                                onChange={this.handleFormChange}
                                name="shortDescription"
                                value={this.state.shortDescription}
                            />
                        </Col>

                        <Col span={6}>
                            <SelectOption
                                name="reasonopt"
                                onSelect={this.handleSelectChange}
                                options={this.state.reason}
                                label="Reason Code"
                                optionFilterProp="children"
                            />
                        </Col>

                        <Col span={6}>
                            <SelectOption
                                name="notetypeopt"
                                onSelect={this.handleSelectChange}
                                options={this.state.notetype}
                                label="Note Type"
                                optionFilterProp="children"
                            />
                        </Col>

                        <Col span={6}>
                            <SearchInput
                                label="Patient Name"
                                placeholder="Search a Patient Name"
                                onClick={this.openSearchModal}
                                name="patientName"
                                value={this.state.patientName}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Editor
                                editorClassName="editor-container"
                                onEditorStateChange={this.onEditorStateChange}
                                editorState={this.state.description}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={24}>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> Select File
                                </Button>
                            </Upload>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={24}>
                            <Button
                                style={{
                                    borderColor: "#43B388",
                                    backgroundColor: "#43B388",
                                    color: "white"
                                }}
                                loading={loading}
                                htmlType="submit"
                            >
                                Save
                            </Button>{" "}
                            <Button type="default">
                                <Link to="/">Cancel</Link>
                            </Button>
                        </Col>
                    </Row>

                    <ModalDialog
                        title="Assign Patient to Note"
                        visible={visible}
                        handleOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        handleCancel={this.handleCancel}
                        width="900px"
                    >
                        <SearchPatient populatePatient={this.populatePatient} />
                    </ModalDialog>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reason: state.reason,
    notetype: state.notetype,
    note: state.note
});

CreateNote.propTypes = {
    getReason: PropTypes.func.isRequired,
    getNoteType: PropTypes.func.isRequired,
    reason: PropTypes.object.isRequired,
    notetype: PropTypes.object.isRequired,
    toggleSuccess: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getReason, getNoteType, addNote, toggleSuccess }
)(CreateNote);
