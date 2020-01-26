import React, { Component } from 'react'
import axios from "../helpers/axiosI"
import Question from "./question"
export default class AllQuestions extends Component {

    constructor(props){
        super(props)

        this.state={
            Qu:[]
        }
    }
    componentDidMount(){
        
          
               axios.get("Question/getall").then(e=>{
                this.setState({Qu:e.data})   
                
                console.log(e.data)})
            
            
    }
    render() {
        return (
            <div>
                {
        this.state.Qu.map(e=>(<Question key={e.id} body = {e.body} header={e.header}></Question> ))
                }
                
            </div>
        )
    }
}
