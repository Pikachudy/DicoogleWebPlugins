import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PatientInf from "./PatientInf.jsx";
import ImageSelect from "./ImageSelect.jsx";
/* global Dicoogle */
const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const styles = {
    btn_css:{
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
    input_css:{
        width: "60%",
        height: "100%",
        padding: "6px 12px",
        marginRight:"10px",
        border: "1px solid #aaa",
        borderRadius: "4px"
    },
    MineComponent:{
        height: "50%"
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            current: 0,
            patientInfo:{
                name:"",
                id:"",
                gender:"",
                age:1,
                illness:"",
                illnessDes:""
            },
            imageInfo:{
                name:"",
                url:""
            }
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // 防止异步问题，在此进行组件回传值判断
    editPatientInfo = (newVal)=>{
        this.setState({patientInfo: newVal},()=>{
            alert(
                "(此alert仅在测试时为了确认已获取输入值，可使用其发送请求)\n"+
                this.state.patientInfo.name+'\n'+
                this.state.patientInfo.id+'\n'+
                this.state.patientInfo.gender+'\n'+
                this.state.patientInfo.age+'\n'+
                this.state.patientInfo.illness+'\n'+
                this.state.patientInfo.illnessDes+'\n'
            );
        })
    }
    editImageInfo = (newVal)=>{
        this.setState({imageInfo:newVal},()=>{
            alert(
                "(此alert仅在测试时为了确认已获取输入值，可使用其发送请求)\n"+
                "选中的图片信息:\n"+
                this.state.imageInfo.name+"\n"+
                this.state.imageInfo.url+"\n"
            )
        })
    }

    next() {
        switch (this.state.current){
            case 0:
                this.PatientInf.flashInfo();
                break;
            case 1:
                this.ImageSelect.flashInfo();
                break;
        }
        this.setState({current: this.state.current + 1});
    }

    prev() {
        this.setState({current: this.state.current - 1});
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let nextItems = this.state.items.concat([this.state.text]);
        let nextText = '';
        this.setState({items: nextItems, text: nextText});
    }
    onRefPatientInf = (ref) => {
        this.PatientInf = ref
    }
    onRefImageSelect = (ref)=>{
        this.ImageSelect = ref;
    }
    render() {
        return (
            <div>
                <div style={styles.MineComponent}>
                    {this.state.current === 0 && (
                        <PatientInf
                            editPersonInfo={this.editPatientInfo}
                            onRef={this.onRefPatientInf}
                        ></PatientInf>
                    )}
                    {this.state.current === 1 && (
                        <ImageSelect
                            editImageInfo={this.editImageInfo}
                            onRef={this.onRefImageSelect}
                        ></ImageSelect>
                    )}
                    {this.state.current === 2 && (
                        <div>
                            <h2>界面3</h2>
                            <h3>此处应为预测模型位置，待确认后再挂载前端组件</h3>
                        </div>
                    )}
                </div>
                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {this.state.current < steps.length - 1 && (
                        <button style={styles.btn_css} onClick={this.next}>
                            Next
                        </button>
                    )}
                    {this.state.current === steps.length - 1 && (
                        <button style={styles.btn_css} onClick={() => alert('Processing complete!')}>
                            Done
                        </button>
                    )}
                    {this.state.current > 0 && (
                        <button
                            style={{
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
                                marginRight: "5px",
                                margin: '0 8px',
                            }}
                            onClick={this.prev}
                        >
                            Previous
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default class MyPlugin {

    constructor() {
        this.r = null;
    }

    /**
     * @param {DOMElement} parent
     * @param {DOMElement} slot
     */
    render(parent, slot) {
        this.r = <TodoApp/>;
        ReactDOM.render(this.r, parent);
    }
}
