## SOAP

-- SOAP stands for Simple Object Access Protocol
-- SOAP is an application communication protocol
-- SOAP is the way of creation Web Services

```markdown
<?xml version="1.0"?>

<soap:Envelope
xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">

<soap:Header>
...
</soap:Header>

<soap:Body>
...
<soap:Fault>
...
</soap:Fault>
</soap:Body>

</soap:Envelope>
```

## WSDL

-- WSDL stands for Web Service Description Language
-- WSDL is used to describe web services

```markdown
<definitions>

<types>
  data type definitions........
</types>

<message>
  definition of the data being communicated....
</message>

<portType>
  set of operations......
</portType>

<binding>
  protocol and data format specification....
</binding>

</definitions>
```

## XML

-- XML stands for eXtensible Markup Language
-- XML is a markup language much like HTML
-- XML was designed to store and transport data

### Which one? XML or JSON

-- XML for validation
-- XML for type check
-- JSON for parsing
-- JSON for file size and performance
