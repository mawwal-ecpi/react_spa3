import React, {Component} from "react";

class Stuff extends Component
{
    render()
    {
        return (
            <div>
                <h2>STUFF</h2>
                <p>This is a 5 line list of stuff, using ol and li:</p>
                <ol>
                    <li>Line 1</li>
                    <li>Line 2</li>
                    <li>Line 3</li>
                    <li>Line 4</li>
                    <li>Line 5</li>
                </ol>
            </div>);
    }
}

export default Stuff;