import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component
{
    state = {
        value:this.props.counter.value,
        imageUrl: "http://picsum.photos/200",
        products: [{'id':1, 'title': 'Mouse'}, {'id':2, 'title': 'Keyboard'}, {'id':3, 'title': 'HDD'}]
    }

    styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    }

    /*constructor( ) {
        super();
        console.debug('Constructor', this);
        this.incrementBasket = this.incrementBasket.bind(this)
    }*/

    renderProducts() {
        if (this.state.products.length === 0) return <p className="badge badge-warning">There are no products</p>
        return (
            <ul>
                {this.state.products.map(p => <li key={p.id} className="badge badge-warning m-2">{p.title}</li>)}
            </ul>
        );

    }

    incrementBasket = (product) => {
        this.setState( {value: this.state.value + 1});
        console.debug('Increment basket', this.state.value, product)
    }

    render() {
        console.log('props', this.props)

        let classes = this.getBadgeClass()

        return (

/*             <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button onClick={ () => this.incrementBasket() } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm">Delete</button>
                {this.renderProducts()}
            </React.Fragment>
 */
/* single source of truth this means the parenter component should track data values */

            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm">Delete</button>
                {this.renderProducts()}
            </React.Fragment>


        );
    }

    formatCount() {
        const {value} = this.props.counter;
        const {id} = this.props.counter;
        console.log('vvvv', value, id)
        return value === 0 ? "Zero" : value;
    }

    getBadgeClass() {
        let classes = "badge m-2"
        classes += (this.props.counter.value === 0) ? " badge-warning " : " badge-primary "
        return classes
    }
}


export default Counter;
