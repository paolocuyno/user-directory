import { render } from "react-dom";
import React,{Component} from 'react'
import IndexCard from "./IndexCard";
import Navigation from './Navigation'
import data from '../data'

export default class IndexDisplay extends Component {
    constructor(){
        super();
        this.state={
            data,
            index:0
        }
        this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this)
    }

        increase(){
            if(this.state.index<this.state.data.length-1){
                this.setState({index:this.state.index+1})
            }
        }

        decrease(){
            if(this.state.index>0){
                this.setState({index:this.state.index-1})
            }
        }
render(){
    return(
        <div className='container'>
            <IndexCard data={this.state.data}
            index={this.state.index}/>
            <Navigation increase={this.increase} decrease={this.decrease}/>



        </div>
    )
}
}