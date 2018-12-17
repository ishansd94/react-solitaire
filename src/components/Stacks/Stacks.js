import React from 'react';
import Stack from './Stack/Stack';



const Stacks = (props)=>{

        const stacks = props.stacks.map((stack, index) =>
            <div key={index} className="col-xs-2">
                <Stack cards={stack} index={index} onCardDrop={props.onCardDrop}/>
            </div>
        );

        return stacks;


};


export default Stacks