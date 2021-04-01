import styled from 'styled-components'
import React from 'react'
import {Filters} from '../components/Filters'
import {Footer} from '../components/Footer'
import {Card} from '../components/Cards'
import {Header} from '../components/Header'
import axios from 'axios'
import { NetworkLockedSharp } from '@material-ui/icons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CardsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 250px);

`

export default class App extends React.Component {
  state= {
    minimum: '',
    maximum: '',
    searchName:'',
    ordination:'',
    jobs: []
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs = async () => {
    try {
      let response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasThree/jobs`
      )
      console.log(response.data.jobs);
      this.setState({
        jobs: response.data.jobs
      })
    } catch (error) {
      console.log(error.response);
    }
  }
  // função que altera o estado do app

  onChageMinimum = (event) => {
    this.setState({minimum: event.target.value})
  }
  onChageMaximum = (event) => {
    this.setState({maximum: event.target.value})
  }
  onChageSearchName = (event) => {
    this.setState({searchName: event.target.value})
  }
  onChageOrdination = (event) => {
    this.setState({ordination: event.target.value})
  }
  onChageRemuneration = (event, a) =>{
    console.log(event, a)
  }
  //fução que organiza o array 
  orderByFilters = () => {
    return this.state.jobs.filter((job) =>{
      return !this.state.maximum || job.value <= this.state.maximum
    })
     .filter((job) => {
       return !this.state.minimum || job.value >= this.state.minimum
     })
     .filter((job) => {
       return !this.state.searchName || (job.title.toUpperCase().includes(this.state.searchName.toUpperCase()) || job.description.toUpperCase().includes(this.state.searchName.toUpperCase()))
   })
  }

  orderBy = (allJobs) => {
    switch (this.state.ordination) {
      case "title":
          return allJobs.sort((a, b) => {
            return (a.title>b.title) ? 1 : ((b.title>a.title) ? -1 : 0)
          })
          case "value":
            return allJobs.sort((a, b) => {
              return a.value-b.value
            })
            case "deadline":
              let intermediateArray = [...allJobs]
              let arrayWithOrderNumber = intermediateArray.map((job) => {
                let array = job.dueDate.split('-')
                let dayNumber = Number(array[2]) + 30 * Number(array[1]) + 365 * Number(array[0])
                let jobWithOrderNumber = { ...job, orderNumber: dayNumber }
                return jobWithOrderNumber
              })
              let orderedArray = arrayWithOrderNumber.sort((a, b) => {
                return a.orderNumber - b.orderNumber
              })
              orderedArray.forEach((job) => {
                delete job.orderNumber
              })
              return orderedArray
      
      default:
        return allJobs;
    }
  }

  render() {
   
   let allJobs = this.orderByFilters();
   allJobs = this.orderBy(allJobs)
    const allJobsCards = allJobs.map((job) =>{
       const paymentMethods = job.paymentMethods.map((methods) =>{
          return <p>{methods}</p>
       })

      return (
        <Card key={job.id}
        id={job.id}
        name={job.title}
        value={job.value}
        taken={job.taken}
        paymentMethods={paymentMethods}
        description={job.description}
        dueDate ={job.dueDate}
        getJobs={this.getJobs}
      />
      )
    })
  return (
    <div>
      <Header toHome={this.props.toHome}/>
    <Container>
      <Filters
      minimum={this.state.minimum}
      maximum={this.state.maximum}
      searchName={this.state.searchName}
      onChageMinimum={this.onChageMinimum}
      onChageMaximum={this.onChageMaximum}
      onChageSearchName={this.onChageSearchName}
      onChageOrdination={this.onChageOrdination}
      onChageRemuneration={this.onChageRemuneration}
      />
      <CardsBox>
        {allJobsCards}
    </CardsBox>
    </Container>
    <Footer/>
    </div>
  );
  }
}