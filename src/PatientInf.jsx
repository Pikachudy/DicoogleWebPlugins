import * as React from 'react';
const styles = {
    container:{
        display: "grid",
        gridColumnGap: "10px",
        gridTemplateColumns: "30% 45%"
    },
    photo: {
        width: "100%",
        marginRight:"5%",
        gridColumn: "1",
    },
    inputFeild: {
        borderRadius:"10px",
        height:"100%",
        backgroundColor:"#bfbfbf",
        gridColumn: "2",
    },
    form:{
        marginLeft:"10%",
        marginTop:"5%",
        fontSize:"1.3em",

    },
    label:{
        display: "inline-block",
        width: "30%",
        height:"30px",
        lineHeight:"30px",
        verticalAlign: "left",
        textAlign: "left",
        textAlignLast: "left",
        marginBottom: "6%"
    },
    input:{
        fontSize:"1em",
        borderRadius:"4px",
        border:"transparent",
    },
    textarea:{
        fontSize:"1em",
        borderRadius:"4px",
        border:"transparent",
        verticalAlign: "top",
        width:"61%",
        height:"120px",
        resize:"none"
    }
};
class PatientInf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientInfo:{
                name:"",
                id:"",
                gender:"male",
                age:"",
                illness:"",
                illnessDes:""
            }
        }
    }
    flashInfo = () =>{
        this.props.editPersonInfo(this.state.patientInfo);
    }
    componentDidMount(){
        this.props.onRef(this);
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.photo}>
                    <img style={styles.photo}
                         src="https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg"
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
                            value={this.state.patientInfo.name}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.name=e.target.value;
                                this.setState({patientInfo: newVal})
                            }}
                        />
                        <br />
                        <label style={styles.label}>
                            身份证号码:
                        </label>
                        <input
                            style={styles.input}
                            type="text"
                            value={this.state.patientInfo.id}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.id=e.target.value;
                                this.setState({patientInfo: newVal})
                            }}
                        />
                        <br />
                        <label style={styles.label}>
                            性别:
                        </label>
                        <select
                            style={styles.input}
                            value={this.state.patientInfo.gender}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.gender=e.target.value;
                                this.setState({patientInfo: newVal})
                            }}
                        >
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        <br/>
                        <label style={styles.label}>
                            年龄:
                        </label>
                        <input
                            style={styles.input}
                            type="number"
                            min="1"
                            value={this.state.patientInfo.age}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.age=e.target.value;
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
                            value={this.state.patientInfo.illness}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.illness=e.target.value;
                                this.setState({patientInfo: newVal})
                            }}
                        />
                        <br/>
                        <label style={styles.label}>
                            病例描述:
                        </label>
                        <textarea
                            style={styles.textarea}
                            value={this.state.patientInfo.illnessDes}
                            onChange={(e)=>{
                                let newVal = this.state.patientInfo;
                                newVal.illnessDes=e.target.value;
                                this.setState({patientInfo: newVal})
                            }}
                        />
                    </form>
                </div>
            </div>
        )
    }
}
export default PatientInf