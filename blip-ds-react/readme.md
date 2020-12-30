# blip-ds-react
This project is used to wrap all blip-ds components on a ReactJS component. This library will be imported on all ReactJS apps that will use the blip-ds components. Instead of creating a new package, we choose to temporary keep this package inside the blip-ds project.

# What's the reason of this project?
React has a difficult story with web components. Their documentation shows the simplest possible example but more than likely you will want to pass more than strings to your component. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/react.

# How to update and build this project?
First of all, on the blip-ds root package.json we have a script called ```build:react```, which runs after the ```build``` script is called. This script is called automatically on the github actions pipeline.

# How to update the blip-ds version on this project?
To update the blip-ds version and generate react components based on it, the only thing to do is change the version of the blip-ds package in the blip-ds-react/package.json file.