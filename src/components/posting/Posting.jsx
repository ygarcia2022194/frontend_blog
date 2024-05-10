import { useState } from "react";
import { Input } from "../../settings/Input";
import { usePosting } from "../../shared/hooks/usePosting";
import '../components/css/posting.css'
import { useNavigate } from "react-router-dom";

export const Posting = ({posting}) =>{
    const navigate = useNavigate()

    const handleNavigateToPosting = (id) =>{
      navigate(`/posting/${id}`)
    }

    return(
      <div className="channels-container">
        {posting.map((c)=>(
          <PostingCard
              key={c.id}
              id={c.id}
              titulo={c.titulo}
              categoria={c.categoria}
              texto={c.texto}
              image={c.image}
              navigateToPostingHandler={handleNavigateToPosting}
          />
        ))}
      </div>
    )
    
}