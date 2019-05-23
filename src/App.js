import React,{Component} from 'react';
// import './App.css';
import ListOfTasks from "./Components/ListOfTasks";
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            lists:{
                name:[],
                Ids: [1],
            },
            count: 2,
        }
    }
    render() {

        const listIds = this.state.lists.Ids.map((elem, key) => elem?
            <ListOfTasks key={elem.toString()}
                         id={elem.toString()}
                         saveIdOfList = {this.saveIdOfList}
                         pullNameOfList = {this.pullNameOfList}
            />: null);
        return (
                <div className="container-list" >
                    {listIds}
                    {console.log(this.props.id)}
                </div>
        );
    }

    pullNameOfList = (value) => {
        const nameOfLists = this.state.name;
        nameOfLists.push(value);

        this.setState({
            name: nameOfLists
        })
    };

    saveIdOfList = () => {
        const listIds = this.state.lists.Ids;
        listIds.push(this.state.count);


        this.setState({
            Ids: listIds,
            count: this.state.count + 1
        })
    };

}


export default App ;
