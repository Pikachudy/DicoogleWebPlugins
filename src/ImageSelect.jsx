import * as React from 'react';
const styles = {
    container:{
        display: "grid",
        gridColumnGap: "10px",
        gridTemplateColumns: "45% 30%"
    },
    photo: {
        width: "100%",
        marginRight:"5%",
        gridColumn: "2",
    },
    inputField: {
        borderRadius:"10px",
        height:"500px",
        backgroundColor:"#bfbfbf",
        gridColumn: "1",
        overflow:"auto"
    },
    ul:{
        listStyleType: "none",
        lineHeight: "30px",
        textAlign: "center",
    },
    li:{
        border: "1px solid #000",
        borderRadius:"3px",
        backgroundColor: "white",
        width: "88%",
    },
    title:{
        textAlign: "center"
    }

};
class ImageSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imageList: [
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                },
                {
                    url: "https://celebmafia.com/wp-content/uploads/2014/11/taylor-swift-photoshoot-for-time-magazine-november-2014_1.jpg",
                    name: "Taylor Swift"
                },
                {
                    url: "https://pic4.zhimg.com/v2-ba0a1cdd88e2f4d928b841c0eb79f3d7_r.jpg?source=1940ef5c",
                    name: "Troye Sivan"
                },
                {
                    url: "https://ts1.cn.mm.bing.net/th/id/R-C.04e9c204ac5ff9776bb6520c99c3dfe5?rik=gzmYP6%2b5qskP2A&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fwennpic%2fcharlie-puth-2016-kids-choice-awards-01.jpg&ehk=gxwlS76xv97Lm5EZHMD09VBu7skjG1uJBwlDE3peb6M%3d&risl=&pid=ImgRaw&r=0",
                    name: "Charlie Puth"
                }

            ],
            currentIndex: 0
        }
    }
    getImageList(){
        return (
            this.state.imageList.map((item,index) => {
                return <li
                    style={styles.li}
                    key={index}
                    onClick={(e)=>this.changeIndex(index)}
                >{item.name}</li>
            })
        )
    }
    changeIndex=(index)=>{
        this.setState({currentIndex : index});
    }
    flashInfo=()=>{
        this.props.editImageInfo(this.state.imageList[this.state.currentIndex]);
    }
    componentDidMount() {
        this.props.onRef(this);
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.inputField}>
                    <h3 style={styles.title}>
                        选择肿瘤图片
                    </h3>
                    <ul style={styles.ul}>
                        {this.getImageList()}
                    </ul>
                </div>
                <div style={styles.photo}>
                    <img style={styles.photo}
                         src={this.state.imageList[this.state.currentIndex].url}
                    />
                </div>
            </div>
        )
    }
}
export default ImageSelect;