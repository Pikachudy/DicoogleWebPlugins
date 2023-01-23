import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoItems from "./TodoItems.jsx";
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
        marginTop:"3%",
        height: "50%"
    }
}
// function TodoItems(props) {
//     const createItem = (itemText, i) => {
//         return <li key={i}>{itemText}</li>;
//     };
//     return <ul>{props.items.map(createItem)}</ul>;
// }

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
                <form>
                    <input type="text" placeholder="Free text or advanced query" style={styles.input_css}></input>
                    <button type="submit" style={styles.btn_css}> Search</button>
                </form>
                {/*<h3>TODO List:</h3>*/}
                {/*<TodoItems items={this.state.items}/>*/}

                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <input onChange={this.onChange} value={this.state.text}/>*/}
                {/*    <button>{'Add #' + (this.state.items.length + 1)}</button>*/}
                {/*</form>*/}
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
                        <h2>组件3</h2>
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
