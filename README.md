# Fill-In-The-Blanks (F.I.T.B.)
The F.I.T.B. is to take opinionated templated JSON files and JSON data
and then produces output by filling in the placeholders with data.

## Installation
`npm install -g fill-in-the-blanks`

## Usage
`fill-in-the-blanks <templateFile> <dataFile> <outputFile>`

## Example
Templated file with placeholders
backup-template.json
```json
{
    "exampleField": "{{=param.fieldA}}",
    "sevenFold": "{{=param.fieldB}}",
    "normal": "just some data"
}
```

Data file
data.json
```
{
    "fieldA": "valueForFieldA",
    "fieldB": "anotherValueForFieldB"
}
```

Executing `fill-in-the-blanks backup-template.json data.json output.json`
will produce:

Output file
output.json
```
{
    "exampleField": "valueForFieldA",
    "sevenFold": "anotherValueForFieldB",
    "normal": "just some data"
}
```
