const { XMLParser, j2xParser } = require('fast-xml-parser');
const { readFileSync, writeFileSync } = require('fs');

const xmlFile = readFileSync(`${process.cwd()}/xml/nfe-1.xml`, 'utf8');
const parser = new XMLParser();
const json = parser.parse(xmlFile);

console.log(`NF-e Fatura...: `, json.nfeProc.NFe.infNFe.cobr.fat);
console.log(`NF-e Duplicata: `, json.nfeProc.NFe.infNFe.cobr.dup.vDup);

// Update the desired tag
json.nfeProc.NFe.infNFe.cobr.dup.vDup = 'Updated Value';

// Convert the updated JSON back to XML
// const j2xParserInstance = new j2xParser({ format: true });
// const updatedXml = j2xParserInstance.parse(json);

// Write the XML string to a new XML file
// const updatedFilePath = `${process.cwd()}/xml/nfe-updated.xml`;
// writeFileSync(updatedFilePath, updatedXml, 'utf8');

// console.log('Updated XML file created at:', updatedFilePath);
