import React, { Component } from 'react';
import logo from './logo.svg';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

class App extends Component {
  render() {
    return (
      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Nathan Kloer
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Web Designer
          </p>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="/img/selfie.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="camera-retro" className="pr-2" />
                      Portfolio Page
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    27/02/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Welcome</a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                  My name is Nathaniel Kloer, and I am a web-designer. I have training in video editing, 
                  social media marketing, technical support, & customer interaction. On this page you will 
                  links to skills and social media portals, along with the best way to contact me if you 
                  are interested in what I can offer you. I have a passion for stories and storytelling, 
                  and beleive that the key to capturing an individual's interest lies in mastery of this art.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/atl.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Social Media Contact
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="12" className="text-truncate pl-0 mb-3">
                        <p className="dark-grey-text">
                          Follow me on Instagram: <a href="https://www.instagram.com/toastmodernist/">@toastmodernist</a>
                          <br />
                          and Linkedn: Nathan Kloer
                        </p>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/woodscouchclose.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Take my Movie Trivia Quiz!
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="12" className="text-truncate pl-0 mb-3">
                        <p>I Love Film and always take an oppertunity to share my passion. <br /> Checkout my 
                          <a href="#!" className="dark-grey-text"> movie quiz</a> featuring some of my favorites!</p>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/final.png"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Charity Inventory App
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="12" className="text-truncate pl-0 mb-3">
                        <p><a href="https://parts-to-purpose.herokuapp.com">Parts-to-Purpose</a> is a charity inventory and portal app. <br />
                           It seeks to provide an open-source, inventory solution for charities while allowing <br /> for trusted users to access
                           their inventory and make donation requests. Please <br /><a href="#">visit our Git Repo</a> for more information.
                        </p>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/daymode.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Visit my GitRepo
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="12" className="text-truncate pl-0 mb-3">
                      <p><a href="#!" className="dark-grey-text">You're Already Here (kinda)! </a>
                      I host my portfolio on GitHub <br />because you can access all the code that goes into this page!<br /> As I update
                      the Git Repo, this website updates in real time. How cool is that!?</p>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default App;
