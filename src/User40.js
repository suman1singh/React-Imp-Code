import React, { PureComponent } from 'react';

class User40 extends PureComponent {
    render() {
        console.log("Re-rendering happen in child");
        return (
            <>
                <h1>Child component{this.props.data.name}</h1>
            </>
        );
    }
}

export default User40;