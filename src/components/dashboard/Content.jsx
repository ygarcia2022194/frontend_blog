import {Route, Routes} from "react-router-dom"
import {Posting} from "../posting/Posting"
import {PostingView} from "../posting/PostingView"

export const Content = ({posting, getPosting})=>{
    return(
        <div className="content-container">
            <Routes>
                <Route path="posting" element={<Posting posting={posting}/>}/>
                <Route path="channel/:id" element={<PostingView getPosting={getPosting}/>}/>
            </Routes>
        </div>
    )
}