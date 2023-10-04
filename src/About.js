import { Panel } from '@webeetle/windy';
import Auth0Logo from './assets/auth0-svg.svg';
import MongoLogo from './assets/MongoDB_Logo_FullColorBlack_RGB.svg';
import AWSLogo from './assets/Amazon_Web_Services_Logo.svg';
import ReactLogo from './assets/React_Logo.png';

const About = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="p-12 m-auto space-y-4 md:w-1/2">
          <p className="text-xl font-light">This page is for my fellow geeks who want to know what's under the hood.</p>
          <p className="text-xl font-light">This web app is a fullstack app written by me. It is written using various 
            technologies I've wanted to try and some I've already used.</p>
          <p className="text-2xl">Let's get into it!</p>
        </div>
      </div>
      <div className="grid-cols-2 p-10 md:grid md:p-20">
        <section>
          <Panel className="p-4 border-0 md:p-16">
            <h2 className="mb-5 text-5xl font-bold">Auth</h2>
            <p className="text-xl">
              Starting at the beginning I chose Auth0 <br />
              as the authorization because of how easy it was to <br />
              integrate and not worry about passing tokens around. 
            </p>
            <p className="text-xl">
              While the idea is to have Add Meal be a protected <br />
              route I disabled that for now to be able to see the form. 
            </p>
            <p className="text-xl">
              The signup button is functional so you can at least see <br />
              how the flow works. Feel free to sign up (no extra benefits right now, sorry).
            </p>
          </Panel>
        </section>
        <section className="p-12">
          <img 
            className="w-64 m-auto"
            src={ Auth0Logo } 
            alt="Auth0 Logo" 
          />
        </section>
      </div>
      <div className="grid-cols-2 p-10 bg-gray-200 md:grid md:p-20">
      
        <section className="p-12">
          <img 
            className="m-auto w-80"
            src={ MongoLogo } 
            alt="MongoDB Logo" 
          />
        </section>
        <section>
          <Panel className="p-4 bg-gray-200 border-0 md:p-16">
            <h2 className="mb-5 text-5xl font-bold">Database</h2>
            <p className="text-xl">This web app uses a MongoDB cluster to store and retrieve data</p>
          </Panel>
        </section>
      </div>
      <div className="grid-cols-2 p-10 md:grid md:p-20">
        <section>
          <Panel className="p-4 border-0 md:p-16">
            <h2 className="mb-5 text-5xl font-bold">API</h2>
            <p className="text-xl">
              The API is written with the serverless stack <br />
              using Lambda functions hosted with AWS
            </p>
          </Panel>
        </section>
        <section className="p-12">
          <img 
            className="w-64 m-auto"
            src={ AWSLogo } 
            alt="Amazon Web Services Logo" 
          />
        </section>
      </div>
      <div className="grid-cols-2 p-10 bg-gray-200 md:grid md:p-20">
        <section className="p-12">
          <img 
            className="w-64 m-auto"
            src={ ReactLogo } 
            alt="React Logo" 
          />
        </section>
        <section>
          <Panel className="p-4 bg-gray-200 border-0 md:p-16">
            <h2 className="mb-5 text-5xl font-bold">Frontend</h2>
            <p className="text-xl">
              All the UI comonents are written in React <br />
              and styled with Tailwind CSS.  <br />
              Also, some CSS components are using Windy, 
              a Tailwind CSS component library
            </p>
          </Panel>
        </section>
      </div>
    </div>
  )
}

export default About;
