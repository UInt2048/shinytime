This repo is a Python package that defines a simple custom input component for Shiny.

## Usage

The Python component provides the following functionality:

```python
def input_time(id: str, label: str = "Time", value: str = "12:00:00",
    seconds: bool = True, minute_step: int? = None, width: str? = None)
```

This library is intended to provide an alternative to https://github.com/burgerga/shinyTime/ usable in Shiny for Python.

## Internals for Developers

This component was created based on the template at `shiny create --template js-react`.
The following documentation is from that template:

### Structure

The code structure is as follows:

```
package.json        # Contains the dependencies needed to build the components javascript
srcts/              # Source Typescript files
  index.ts          # Where we define the input component
shinytime/
  shinytime.py      # Python functions for the input component
  __init__.py       # Used to define exports for python package.
  distjs/           # Where the bundled js files are put
example-app/
  app.py            # Example app for the custom-input component
...                 # ...Various other config files needed for python and js projects
```

### Using/ Developing package

#### Setting up python package in "editable" mode

This should be run from the root of the repo

```
pip install -e .
```

### Setting up JS for development

Install the dependencies for JavaScript:

```
npm install
```

Build assets into the `shinytime/distjs` folder:

```
npm run build
```

Or if you want to watch the files for changes and rebuild on the fly you can run:

```
npm run watch
```

### Running the example app

With both the python package and the javascript built, you can run the example apps (typically using the Shiny vscode extension).

If you want to run the example app from the command line you can run:

```
shiny run example-app/app.py
```
