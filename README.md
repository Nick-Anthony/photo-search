<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Nick-Anthony/photo-search">
    <img src="web/public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Photo Search</h3>

  <p align="center">
    A React webapp that displays photos in a grid and allows users to search and view photos.
    <br />
    <a href="https://photo-search.me"><strong>See the live version»</strong></a>
    <br />
    <br />
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
      <a href="#running-locally">Running Locally</a>
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

This project was my intro into react full stack development. It uses Node.Js with Express on the backend. A Postgres database was created to store all the photos and photographer information. React Router was used on the frontend to deal with navigation. A Masonry Grid was used to display the images in a grid. Each image is clickable and brings up a popup with the image and the photographer's information.

![Alt Text](images/gif.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![React-Router][React-Router]][React-Router-url]
- [![Express][Express]][Express-url]
- [![NodeJs][NodeJs]][Node-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Running Locally

Make sure you have Docker installed which can be installed [here](https://www.docker.com)

### Setup

To run the project locally, you can use a single command from the root of the project:

```bash
docker-compose up
```

This may take a while on the first run as the `postgres` and `node` docker images are downloaded.

Once you see logs from the `postgres` service saying "database system is ready to accept connections", you will need to import the database schema and records:

```bash
docker-compose exec postgres psql -U postgres -d photos -f /migration/migration.sql
```

This command will initialize your database with pre-populated `photo`, `collection`, and `photographer` tables.

## Running locally

After the initial setup above, you can run the local environment at any time with:

```bash
docker-compose up
```

Both the `api` and `web` servers will automatically restart as you make code changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Future Improvements -->

## Future Improvements

- I would like to make this a responsive webapp and work on developing it to work on mobile devices
- I want to implement a Lazy Load for the images instead of the current spinner

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nick Anthony - nanthony@uwaterloo.ca

Project Link: [https://github.com/Nick-Anthony/photo-search](https://github.com/Nick-Anthony/photo-search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Nick-Anthony/photo-search.svg?style=for-the-badge
[contributors-url]: https://github.com/Nick-Anthony/photo-search/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nick-Anthony/photo-search.svg?style=for-the-badge
[forks-url]: https://github.com/Nick-Anthony/photo-search/network/members
[stars-shield]: https://img.shields.io/github/stars/Nick-Anthony/photo-search.svg?style=for-the-badge
[stars-url]: https://github.com/Nick-Anthony/photo-search/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nick-Anthony/photo-search.svg?style=for-the-badge
[issues-url]: https://github.com/Nick-Anthony/photo-search/issues
[license-shield]: https://img.shields.io/github/license/Nick-Anthony/photo-search.svg?style=for-the-badge
[license-url]: https://github.com/Nick-Anthony/photo-search/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nicholas-jt-anthony/
[product-screenshot]: images/screenShot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/en/main
[Express]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=Express&logoColor=white
[Express-url]: https://expressjs.com
[NodeJs]: https://img.shields.io/badge/Node.Js-339933?style=for-the-badge&logo=NodedotJs&logoColor=white
[Node-url]: https://nodejs.org/en
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org
