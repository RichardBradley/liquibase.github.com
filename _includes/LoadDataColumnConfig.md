    <tr>
      <td>name</td>
      <td>Name of the column. <i>Required</i></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Data type of the column. Its value has to be one of the <a href="../../javadoc/liquibase/change/core/LoadDataChange.LOAD_DATA_TYPE.html" >LOAD_DATA_TYPE</a></td>
    </tr>
    <tr>
      <td>header</td>
      <td>Name of the column in the CSV file from which the value for the column shall be taken if its different from
       the column name. Ignored if <i>index</i> is also defined.
      </td>
    </tr>
    <tr>
      <td>index</td>
      <td>Index of the column in the CSV file from which the value for the column shall be taken</td>
    </tr>
