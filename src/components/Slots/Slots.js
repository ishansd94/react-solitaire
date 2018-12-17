import React, {Component} from 'react';

class Slots extends Component {
    styles = {
        "border": "1px solid red",
        "height": "150px",
        "margin": "5px"
    };

    state={
        slotsCount: 4,
        slots: []
    };

    componentDidMount() {

        let slots= [];

        for (let i=0; i < this.state.slotsCount; i++){
            slots.push([])
        }

        this.setState({
            slots: slots
        })
    }

    render() {

        const slots = this.state.slots.map((slot, index) =>
           <div key={index} className="col-sm-2" style={this.styles}>

           </div>
        );


        return (
            <div className="row">
                {slots}
            </div>
        )
    }
}

export default Slots;