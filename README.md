# React Code Generator

## Install

```bash
npm install -g @samnoh/react-gen
```

## Usage

-   Create a class-based 'Button' component in the '/src' directory

```bash
codegen -o /src -n Button -c
```

-   Create a functional 'AuthTemplate' typescript component in the default directory

```bash
codegen -n AuthTemplate -t
```

## Config

-   You can set default values in `package.json`

```json
"config": {
    "codegen": {
        "defaultName": "Component",
        "baseDir": "/src/components",
        "modules": {
            "styled": "styled-components",
            "{ Link }": "react-router-dom"
        },
        "typescript": false,
        "classBased": false
    }
}
```
