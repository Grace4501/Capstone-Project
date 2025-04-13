import { useState } from 'react'
import '../../styles/BusinessMyProject.css';
import Options2 from '../../resources/Options2.png'
import BlankProfile from '../../resources/BlankProfile.png'

export default function BusinessMyProjects() {
   const [activeTab, setActiveTab] = useState("my-invites");

   return (
      <div>
         <h1> My Projects </h1>
         {/* Navigation sections */}
         <div>
            <button onClick={() => setActiveTab("my-invites")}>My Invites</button>
            <button onClick={() => setActiveTab("current-projects")}>Current Projects</button>
            <button onClick={() => setActiveTab("new-projects")}>New Projects</button>
            <button onClick={() => setActiveTab("reviews")}>Reviews</button>
            <button onClick={() => setActiveTab("my-invoices")}>My Invoices</button>
            <button onClick={() => setActiveTab("my-projecthistory")}>My Project History</button>
         </div>
         <br />
         {/* Content Sections */}
         {activeTab === "my-invites" && (
            <div id="my-invites">
               <div>
                   <button> + Project Upload</button>
                  <input type="search" placeholder='search...' />
                  <select>
                     <option> All time </option>
                  </select>
               </div>
               <div>
                  <h2> Creating new website UI elements</h2>
                <button> <img src={Options2}/> </button>
                  <p> Visual elements: With the site architecture and some content in place, we can start working on the visual brand.
                     Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles,
                     moodboards, and element collages can help with this process. Testing: By now, you've got all your pages and defined how they display to the site
                     visitor, so it's time to make sure it all works. Combine manual browsing of the site on a variety of devices with automated site crawlers to identify
                     everything from user experience issues to simple broken links.  </p>
                  <br />
                  <br />
                  <br />
                  <div>
                     <h5> Concept Design</h5>
                     <input type="checkbox" />
                     <p> design process will be shaped by existing branding elements, colour choices, and logos </p>
                     <input type="checkbox" />
                     <p>do high-quality images give a website a professional look and feel</p>
                     <p> 3 days left </p>
                     <input type="checkbox" />
                     <p> also communicate a message, are mobile-friendly, and help build trust </p>
                     <input type="checkbox" />
                     <p>The usual suspects (Sketch, Illustrator, Photoshop, etc.)</p>
                  </div>
                  <div>
                     <h5> User Experience Testing</h5>
                     <input type="checkbox" />
                     <p> moodboards, style tiles, element collagesVisual style guides review and recreating design inspiration and build a mockup of the wireframe</p>
                     <input type="checkbox" />
                     <input type="checkbox" />
                 </div>
               </div>
               <div>
                  <h2> Project Description</h2> 
                  <button> <img src={Options2}/> </button>
                  <p> Visual elements: With the site architecture and some content in place, we can start working on the visual brand. Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles, moodboards, and element collages can help with this process.</p>
                 <br/>
                 <p> Due Date</p>
                 <p>Mon, 16 Sep 2020</p>
                <br/>
                <p> Participants </p>
                <img src={BlankProfile}/>
                <img src={BlankProfile}/>
                <img src={BlankProfile}/>
               </div>
               <br/>
               <p>Details</p>
               <br/>
               <p>STATUSSTART DAYDEADLINETAGS</p>
               <br/>
               <p>Mon, 16 Sep 2020 </p> 
               <p> 9 days left</p>
               <br/>
               <p> Webdesign, Media, UI Design, User Experience</p>
               <br/>
               <p> Attachment </p>
               <p>3</p>
               <p> design-scope.pdf, <br/>  dashboard.png,wireframe-elements.sket <br/> ch</p>
               <br/>
               <p> 6/8 </p>
               <div className="progress-container">
                  <div className="progress-bar">
                </div>
                </div>
            </div>
         )}
         {activeTab === "current-projects" && (
            <div id="current-projects">
               <p>Project Status </p>
            </div>
         )}
         {activeTab === "new-projects" && (
            <div id="new-projects">
                <p>Project Upload</p>
              
            </div>
         )}
         {activeTab === "reviews" && (
            <div id="reviews">
               <p> Project Upload</p>
               
            </div>
         )}
         {activeTab === "my-invoices" && (
            <div id="my-invoices">
                <p>Invoice #1: $500 (Paid)</p>
                <p>Invoice #2: $250 (Pending)</p>
            </div>
         )}
         {activeTab === "my-projecthistory" && (
            <div id="my-projecthistory">
            </div>
         )}
      </div>
   );
}