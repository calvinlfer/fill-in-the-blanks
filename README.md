# Fill-In-The-Blanks (F.I.T.B.)
The F.I.T.B. is to take opinionated templated JSON files and JSON data
and then produces output by filling in the placeholders with data.

## Installation
`npm install -g fill-in-the-blanks`

## Example
Templated file with placeholders
```json
{
    "exampleField": "{{=param.fieldA}}",
    "sevenFold": "{{=param.fieldB}}",
    "normal": "just some data"
}
```

Data file
```
{
    "fieldA": "valueForFieldA",
    "fieldB": "anotherValueForFieldB"
}
```

Output file
```
{
    "exampleField": "valueForFieldA",
    "sevenFold": "anotherValueForFieldB",
    "normal": "just some data"
}
```
