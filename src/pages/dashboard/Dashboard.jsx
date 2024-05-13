import {Nav} from '../../components/nav/Nav.jsx'
import { useState, useEffect } from 'react'
import { getPosting } from '../../services/api.jsx';
import { Posting } from '../../components/posting/Posting.jsx';
//import { Footer} from '../../components/footer/Footer.jsx'

export const Dashboard = () => {
  const [publication, setPublication] = useState([]);
  
  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await getPosting();
        if (!response.error) {
          setPublication(response.data || []);
        } else {
          console.log('Error', response.data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchPublication();
  }, []);

  return (
    <>
    <div>
      <Nav/>
      <Posting publication={publication} />
    </div>
    </>
  )
}