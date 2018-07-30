import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Preview from './Preview.js';
import Formulario from './Formulario.js';
import './Main.css';

// de
const paletteClass = {
  "1": 'greenTarget',
  "2": 'redTarget',
  "3": 'greyTarget'
}

const fontClass = {
  "1": 'ubuntuFont',
  "2": 'comicFont',
  "3": 'montFont'
}

class Main extends Component {
  constructor() {
    super();

    this.state = {
      name: "Bucky",
      job: "Recat",
      email: "buckythecat@gmail.com",
      phone: "666666666",
      github: "buckythecat",
      linkedin: "buckythecat",
      photo: "./images/cat.png",
      skills: "HTML",
      palette: "2",
      typography: "1"
    }
  }

  render() {
    const  userInfo  = this.state
    return (
      <Fragment>
        <Header />
        <main className="container-mediaqueries-preview">
          <Preview
            name={userInfo.name}
            job={userInfo.job}
            email={userInfo.email}
            phone={userInfo.phone}
            github={userInfo.github}
            linkedin={userInfo.linkedin}
            photo={userInfo.photo}
            skills={userInfo.skills}
            paletteClass={paletteClass[userInfo.palette]}
            typographyClass={fontClass[userInfo.typography]}
          />
          <Formulario />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Main;