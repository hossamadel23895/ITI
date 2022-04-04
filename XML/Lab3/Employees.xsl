<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Employees Table</h2>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th align="center"> Name </th>
            <th align="center"> Email </th>
            <th align="center"> Phone (Home) </th>
            <th align="center"> Phone (Work) </th>
            <th align="center"> Phone (Mobile) </th>
            <th align="center"> Street Name </th>
            <th align="center"> Building Name </th>
            <th align="center"> Number </th>
            <th align="center"> Region </th>
            <th align="center"> City </th>
            <th align="center"> Country </th>
          </tr>
          <xsl:for-each select="Employees/Employee">
            <tr>
              <td align="center">
                <xsl:value-of select="name" />
              </td>
              <td align="center">
                <xsl:value-of select="email" />
              </td>
              <td align="center">
                <xsl:value-of select="phones/phone[@type = 'home']" />
              </td>
              <td align="center">
                <xsl:value-of select="phones/phone[@type = 'work']" />
              </td>
              <td align="center">
                <xsl:value-of select="phones/phone[@type = 'mobile']" />
              </td>
              <td align="center">
                <xsl:value-of select="address/Street" />
              </td>
              <td align="center">
                <xsl:value-of select="address/Building" />
              </td>
              <td align="center">
                <xsl:value-of select="address/Number" />
              </td>
              <td align="center">
                <xsl:value-of select="address/Region" />
              </td>
              <td align="center">
                <xsl:value-of select="address/City" />
              </td>
              <td align="center">
                <xsl:value-of select="address/Country" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>