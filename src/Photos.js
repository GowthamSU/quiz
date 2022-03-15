import React,{useState,useEffect} from 'react';
import './photos.css';
function Photos(){
  const[query,setQuery]=useState('Animals')
  const[loading,setLoading]=useState(true)
  const[photo,setPhoto]=useState([])
  const[text,setText]=useState('')
  const fetchData=async()=>{
    setLoading(true)
    const response=await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
    const data=await response.json();
     setPhoto(data.photos.photo)
     setLoading(false)
  }
  console.log(photo);
   useEffect(()=>{fetchData()},[query])
    return(
    <div className='page' >
      <div className='container'>
      <h2>Snaps</h2>
      <button className="btn btn-primary mr-2" onClick={()=>(setQuery('Birds'))}>Birds</button>
      <button className="btn btn-secondary marginRight" onClick={()=>(setQuery('Games'))}>Games</button>
      <button className="btn btn-secondary mr-2" onClick={()=>(setQuery('Hill Stations'))}>Hill Stations</button>
      <button className="btn btn-secondary" onClick={()=>(setQuery('Flags'))}>Flags</button><br/>
      <input type="text" value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <button className="btn btn-secondary" onClick={()=>setQuery(text)}>Submit</button></div>

      <h2>{`${query}`} Photos</h2>
      {loading &&<div style={{textAlign:'center'}}>  <div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div></div> }
      <div className='image'>

      {!loading &&  photo.map((p)=>{
        const{id,title,farm,server,secret}=p;
     let url= `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
     return(
      <div key={id}>
      <img src={url}/>
      </div>)}
      )}
      </div>
    </div>
  )
}
export default Photos;
