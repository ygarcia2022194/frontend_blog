import {Nav} from '../../components/nav/Nav.jsx'
import React, { useState, useEffect } from 'react'
import { getPosting } from '../../services/api.jsx';
import { Posting } from '../../components/posting/Posting.jsx';
import { PostingDetails } from '../../components/postingDetails/PostingDetails.jsx';

export const Dashboard = () => {
  const [publication, setPublication] = useState([]);
  const [selectedPostingId, setSelectedPostingId] = useState(null)

  const handleReadMoreClick =(id) =>{
    console.log('clickear leer mas: ', id);
    setSelectedPostingId(id);
  }

  useEffect(()=>{
    console.log('Id de la publicacion seleccionada: ', selectedPostingId)
  }, [selectedPostingId])

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
      {selectedPostingId === null ? (
        <Posting publication={publication} onReadMoreClick={handleReadMoreClick}/>
      ):(
        <PostingDetails publicationId={selectedPostingId}/>
      )}
    </div>
    </>
  )
}