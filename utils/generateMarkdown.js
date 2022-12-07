// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     return license === "Apache"
//         ? "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//         : license === "GNU GPLv2"
//         ? "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
//         : license === "GNU GPLv3"
//         ? " [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
//         : license === "MIT"
//         ? " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//         : "";
// }

function generateGithubProjectURL(repoName, username) {
    return `https://github.com/${username}/${repoName}/`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const projectURL = generateGithubProjectURL(data.repoName, data.username);
    return `
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]


<h3 align="center">${data.repoName}</h3>

  <p align="center">
    <br />
    <a href="${projectURL}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="${projectURL}/issues">Report Bug</a>
    ·
    <a href="${projectURL}/issues">Request Feature</a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${data.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  sh
  npm install npm@latest -g
  

### Installation

${data.installation}
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

${data.usage}

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch ("git checkout -b feature/AmazingFeature")
3. Commit your Changes ("git commit -m 'Add some AmazingFeature'")
4. Push to the Branch ("git push origin feature/AmazingFeature")
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See "LICENSE.txt" for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

${data.username} - ${data.email}

Project Link: [${projectURL}](${projectURL})

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/${data.username}/${data.repoName}.svg?style=for-the-badge
[contributors-url]: ${projectURL}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${data.username}/${data.repoName}.svg?style=for-the-badge
[forks-url]: ${projectURL}/network/members
[stars-shield]: https://img.shields.io/github/stars/${data.username}/${data.repoName}.svg?style=for-the-badge
[stars-url]: ${projectURL}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${data.username}/${data.repoName}.svg?style=for-the-badge
[issues-url]: ${projectURL}/issues
[license-shield]: https://img.shields.io/github/license/${data.username}/${data.repoName}.svg?style=for-the-badge
[license-url]: ${projectURL}/blob/master/LICENSE.txt
`;
}

module.exports = generateMarkdown;
