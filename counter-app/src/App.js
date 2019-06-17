import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class  App extends Component  {

      state = {
          counters: [
              {id:1, value: 5},
              {id:2, value: 0},
              {id:3, value: 0},
              {id:4, value: 1}
          ]

      }

      handleReset = () => {
          console.log('reseting....')
          const updatedCounters = this.state.counters.map(c => {
                  c.value = 0;
                  return c;
          })
          this.setState({counters: updatedCounters})
      }

      handleDelete = (counterId) => {
          /* the recommended way to update attribute counters is by calling setState
          * method provided by react
          */
          console.log('DEEDDD', counterId)
        /* to delete a row return all rows that do not match the given id*/
          const filterCounters = this.state.counters.filter(c => c.id != counterId )
          this.setState({counters: filterCounters});
          console.log('Delete Handler #', counterId)
      }

      /* the recommended way to update attribute counters is by calling setState
      * method provided by react
      */
      /* to delete a row return all rows that do not match the given id*/
      handleIncrement = (counter) => {
          //const filterCounters = this.state.counters.filter(c => c.id != counterId )
          //this.setState({counters: filterCounters});
          console.log('Increment Counter #', counter.id)
          //the right way to update a specific object in the array is by cloning
          //triple dots clones the array after the dots and stores the result in const counters
          const counters =[...this.state.counters]
          //at this point const counters and this.state.counters are identical
          //now find the the index of the matching input parameter i.e object counter
          let index = counters.indexOf( counter )
          counters[index].value++ //increment the matching object
          this.setState({counters: counters}) //now call reactjs setState to update the value
      }

      render() {
          return (
            <React.Fragment>
              <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length }>
              </NavBar>
              <main className="container">
                <Counters counters={this.state.counters}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement} />
              </main>
            </React.Fragment>
          );

      }
}


export default App;
