import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    
    componentDidMount() {

        fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
            .then((res) => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }


    render() {


        const { isLoaded, items } = this.state;
        console.log(items);

        if (!isLoaded) { 
            return <div>Loading....</div>;
          }
        else {  

        return (
            <div className="App">
                <ul>
                    {items.paid.map(item => (
                        <li key={item.city}>
                            Name: {item.city} | Email: {item.user_id}
                        </li>
                    ))}
                </ul>
            </div>
        );
      }
   }
}     

export default App;