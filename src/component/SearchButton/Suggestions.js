import React from 'react'
import {Link} from 'react-router-dom';
import Style from './Suggestions.css';
const Suggestions = (props) => {
  const slicedResults = props.results.slice(0,4);
  const options = slicedResults.map(r => (
    <Link to={"/movie/"+r.id} key={r.id} >
    <li >
      {r.title}
    </li>
    </Link>
  ))
  return <ul className={Style.Suggestions}>{options}</ul>
}

export default Suggestions