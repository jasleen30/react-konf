import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  <div className="row start">
     {items.paid.map(item => ( 
  <div className = "col-md-4 col-sm-6 card img-thumbnail">
    
  <img src={item.imageURL} alt="no-image" style={{width: '100%'}} />
  <div className = "container">
    <h5><b>{item.confName}</b></h5>
    <p>{item.confStartDate}</p>
    <p>{item.entryType}</p>
    <p>{item.venue}</p>
    <span><a href={item.confUrl}><i className="icon-eye" /> View</a></span> 
  </div>
</div>

))}
</div>

        );
      }
   }
}     

export default App;