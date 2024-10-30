<#-- Template for generating documentation for custom changes -->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            targetNamespace="http://www.liquibase.org/xml/ns/dbchangelog"
            xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
            elementFormDefault="qualified">

    <#list changes as name, changeSet>
    <#--  Access metaData directly if accessible  -->
        <#assign ch = changeSet.metaData>
        <xsd:complexType name="${ch.name}">
            <xsd:annotation>
                <xsd:documentation>
                    ${ch.description}
                </xsd:documentation>
            </xsd:annotation>
            <#list changeSet.getParams() as params>
            <#--  Mapping types to XSD types  -->
                <#--  Add other mappings as needed  -->
                <#assign xsdType = "xsd:${params.dataType?lower_case}">
                <#if xsdType == "xsd:biginteger">
                    <#assign xsdType = "xsd:integer">  <#--  Correct mapping for biginteger  -->
                <#--  Add other mappings as needed  -->
                </#if>
                <xsd:attribute name="${params.parameterName}" type="${xsdType}">
                    <xsd:annotation>
                        <xsd:documentation>
                            ${params.description}
                        </xsd:documentation>
                    </xsd:annotation>
                </xsd:attribute>
            </#list>
        </xsd:complexType>

        <xsd:group name="changeSetChildren">
            <xsd:choice>
                <#list changeSet.getParams() as params>
                    <xsd:element name="${params.parameterName}" type="${xsdType}" maxOccurs="unbounded">
                    </xsd:element>
                </#list>
            </xsd:choice>
        </xsd:group>
    </#list>

</xsd:schema>


