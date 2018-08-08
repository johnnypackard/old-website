import React from 'react'
import { Document, Page } from 'react-pdf'
import JohnnyPic1 from '../images/JohnnyPic1.jpg'
import solo from '../images/solo.png'
import jpResume from '../images/jpResume.pdf'

class Main extends React.Component {
  state= {
    numPages: 2,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={JohnnyPic1} alt="" /></span>
          <p>An unabashed life-long nerd, Johnny Packard proudly joined the Minneapolis tech scene in 2018 by attending Prime Digital Academy, an intensive, bootcamp-style Full Stack Engineering training program. Johnny has an extensive and diverse background in theatre, music, elementary education, and team leadership.</p>
          <p>A classically-trained pianist and lirico-spinto tenor, Johnny has produced, directed, and performed in over 40 music performances and theatrical productions on both the professional and community levels. Using this knowledge, paired with a TEFL Certificate, Johnny taught Elementary English, Music, and French to 1st-5th grade students in Prague, Czech Republic for two semesters.</p>
          <p>After returning from Europe, Johnny joined the professional financial world as an Operations Coordinator, and after only three months on the Operations team, Johnny exceeded all performance metrics. Showing exceptional business and self-growth acumen, Johnny was offered a three-month rotation as a Social Recruiter working in Boston, Massachusetts and Saint Cloud, Minnesota. The rotation was extremely successful, and provided the bank with 32 new talent.</p>
          <p>Johnny is excited to use these skills along with the new skills gained at Prime to take the tech world by storm, and looks forward to learning throughout the journey.</p>
          <p>Check out some of Johnny's <a href="#work">work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={solo} alt="" /></span>
          <p>MPLS Trans Resources is a webapp which offers safe, respectful resources to the Minneapolis Transgender community. Built as a solo project while attending Prime Digital Academy.</p>
          <p>Technologies used: React, Redux, PostgreSQL, Node.js, Express, Passport, Semantic-UI, Git, GitHub, and built on Visual Studio Code</p>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main">
            <Document 
              file={jpResume} 
              onLoadSuccess={this.onDocumentLoad}
            >
              {[1,2].map(pageNumber => (
                <Page pageNumber={pageNumber} />
              ))}
            </Document>
            {/* <p>Page {pageNumber} of {numPages}</p> */}
          </span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
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
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="http://linkedin.com/in/johnnypackard" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            {/* <li><a href="https://www.facebook.com/packard24601" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
            <li><a href="https://www.instagram.com/giannipakkuman/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/johnnypackard" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main