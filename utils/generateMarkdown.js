function generateGithubProjectURL(repoName, username) {
    return `https://github.com/${username}/${repoName}/`;
}

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
    </li>
    <li><a href="#installation">Installation</a></li>
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


### Installation

${data.installation}
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

${data.usage}

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

${data.contribution}

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

[![License][license-shield]][license-url] See "LICENSE.txt" for more information.

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
[license-url]: ${projectURL}/blob/main/LICENSE.txt
`;
}

module.exports = generateMarkdown;
