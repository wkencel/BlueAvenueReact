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