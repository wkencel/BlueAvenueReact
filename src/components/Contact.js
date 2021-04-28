// class Main extends React.Component {
//   render() {
//     let close = (
//       <div
//         className="close"
//         onClick={() => {
//           this.props.onCloseArticle()
//         }}
//       ></div>
//     )

//     return (
//       <div
//         ref={this.props.setWrapperRef}
//         id="main"
//         style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
//       >

//         <article
//           id="contact"
//           className={`${this.props.article === 'contact' ? 'active' : ''} ${
//             this.props.articleTimeout ? 'timeout' : ''
//           }`}
//           style={{ display: 'none' }}
//         >
//           <h2 className="major">Contact</h2>
//           <form method="post" action="#">
//             <div className="field half first">
//               <label htmlFor="name">Name</label>
//               <input type="text" name="name" id="name" />
//             </div>
//             <div className="field half">
//               <label htmlFor="email">Email</label>
//               <input type="text" name="email" id="email" />
//             </div>
//             <div className="field">
//               <label htmlFor="message">Message</label>
//               <textarea name="message" id="message" rows="4"></textarea>
//             </div>
//             <p>Or schedule a meeting...</p>
//             <a  href="https://calendly.com/blueavenuegroove/intro-meeting"> Set up a time</a>
//             <ul className="actions">
//               <li>
//                 <input type="submit" value="Send Message" className="special" />
//               </li>
//               <li>
//                 <input type="reset" value="Reset" />
//               </li>
//             </ul>
//           </form>
//           <ul className="icons">
//             <li>
//               <a href="https://codebushi.com" className="icon fa-instagram">
//                 <span className="label">Instagram</span>
//               </a>
//             </li>
//             <li>
//               <a href="https://codebushi.com" className="icon fa-facebook">
//                 <span className="label">Facebook</span>
//               </a>
//             </li>
//             <p> more icons here i.e. Wedding Wire, The Knot</p>
//           </ul>
//           {close}
//         </article>
//       </div>
//     )
//   }
// }

import React from "react"

class ContactForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { fromEmail: "", subject: "", body: "" },
     submitting: false,
     error: null,
   }
 }

 onChange = event => {
   const name = event.target.getAttribute("name")
   this.setState({
     message: { ...this.state.message, [name]: event.target.value },
   })
 }
 render() {
   return (
     <>
       <div>{this.state.error}</div>
       <form
         style={{
           display: `flex`,
           flexDirection: `column`,
           maxWidth: `500px`,
         }}
         method="post"
       >
         <label htmlFor="fromEmail">Your email address:</label>
         <input
           type="email"
           name="fromEmail"
           id="fromEmail"
           value={this.state.message.fromEmail}
           onChange={this.onChange}
         ></input>
         <label htmlFor="subject">Subject:</label>
         <input
           type="text"
           name="subject"
           id="subject"
           value={this.state.message.subject}
           onChange={this.onChange}
         />
         <label htmlFor="body">Message:</label>
         <textarea
           style={{
             height: `150px`,
           }}
           name="body"
           id="body"
           value={this.state.message.body}
           onChange={this.onChange}
         />
         <button
           style={{
             marginTop: `7px`,
           }}
           type="submit"
           disabled={this.state.submitting}
           onClick={this.onClick}
         >
           Send message
         </button>
       </form>

       <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <p>Or schedule a meeting...</p>
            <a  href="https://calendly.com/blueavenuegroove/intro-meeting"> Set up a time</a>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
     </>
   )
 }
}

export default ContactForm