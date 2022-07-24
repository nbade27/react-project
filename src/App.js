/*
  In this sample we will call an GET API and render data to UI

  we will use useEffect Hook from react.
  useEffect -> By using this hook, you tell React that your component needs to do something after render :)
  we also use useState to maintain state at different stages
  
  
  
  This is the sample API
  https://jsonplaceholder.typicode.com/users

  we will create useState and then we will assign the data fetched from that API
  then we will add data to the UI




  Next Updates : 
  1.If I click on country name then immadietly get the data
  2.Top 10 Universities
  3.Pagination
  4.Loader must come in middle
  5.Make search data as table elements(And need to write separate component if possible)
  

*/
import {useState} from 'react'
import LoadingSpinner from './components/LoadingSpinner'
export default function App(){
const[data,setData] = useState([])
const [country,setCountry] = useState('United+States')
const [isLoading, setIsLoading] = useState(false);
  /**
   * 
  http://universities.hipolabs.com/search?country=United+States
https://dog.ceo/api/breeds/image/random

   */
function clickHandler(){
  //adding spinner before loading
  setIsLoading(true);

  console.log('clicked the button');
  console.log('country',country);
  fetch(`http://universities.hipolabs.com/search?country=${country}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );

    }
    return response.json();
  })
  .then((actualData) => {
    console.log(actualData);
      setData(actualData);
     //stopping spinner after getting data
      setIsLoading(false);
  })
  .catch((err) => {
    setData([]);
    setIsLoading(false);

  })
  .finally(() => {
  });
 

}

function clearData(){
  setData([]);
}

var headingStyle = {
      padding:'25px',
      backgroundColor:'orange'
    };
  return (<div>
    {isLoading ? <LoadingSpinner /> : []}

    <h1 style={headingStyle}>Universities in {country === 'United+States' ? 'USA' :country }</h1>
    <button style={{backgroundColor : 'purple',padding: '10px',color:'white'}} onClick={clickHandler}>Get all Universities in {country === 'United+States' ? 'USA' :country }</button> &nbsp; 
    <button style={{color:'white',padding:'10px',backgroundColor:'red'}} onClick={clearData}>Clear</button>&nbsp; 
    <select value={country} name="countries" id="countries" style={{color:'white',padding:'10px',backgroundColor:'grey'}} 
    onChange={e  => setCountry(e.target.value) }
    >
        <option value="United+States">USA</option>
        <option value="India">India</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        <option value="China">China</option>

    </select >

    {data.slice(0,1000).map(({name,country,domains,web_pages}) => (
      <div>
        <ul key={name}>        
        <h4 style={{color: 'red',padding:'5px'}}>{country}</h4>
        <h3 style={{padding:'5px'}}>{domains}</h3>
        <h4 style={{padding:'10px'}}><a href={web_pages}>{name}</a></h4>
        

        </ul>
      </div>
    ))}  
  </div>)
}
