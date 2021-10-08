# basic-api-server

<!-- Template Taken From -->
<!-- https://github.com/othneildrew/Best-README-Template -->

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  
<h3 align="center">Api Server</h3>

  <p align="center">
    Learn more about servers and how to create a basic server with API's
    <br />
    <a href="https://github.com/fadnesscharlie/api-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fadnesscharlie/api-server">View Demo</a>
    ·
    <a href="https://github.com/fadnesscharlie/api-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/fadnesscharlie/api-server/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[Heroku Live Server Link](https://api-server-401n19.herokuapp.com/)  
[GitHub Pull Request](https://github.com/fadnesscharlie/api-server/pulls)

### UML

![UML](img/Server-UML.png)


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Postgres](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Jest](https://www.npmjs.com/package/jest)
* [Supertest](https://www.npmjs.com/package/supertest)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Downloading postgres to your local machine is what connects this applicaton do a database. Please refer to the postgres docs on how to install depending on your machine of choice.  
  
[Postgres](https://www.postgresql.org/about/)

### Prerequisites

Before you get started, starting up your Postgres Database
* createdb
  ```
  people
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/fadnesscharlie/api-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `config.js`
   ```js
   const DATABASE_URL = Your Postgres local host with the table named 'people';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This API server is to show and explain the simple essence of an express server with API integration. There are also test and make sure the database running and help create the CI atmosphere.

Running on your local machine requires working through the 'dev' branch.

```
npm run dev
```

On another terminal you can:

```
npm test
```
To run all of the test.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - Charlie Fadness

Project Link: [https://github.com/fadnesscharlie/api-server](https://github.com/fadnesscharlie/api-server)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fadnesscharlie/api-server.svg?style=for-the-badge
[contributors-url]: https://github.com/fadnesscharlie/api-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fadnesscharlie/api-server.svg?style=for-the-badge
[forks-url]: https://github.com/fadnesscharlie/api-server/network/members
[stars-shield]: https://img.shields.io/github/stars/fadnesscharlie/api-server.svg?style=for-the-badge
[stars-url]: https://github.com/fadnesscharlie/api-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/fadnesscharlie/api-server.svg?style=for-the-badge
[issues-url]: https://github.com/fadnesscharlie/api-server/issues
[license-shield]: https://img.shields.io/github/license/fadnesscharlie/api-server.svg?style=for-the-badge
[license-url]: https://github.com/fadnesscharlie/api-server/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/fadnesscharlie
[product-screenshot]: images/screenshot.png
