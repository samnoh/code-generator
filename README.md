# React Code Generator

<div align="center">
<img src="https://img.shields.io/npm/v/%40samnoh%2Freact-gen"><img src="https://img.shields.io/npm/l/%40samnoh%2Freact-gen">
</div>

<br/>
<br/>

## Install

```bash
npm install -g @samnoh/react-gen
```

## Usage

-   Create a class-based 'Button' component in the '/src' directory

```bash
reactgen -o /src -n Button -c
```

-   Create a functional 'AuthTemplate' typescript component in the default directory

```bash
reactgen -n AuthTemplate -t
```

## Config

-   You can set default values in `package.json`

```json
"config": {
    "reactgen": {
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
