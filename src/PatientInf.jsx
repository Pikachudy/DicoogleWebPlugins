import * as React from 'react';
import PatientsDB from "./data/PatientsDB";
import patientsDB from "./data/PatientsDB";

const styles = {
    btn_css: {
        display: "inline-block",
        padding: "6px 12px",
        marginBottom: "0",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        border: "1px solid transparent",
        borderRadius: "4px",
        backgroundColor: " #337ab7",
        color: "#fff",
        marginRight: "5px"
    },
    input_css: {
        width: "60%",
        height: "100%",
        padding: "6px 12px",
        marginRight: "10px",
        border: "1px solid #aaa",
        borderRadius: "4px"
    },
    container: {
        marginTop: "3%",
        display: "grid",
        gridColumnGap: "100px",
        gridTemplateColumns: "30% 45%",
    },
    photo: {
        width: "30vw",
        marginRight: "5%",
        gridColumn: "1",
    },
    inputFeild: {
        borderRadius: "10px",
        height: "100%",
        backgroundColor: "#bfbfbf",
        gridColumn: "2",
    },
    form: {
        marginLeft: "10%",
        marginTop: "5%",
        fontSize: "1.3em",
    },
    label: {
        display: "inline-block",
        width: "30%",
        height: "30px",
        lineHeight: "30px",
        verticalAlign: "left",
        textAlign: "left",
        textAlignLast: "left",
        marginBottom: "6%"
    },
    input: {
        fontSize: "1em",
        borderRadius: "4px",
        border: "transparent",
    },
    textarea: {
        fontSize: "1em",
        borderRadius: "4px",
        border: "transparent",
        verticalAlign: "top",
        width: "61%",
        height: "100px",
        resize: "none"
    }
};

class PatientInf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientInfo: {
                patientName: "",
                patientId: "",
                patientGender: "男",
                patientAge: "",
                patientDisease: "",
                patientDescription: "",
                patientPhoto: "",
            },
            searchPatientId: "",
            isExist: false
        }
    }

    searchPatient = () => {
        for (let i = 0; i < PatientsDB.length; i++) {
            if (PatientsDB[i].getPatientId() === this.state.searchPatientId) {
                this.setState({patientInfo: PatientsDB[i]});
                this.setState({isExist: true});
                console.log("exist")
                console.log(this.state.patientInfo)
                return
            }
        }
        console.log("not exist")
        this.setState({isExist: false});
    }
    flashInfo = () => {
        this.props.editPersonInfo(this.state.patientInfo);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入病人身份证号码"
                       value={this.state.searchPatientId}
                       onChange={(e) => {
                           let search = e.target.value;
                           this.setState({searchPatientId: search})
                       }}
                       style={styles.input_css}></input>
                <button style={styles.btn_css}
                        onClick={this.searchPatient}
                > 搜索
                </button>
                {this.state.isExist === true && (
                    <div style={styles.container}>
                        <div style={styles.photo}>
                            <img style={styles.photo}
                                 src={this.state.patientInfo.patientPhoto}
                            />
                        </div>
                        <div style={styles.inputFeild}>
                            <form style={styles.form}>
                                <label style={styles.label}>
                                    姓名:
                                </label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    value={this.state.patientInfo.patientName}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientName = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                />
                                <br/>
                                <label style={styles.label}>
                                    身份证号码:
                                </label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    value={this.state.patientInfo.patientId}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientId = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                />
                                <br/>
                                <label style={styles.label}>
                                    性别:
                                </label>
                                <select
                                    style={styles.input}
                                    value={this.state.patientInfo.patientGender}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientGender = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                >
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                                <br/>
                                <label style={styles.label}>
                                    年龄:
                                </label>
                                <input
                                    style={styles.input}
                                    type="number"
                                    min="1"
                                    value={this.state.patientInfo.patientAge}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientAge = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                />
                                <br/>
                                <label style={styles.label}>
                                    患者疾病
                                </label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    value={this.state.patientInfo.patientDisease}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientDisease = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                />
                                <br/>
                                <label style={styles.label}>
                                    病例描述:
                                </label>
                                <textarea
                                    style={styles.textarea}
                                    value={this.state.patientInfo.patientDescription}
                                    onChange={(e) => {
                                        let newVal = this.state.patientInfo;
                                        newVal.patientDescription = e.target.value;
                                        this.setState({patientInfo: newVal})
                                    }}
                                />
                            </form>

                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default PatientInf